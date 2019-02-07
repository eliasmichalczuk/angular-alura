import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/auth/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { PlatformDetectorService } from 'src/app/core/platform-detector/platform-detector.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  fromUrl: string;
  loginForm: FormGroup;
  @ViewChild('userNameInput') userNameInput: ElementRef<HTMLInputElement>;


  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private platformDetectorService: PlatformDetectorService,
    private activatedRoute: ActivatedRoute) { }

  // usar form builder para gerar formulario
  ngOnInit(): void {
    // this.activatedRoute.queryParams.subscribe(params => {
    //   this.fromUrl = params['fromUrl'];
    //   console.log('query Param->> ', params['fromUrl']);
    // });
    // old way, deprecated
    this.activatedRoute.paramMap.subscribe(pmap => {
      this.fromUrl = pmap.get('fromUrl');
    });
    this.loginForm = this.formBuilder.group({
      userName: ['flavio', Validators.required],
      password: ['123', Validators.required]
    });
    this.userNameInput.nativeElement.focus();
  }

  login() {
    const userName = this.loginForm.get('userName').value;
    const password = this.loginForm.get('password').value;

    this.authService.authenticate(userName, password)
      .subscribe(
        // () => this.router.navigateByUrl('user/' + userName),
        succes => {
          this.fromUrl ? this.navigateToPreviousPage() :
            this.navigateToUser(userName);
         },
        err => {
          this.loginForm.reset();
          if (this.platformDetectorService.isPlatformBrowser()) {
            this.userNameInput.nativeElement.focus();
          }
        }
      );
  }

  private navigateToPreviousPage() {
    return this.router.navigateByUrl(this.fromUrl);
  }

  navigateToUser(userName: string) {
    this.router.navigate(['user', userName]);
  }
}
