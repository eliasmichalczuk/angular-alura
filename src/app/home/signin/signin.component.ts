import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/auth/auth.service';
import { Router } from '@angular/router';
import { PlatformDetectorService } from 'src/app/core/platform-detector/platform-detector.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  loginForm: FormGroup;
  @ViewChild('userNameInput') userNameInput: ElementRef<HTMLInputElement>;


  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private platformDetectorService: PlatformDetectorService) { }

  // usar form builder para gerar formulario
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userName: ['flavio', Validators.required],
      password: ['123', Validators.required]
    });
  }

  login() {
    const userName = this.loginForm.get('userName').value;
    const password = this.loginForm.get('password').value;

    this.authService.authenticate(userName, password)
      .subscribe(
        // () => this.router.navigateByUrl('user/' + userName),
        succes => {
          this.router.navigate(['user', userName]);
          console.log('success --> ', succes);
          console.log(userName);
         },
        err => {
          console.log(err);
          this.loginForm.reset();
          if (this.platformDetectorService.isPlatformBrowser()) {
            this.userNameInput.nativeElement.focus();
          }
        }
      );
  }
}
