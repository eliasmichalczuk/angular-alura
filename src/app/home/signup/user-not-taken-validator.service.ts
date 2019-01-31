import { Injectable } from '@angular/core';
import { SignupService } from './signup.service';
import { AbstractControl } from '@angular/forms';
import { debounceTime, switchMap, map, first } from 'rxjs/operators';

@Injectable()
// validador assincrono
export class UserNotTakenValidatorService {

  constructor(private signUpService: SignupService) { }

  usernameTaken() {
    // validador async retorna um observable, que ao ser acessado pela validação, transforma-se em null ou um objeto
    return (control: AbstractControl) => {
      return control.valueChanges
                    .pipe(debounceTime(300))
                    // usa switch map para retornar a emissão de usernameTaken
                    .pipe(switchMap(username => {
                      return this.signUpService.usernameTaken(username);
                      // resultado disso é true ou false, mas deve retornar nulo ou o objeto, por isso...
                    }))
                    // map para retornar nulo ou o objeto
                    .pipe(map(isTaken => isTaken ? { userNameTaken: true } : null))
                    // completa a emissão para funcionar, emite o primeiro valor da emissão
                    .pipe(first());
    };
  }
}
