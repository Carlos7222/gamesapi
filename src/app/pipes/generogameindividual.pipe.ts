import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'generogameindividual'
})
export class GenerogameindividualPipe implements PipeTransform {
  arreglo:any={}
  transform(game:any , ...args: unknown[]): unknown {
        
    for(let i=0;i<game.length;i++){
         this.arreglo.add  
        }
        console.log(this.arreglo)
    return this.arreglo;
  }

}
