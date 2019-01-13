import { AbstractControl } from '@angular/forms';

export function lowerCasValidator(control: AbstractControl) {
    if (control.value.trim() && !/^[a-zA-Z0-9_\-]+$/.test(control.value)) {
        return { lowerCase: true };
    }
    return null;
}