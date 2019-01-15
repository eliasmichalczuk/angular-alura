import { Directive, ElementRef, OnInit, Renderer } from '@angular/core';
import { UserService } from 'src/app/core/user/user.service';

@Directive({
  selector: '[appShowIfLoggedIn]'
})
export class ShowIfLoggedInDirective implements OnInit {


  constructor(
    private element: ElementRef<any>,
    private renderer: Renderer,
    private userService: UserService) { }

    ngOnInit(): void {
      if (this.userService.isLogedIn()) {
        this.renderer.setElementStyle(this.element.nativeElement, 'display', 'none');
      }
    }
}
