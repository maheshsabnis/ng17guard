import { AbstractControl } from "@angular/forms";

export class CustomValidator {
   static NonZeroAndNegative(ctrl:AbstractControl):any {
    // read value from the control
    let val = ctrl.value;

    if(parseInt(val)>0) {
      return null; // valid
    } else {
      return {invalid:true};
    }

   }
}
