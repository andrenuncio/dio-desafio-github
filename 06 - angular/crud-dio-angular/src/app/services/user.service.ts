import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl: string = 'https://sheet.best/api/sheets/0b0b43d4-475b-4584-bebd-86903bc34a32';
  constructor(private httpClient: HttpClient) { }

  //  C.R.U.D CREATE READ UPDATE DELETE


  // Retorna a lista de usuarios
  getUsers():Observable<User[]>{
    return this.httpClient.get<User[]>(this.apiUrl)
  }
}
