import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators'
import { NavbarcardsComponent } from '../components/navbarcards/navbarcards.component';

@Injectable({
  providedIn: 'root'
})
export class GamesservicesService {

  constructor(private http: HttpClient) {

  }
  private url: string = 'https://api.rawg.io/api/games';
  private key: string = 'key=192deb75a0e4410e8bc1cc529ea0f7af';
  private pagina = 1;
  private gueryone = ""
  getGames() {
    return this.http.get(`${this.url}?${this.key}&page=${this.pagina}`)
      .pipe(map((resp: any) => {
        this.pagina++
        return resp.results
      }))
  }
  /*   https://api.rawg.io/api/games?key=192deb75a0e4410e8bc1cc529ea0f7af&page=2&search=assasins */
  getGamesquery(query: string) {
    if (query != this.gueryone) {

      this.pagina = 1;
    }


    return this.http.get(`${this.url}?${this.key}&page=${this.pagina}&search=${query}`)
      .pipe(map((resp: any) => {
        this.pagina++
        this.gueryone = query
        return resp.results
      }))
  }
  /* https://api.rawg.io/api/games/4200?key=192deb75a0e4410e8bc1cc529ea0f7af*/

  getGame(id: any) {
    return this.http.get(`${this.url}/${id}?${this.key}`)
  }
 /*  https://api.rawg.io/api/games?dates=2001-01-01,2001-12-31&ordering=-rating&key=192deb75a0e4410e8bc1cc529ea0f7af */
  getgamedate(date:any,page:any){
    return this.http.get(`${this.url}?dates=${date}-01-01,${date}-12-31&ordering=-rating&${this.key}&page=${page}`).
    pipe(map((resp:any)=>{
 
        return resp.results
    }))
  }
/*   https://api.rawg.io/api/genres?key=192deb75a0e4410e8bc1cc529ea0f7af */
  getGenero(){
   return this.http.get(`https://api.rawg.io/api/genres?${this.key}`).pipe(map((resp:any)=>{
      return resp.results
    }))
  }
  /* https://api.rawg.io/api/games?key=192deb75a0e4410e8bc1cc529ea0f7af&genres=puzzle */
  getGenerogames(genero:any,page:any){
    return this.http.get(`${this.url}?${this.key}&genres=${genero}&page=${page}`).pipe(map((resp:any)=>{
      return resp.results
    }))
  }
  /* https://api.rawg.io/api/games/4200/screenshots?key=192deb75a0e4410e8bc1cc529ea0f7af */
  getScreengame(id:any){
    return this.http.get(`${this.url}/${id}/screenshots?${this.key}`).pipe(map((resp:any)=>{
        return resp.results
    }))
  }
  /* https://api.rawg.io/api/games/3498/movies?key=192deb75a0e4410e8bc1cc529ea0f7af */
  getVideo(id:any){
    return this.http.get(`${this.url}/${id}/movies?${this.key}`).pipe(map((resp:any)=>{
      return resp.results
  }))
  }
}

