import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavbarcardsComponent } from './components/navbarcards/navbarcards.component';
import { HomeComponent } from './components/home/home.component';
import { GameComponent } from './components/game/game.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 import{HttpClientModule} from '@angular/common/http'

 //scroll dependencia
 import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { PlataformaPipe } from './pipes/plataforma.pipe';
import { GeneropipePipe } from './pipes/generopipe.pipe';
import { CalificacionPipe } from './pipes/calificacion.pipe';
import { BuscarComponent } from './components/buscar/buscar.component';
import { GenerogameindividualPipe } from './pipes/generogameindividual.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavbarcardsComponent,
    HomeComponent,
    GameComponent,
    PlataformaPipe,
    GeneropipePipe,
    CalificacionPipe,
    BuscarComponent,
    GenerogameindividualPipe,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    InfiniteScrollModule,
    ReactiveFormsModule,
    NgbModule,
    NgbPaginationModule,
     NgbAlertModule
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
