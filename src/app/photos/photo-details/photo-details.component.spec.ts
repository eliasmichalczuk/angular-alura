// import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// import { PhotoDetailsComponent } from './photo-details.component';
// import { ActivatedRoute } from '@angular/router';
// import { UserService } from 'src/app/core/user/user.service';
// import { TokenService } from 'src/app/core/token/token.service';
// import { AlertService } from 'src/app/shared/components/alert/alert.service';
// import { PhotoService } from '../photo/photo.service';
// import { Observable, of } from 'rxjs';
// import 'rxjs/add/observable/of';

// describe('PhotoDetailsComponent', () => {
//   let component: PhotoDetailsComponent;
//   let fixture: ComponentFixture<PhotoDetailsComponent>;

//   beforeEach(async(() => {
//     let com = PhotoDetailsComponent;
//     let service = UserService;
    
//     TestBed.configureTestingModule({
//       // providers: [ MockUserService, { provide: UserService, useClass: MockUserService },
//       //               MockTokenService, { provide: TokenService, useClass: MockTokenService },
//       //                ]
//       providers: [ UserService, TokenService, AlertService, PhotoService, PhotoDetailsComponent, {
//         provide: ActivatedRoute,
//         useValue: {
//           params: of({id: 13})
//         }
//       } ]
//     })
//     //.compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(PhotoDetailsComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });

//   it('should remove a photo', () => {
//   })
// });

// class MockUserService {

// }

// class MockTokenService {

//   getToken() {
//     return 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6ImZsYXZpbyIsImVtYWlsIjoiZmxhdmlvQGFsdXJhcGljLmNvbS5iciIsImlhdCI6MTU0ODc5NzM2NywiZXhwIjoxNTQ4ODgzNzY3fQ.uPOS_zaDGgiLDPpzFK6E-ilyhbC8FKBCt4ROb3INDQ4'
//   }


//   hasToken() {
//     return !!this.getToken();
//   }
// }