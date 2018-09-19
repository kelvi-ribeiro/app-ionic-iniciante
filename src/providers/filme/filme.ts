import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class FilmeProvider {

  private baseApiPath = "https://api.themoviedb.org/3";
  private baseApiKey = "d0e2a349d23feda95b475f505e38d599";

  constructor(public http: HttpClient) {

  }
  listarUltimosFilmes(){
    return this.http.get(`${this.baseApiPath}/movie/popular?api_key=${this.baseApiKey}`)
  }

}
