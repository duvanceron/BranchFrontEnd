import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { branchCreateDTO } from '../branch';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { coinBox } from 'src/app/coins/coin';
import { CoinService } from 'src/app/coins/coin.service';
import { firstLetterUpper } from 'src/app/utilities/validator/UpperLetter';
import { validateDate } from 'src/app/utilities/validator/Validators';

@Component({
  selector: 'app-branchs-form',
  templateUrl: './branchs-form.component.html',
  styleUrls: ['./branchs-form.component.css'],
})
export class BranchsFormComponent implements OnInit {
  form: any = {};
  error: string;
  @Input()
  model: branchCreateDTO;
  coins: coinBox[];

  @Input()
  errorArray: string[] = [];
  @Output()
  onSubmit: EventEmitter<branchCreateDTO> = new EventEmitter<branchCreateDTO>();
  constructor(
    private formBuilder: FormBuilder,
    private coinService: CoinService
  ) {
    this.form = this.formBuilder.group({
      descriptionBranch: [
        '',
        {
          validators: [Validators.required, Validators.maxLength(250)],
        },
      ],
      adressBranch: [
        '',
        {
          validators: [Validators.required, Validators.maxLength(250),firstLetterUpper()],
        },
      ],
      identificationBranch: [
        '',
        {
          validators: [Validators.required, Validators.maxLength(50)],
        },
      ],
      dateBranch: [
        '',
        {
          validators: [/*validateDate()*/],
        },
      ],
      fkMoneyBranch: [
        '',
        {
          validators: [],
        },
      ],
    });
  }

  ngOnInit(): void {
    this.coinService.getAll().subscribe(
      (coin) => {
        this.coins = coin;
        console.log(this.coins);
      },
      (error) => console.log(error)
    );
    if (this.model !== undefined) {
      this.form.patchValue(this.model);
    }
  }
  getErrorName() {
    let field = this.form.get('descriptionBranch');
    this.error = this.getErrorField(field);
    return this.error;
  }
  getErrorAdress() {
    let field = this.form.get('adressBranch');
    this.error = this.getErrorField(field);
    return this.error;
  }
  getErrorDate() {
    let field = this.form.get('dateBranch');
    // this.error = this.getErrorField(field);
    if (field?.hasError('validateDate')) {
      return field.getError('validateDate').message;
    }
    return '';
    return this.error;
  }
  getErrorField(field: any): string {
    if (field?.hasError('required')) {
      return 'the field is required';
    }
    if (field?.hasError('maxlength')) {
      return 'the field has a maxlength of 250';
    }
    if (field?.hasError('firstLetterUpper')) {
      return field.getError('firstLetterUpper').message;
    }
    if (field?.hasError('validateDate')) {
      return field.getError('validateDate').message;
    }
    return '';
  }
 
  saveChanges() {
    this.onSubmit.emit(this.form.value);
  }
}
