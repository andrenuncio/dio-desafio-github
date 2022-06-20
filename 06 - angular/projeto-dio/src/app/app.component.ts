import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  count: number = 0;

  pessoas = [
    {
      nome:"Ivonaldo",
      sobrenome:"Soares"
    },
    {
      nome:"Maria",
      sobrenome:"Silva"
    },
    {
      nome:"Joao",
      sobrenome:"Pereira"
    },
    {
      nome:"Marcio",
      sobrenome:"Santos"
    }
  ]

  constructor(){

  }

  ngOnInit(): void {
    let interval = setInterval(() => {
      this.count++;
      if(this.count === 10){
        clearInterval(interval);
      }
    },1000)
  }


}
