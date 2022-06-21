import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export type ApiResponde = {
  info: {},
  results: [
    {
      name: string,
      image: string,
      gender: string,
      status: string,
      species: string
    }
  ] 
}

@Injectable({
  providedIn: 'root'
})
export class ListService {

  apiURL: string = 'https://rickandmortyapi.com/api/character';

  constructor(private httpClient: HttpClient) { }

  getList(): Observable<ApiResponde>{
    return this.httpClient.get<ApiResponde>(this.apiURL)
  }
}
