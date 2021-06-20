import { Component, OnInit } from '@angular/core';
import {FixedSizeVirtualScrollStrategy, VIRTUAL_SCROLL_STRATEGY} from '@angular/cdk/scrolling';
import { GamesservicesService } from 'src/app/services/gamesservices.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  games:any[]=[]
  infocargada=false
  constructor( private gameservices: GamesservicesService) {
    
   }
 
   getgames(){
   
    this.gameservices.getGames().subscribe(resp => {
      this.games = resp
        this.infocargada=true
    })

  }
  ngOnInit(): void {
    this.getgames();
  }

}
