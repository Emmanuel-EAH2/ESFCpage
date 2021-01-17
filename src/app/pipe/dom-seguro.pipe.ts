import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({
    name: 'domSeguro'
  })
  export class DomSeguroPipe implements PipeTransform {
  
    constructor(private domSnitizer: DomSanitizer){}
  
    transform(value: string): SafeResourceUrl {
      return this.domSnitizer.bypassSecurityTrustResourceUrl(value);
    }
    
  }
  