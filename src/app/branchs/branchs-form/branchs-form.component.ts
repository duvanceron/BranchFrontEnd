import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { branchCreateDTO } from '../branch';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-branchs-form',
  templateUrl: './branchs-form.component.html',
  styleUrls: ['./branchs-form.component.css'],
})
export class BranchsFormComponent implements OnInit {
  form: any = {};
  error :string;
  @Input()
  model: branchCreateDTO;

  @Input()
  errorArray: string[] = [];
  @Output()
  onSubmit: EventEmitter<branchCreateDTO> = new EventEmitter<branchCreateDTO>();
  constructor(private formBuilder: FormBuilder){
    this.form = this.formBuilder.group({
      DescriptionBranch: [
        '',
        {
          validators: [Validators.required,Validators.maxLength(250)],
        },
      ],
      AdressBranch: [
        '',
        {
          validators: [Validators.required,Validators.maxLength(250)],
        },
      ],
      IdentificationBranch: [
        '',
        {
          validators: [Validators.required,Validators.maxLength(50)],
        },
      ],
      DateBranch: [
        '',
        {
          validators: [],
        },
      ],
      FKMoneyBranch: [
        '',
        {
          validators: [],
        },
      ],
    });
  }

  ngOnInit(): void {
    if(this.model!== undefined){
      this.form.patchValue(this.model);
    }
  }
  getErrorName(){
    let field = this.form.get('DescriptionBranch');  
    this.error = this.getErrorField(field);
    return  this.error ; 
  }
  getErrorAdress(){
    let field = this.form.get('AdressBranch');  
    this.error = this.getErrorField(field);
    return  this.error ; 
  }
  getErrorField( field:any) :string {
    if (field?.hasError('required')) {
      return 'the field is required';
    }
    if (field?.hasError('maxlength')) {
      return 'the field has a maxlength of 250';
    }
    return '';
  }


  saveChanges() {
    this.onSubmit.emit(this.form.value);
  }
}
