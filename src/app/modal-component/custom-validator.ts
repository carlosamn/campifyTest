import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { fullTime } from './utils';

export const CustomTimeValidator: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  const startTime = control.get('startTime')?.value;
  const endTime = control.get('endTime')?.value;

  const startFulltHour = fullTime(startTime);
  const endFulltHour = fullTime(endTime);

  return startFulltHour != null &&
    endFulltHour !== null &&
    startFulltHour >= endFulltHour
    ? { timeInvalid: true }
    : null;
};
