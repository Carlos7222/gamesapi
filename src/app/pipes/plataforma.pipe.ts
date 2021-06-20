import { Pipe, PipeTransform } from '@angular/core';
import { of } from 'rxjs';

@Pipe({
  name: 'plataforma'
})
export class PlataformaPipe implements PipeTransform {

  transform(gane: any, plataforma=""): unknown {
      for(var i=0;i<gane.parent_platforms.length;i++){
          if(gane.parent_platforms[i].platform.name==plataforma){
            return true
          } 
      }
      return false
 
  }

}
