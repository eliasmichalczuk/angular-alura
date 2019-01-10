import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class PlatformDetectorService {

  constructor(@Inject(PLATFORM_ID) private platformId: string) { }
  // codigo para verificação de plataforma, pode ser utilizado para server side rendering
  isPlatformBrowser() {
    return isPlatformBrowser(this.platformId);
  }
}
