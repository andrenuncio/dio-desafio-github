import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl: string = 'https://sheet.best/api/sheets/0b0b43d4-475b-4584-bebd-86903bc34a32';
  httpOptions = {
    header: new HttpHeaders({
      'Content-Type' : 'application/json',
      'Token' : '123123'
    })
  }

  constructor(private httpClient: HttpClient) { }

  //  C.R.U.D CREATE READ UPDATE DELETE


  // Retorna a lista de usuarios -- READ
  getUsers():Observable<User[]>{
    return this.httpClient.get<User[]>(this.apiUrl)
  }

  // Salva Usuario no Banco -- CREATE

  postUser(user: User): Observable<User>{
    return this.httpClient.post<User>(this.apiUrl, user)
  }


  // Deleta Usuario do Banco --  DELETE
  deleteUser(id: string): Observable<User>{
    return this.httpClient.delete<User>(`${this.apiUrl}/id/${id}`)
  }

}
