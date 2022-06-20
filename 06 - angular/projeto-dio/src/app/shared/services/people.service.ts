import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor() { }

  getPeople():Observable<any>{
    let peopleArray = [
      {
        firstName:"Ivonaldo",
        lastName:"Soares",
        age: 26
      },
      {
        firstName:"Maria",
        lastName:"Silva",
        age: 35
      },
      {
        firstName:"Joao",
        lastName:"Pereira",
        age: 18
      },
      {
        firstName:"Marcio",
        lastName:"Santos",
        age: 69
      }
    ];

    return of(peopleArray);
  }

}
