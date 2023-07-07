import { AbstractControl, ValidatorFn } from '@angular/forms';

export function firstLetterUpper() : ValidatorFn {
  return (control: AbstractControl) => {
    const valueField = <string>control.value;
    if (!valueField) return null;
    const first = valueField[0];
    if (first !== first.toUpperCase()) {
      return {
        firstLetterUpper: {
          message: 'The first letter should be uppercase',
        }
      };
    }
    return null;
  }
}
