import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";


export function invalidWord(wordErr:RegExp): ValidatorFn{
    return(control:AbstractControl): ValidationErrors | null =>{
        const notAllowed = wordErr.test(control.value);
        if (notAllowed === true){
            return{
                prohibited:{
                    value:control.value
                }
            };
        }else return null;
    }
}




