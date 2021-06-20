import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'generopipe'
})
export class GeneropipePipe implements PipeTransform {

  transform(game: any, generoid: number): unknown {
   for(var i=0;i<game.genres.length;i++){
     if(game.genres[i].id==generoid){
       return true
     } 
   }
      return false;
  }

}
