import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GamesservicesService } from 'src/app/services/gamesservices.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {
  query="";
  games:any[]=[]
  queryanterior="";
  infocargada=false
  constructor(private routerlink:ActivatedRoute, private sergame:GamesservicesService) {
    this.games=[]
    this.routerlink.params.subscribe( params=>{
        this.query=params['query']
    })

    this.setgamequery()

   }

   setgamequery(){

    this.sergame.getGamesquery(this.query).subscribe(resp=>{
      this.queryanterior=this.query
 
      this.infocargada=true
      this.games=resp
      
    })
    if(this.query!=this.queryanterior){
  
      this.games=[]
      this.infocargada=false
    }
   }
  ngOnInit(): void {
  }

}
