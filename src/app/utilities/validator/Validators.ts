import { AbstractControl, ValidatorFn } from '@angular/forms';

export function validateDate() : ValidatorFn {
  return (control: AbstractControl) => {

    const valueField = <Date>control.value;
    if (!valueField) return null;

    if (new Date(valueField.toDateString()) > new Date(new Date().toDateString())) {
      return {
        validateDate: {
          message: 'La fecha no puede ser mayor al día de hoy',
        }
      };
    }
    return null;
  }
}
