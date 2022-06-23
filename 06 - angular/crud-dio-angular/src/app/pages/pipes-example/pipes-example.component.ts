import { UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-example',
  templateUrl: './pipes-example.component.html',
  styleUrls: ['./pipes-example.component.css']
})
export class PipesExampleComponent implements OnInit {
  number : number = 0;
  text : string = 'Hello World';
  date = new Date;

  nomes: string[] = ['Pikachu'];


  constructor(private upperCasePipe: UpperCasePipe) { }

  ngOnInit(): void {

    this.text = this.upperCasePipe.transform(this.text);
  }

  add(text: string){
    this.nomes.push(text);
  }

}
