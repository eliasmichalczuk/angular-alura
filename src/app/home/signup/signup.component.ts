import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserNotTakenValidatorService } from './user-not-taken-validator.service';
import { NewUser } from './new-user';
import { SignupService } from './signup.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userNotTaken: UserNotTakenValidatorService,
    private signUpService: SignupService,
    private router: Router) {

   }

  ngOnInit() {
    const asyncValidator = this.userNotTaken.usernameTaken();
    // validador assincrono, não entra na mesma posição do array de validadores
    this.signupForm = this.formBuilder.group({
      email: ['',
        [Validators.required, Validators.email]
      ],
      userName: ['',
        [Validators.required, Validators.minLength(2), Validators.maxLength(30), Validators.pattern(/^[a-zA-Z0-9_\-]+$/)],
        asyncValidator
      ],
      fullName: ['',
        [Validators.required, Validators.minLength(2), Validators.maxLength(40)]
      ],
      password: ['',
        [Validators.required, Validators.minLength(8), Validators.maxLength(14)]
      ]
    });
    console.log(this.signupForm);
  }

  signup() {
    const user = this.signupForm.getRawValue() as NewUser;
    this.signUpService.signup(user)
                      .subscribe(() => this.router.navigate(['']),
                                err => console.log(err)
                      );
  }
}
