import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { coinCreateDTO } from '../coin';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-coins-form',
  templateUrl: './coins-form.component.html',
  styleUrls: ['./coins-form.component.css']
})
export class CoinsFormComponent implements OnInit {
  form: any = {};
  @Input()
  model :coinCreateDTO | undefined;
  
  @Input()
  errors: string[]=[];
  error: string;

  
    @Output()
    onSubmit: EventEmitter<coinCreateDTO> = new EventEmitter<coinCreateDTO>();
    constructor(private formBuilder: FormBuilder) {
      this.form = this.formBuilder.group({
        NameCoin: [
          '',
          {
            validators: [Validators.required],
          },
        ],
        DescriptionCoin: [
          '',
          {
            validators: [],
          },
        ],
        StateCoin: [
          '',
          {
            validators: [],
          },
        ],
      });
    }
  ngOnInit(): void {
  
  }
  getErrorField(field: any): string {
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
  getErrorName() {
    let field = this.form.get('NameCoin');
    this.error = this.getErrorField(field);
    return this.error;
  }


}
