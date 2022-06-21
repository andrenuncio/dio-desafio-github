import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/app/shared/services/list.service';

@Component({
  selector: 'app-list-api',
  templateUrl: './list-api.component.html',
  styleUrls: ['./list-api.component.css']
})
export class ListApiComponent implements OnInit {

  personagens: [{
    name: string,
      image: string,
      gender: string,
      status: string,
      species: string
  }];

  constructor(private listService: ListService) { }

  ngOnInit(): void {
    this.getList();
  }

  getList(){
    this.listService.getList().subscribe(result => {
      this.personagens = result.results;  
      console.log(this.personagens)    
    })
  }

}
