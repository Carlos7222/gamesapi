import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GamesservicesService } from 'src/app/services/gamesservices.service';
 
 

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private Gameservi:GamesservicesService,private router:Router  ) { }
  query=""
  ngOnInit(): void {
  }
    desplegar:boolean=false;
  abrirnavbar(){
    if(this.desplegar==false){
         this.desplegar=true;
    }else{
      this.desplegar=false
    }
  }
  
  enviarsolicitud(query:any){
    if(query.length==0){
      console.log('estoy vacio')
    }else{
      this.router.navigate(['buscar/', query])
      setTimeout(() => {
        window.location.reload()
      }, 1000);
   
    }
     
  }
/*   const menutottle=document.querySelector('.menu-toggle');
  const menutoggleIcon=document.querySelector('.menu-toggle i');
  const menu =document.getElementById('menu');
  menutottle.addEventListener('click',e=>{
      menu.classList.toggle('show');
      if(menu.classList.contains('show')){
          menutoggleIcon.setAttribute('class', 'far fa-window-close')
      }else{
          menutoggleIcon.setAttribute('class', 'fa fa-bars')
      }
  }) */
}
