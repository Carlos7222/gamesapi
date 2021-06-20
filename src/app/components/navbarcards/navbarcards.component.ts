import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnInit,Input, OnChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { GamesservicesService } from 'src/app/services/gamesservices.service';
 

@Component({
  selector: 'app-navbarcards',
  templateUrl: './navbarcards.component.html',
  styleUrls: ['./navbarcards.component.css']
})
export class NavbarcardsComponent implements OnInit  {
  @Input() games: any[] = []
  mostrabutton = false;
  @Input() infocargada=false
  @Input() tipo="";
  @Input() query="";
  @Input() filtros=true
  ano:any=[]
   fecha:Date;
   formulariobusqueda:FormGroup|any
   mostrarfecha=false;
   mostrargenero=false;
   genero:any=[]
   paginatipo2=1
   paginatipo3=1
  constructor(@Inject(DOCUMENT) private document: Document,
    private gameservices: GamesservicesService,private router:Router,
  private fb:FormBuilder   
   ) {
      this.fecha=new Date()
      this.obtenerano()
      this.crearformulario()
      this.obtenergeneros()
      this.document.documentElement.scrollTop = 0
  
  }

  crearformulario(){
    this.formulariobusqueda=this.fb.group({
      'tipo':['1'],
      'fecha':['2001'],
      'genero':['action']
    })
  }

  buscar(){
      if(this.formulariobusqueda.value.tipo==1){
        this.paginatipo2=1
        this.paginatipo3=1
        this.gameservices.getGames().subscribe(resp=>{
            this.games=[]
          this.games=resp
        })
      }else if(this.formulariobusqueda.value.tipo==2){
        this.paginatipo3=1
        this.gameservices.getgamedate(this.formulariobusqueda.value.fecha,this.paginatipo2).subscribe(resp=>{
            this.games=[]
            this.paginatipo2++
            this.games=resp
        })
      }else if(this.formulariobusqueda.value.tipo==3){
        this.paginatipo2=1
          this.gameservices.getGenerogames(this.formulariobusqueda.value.genero,this.paginatipo3).subscribe(resp=>{
            this.games=[]
            this.paginatipo3++
            this.games=resp
          })
      }
  }

  obtenergeneros(){
    this.gameservices.getGenero().subscribe(resp=>{
      this.genero=resp
    })
  }
  @HostListener('window:scroll')
  onWindowscroll() {
    const posiciony = window.pageYOffset;
    const scrolltop = this.document.documentElement.scrollTop;
    //se usan ambos porque hay elementos que pueden intervenir en el scroll  
    if (posiciony || scrolltop > 3000) {
      this.mostrabutton = true
    } else {
      this.mostrabutton = false
    }
  }
  ngOnInit(): void {
    this.document.documentElement.scrollTop = 0
  }
  inicio() {
    this.document.documentElement.scrollTop = 0
  }

  estegame(id:any){
    this.router.navigate(['game/',id])
  }

 obtenerano(){
  var fechainicio=2001
  for(fechainicio;fechainicio<=this.fecha.getFullYear();fechainicio++){
    this.ano.push(fechainicio)
  }
 }

 
  scrollfinal(){

    if(this.tipo=="home"){
      if(this.formulariobusqueda.value.tipo==1)   {
 
        this.gameservices.getGames().subscribe((resp:any[])=>{

    
          for(let i=0;i<resp.length;i++){
            
            this.games.push(resp[i])
          }
         })
      }else if(this.formulariobusqueda.value.tipo==2){
 
        this.gameservices.getgamedate(this.formulariobusqueda.value.fecha,this.paginatipo2).subscribe(resp=>{
          for(let i=0;i<resp.length;i++){ 
            this.games.push(resp[i])
          }
          this.paginatipo2++ 
      })}else if (this.formulariobusqueda.value.tipo==3){
 
        this.gameservices.getGenerogames(this.formulariobusqueda.value.genero,this.paginatipo3).subscribe(resp=>{
          for(let i=0;i<resp.length;i++){ 
            this.games.push(resp[i])
          }
          this.paginatipo3++
        })
      }

    }else if(this.tipo=="buscar"){

      this.gameservices.getGamesquery(this.query).subscribe((resp=>{
 
        for(let i=0;i<resp.length;i++){
          this.games.push(resp[i])
        }
      }))

    }
    

 
  }

}
