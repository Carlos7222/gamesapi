import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GamesservicesService } from 'src/app/services/gamesservices.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
   id:any
   game:any={}
   genero=[]
   imagenes:any=[]
   video:any=[]
  constructor(private router:ActivatedRoute,private gameservices:GamesservicesService,private location:Location) {
 
    this.router.params.subscribe(resp=>{
      this.id=resp.id
  
    })
  
    this.getGame()
   }

   getGame(){
 
      this.gameservices.getGame(this.id).subscribe((resp:any)=>{
        this.game=resp
 
      })
      this.gameservices.getScreengame(this.id).subscribe((resp:any)=>{
        this.imagenes=resp
            })
      this.gameservices.getVideo(this.id).subscribe((res:any)=>{
        if(res.length>0){
            this.video=res
        }
 
      })
   }
  ngOnInit(): void {
  }
  home(){
    this.location.back();
  }
}
