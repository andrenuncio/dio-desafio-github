import { Component, Input, OnChanges } from "@angular/core";

@Component ({
    selector: 'app-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})

export class StarComponent implements OnChanges{

    @Input()
    rating: number = 0;

    starWidth: number = 0; // Coloquei inicializando em 1 para n'ao dar erro

    ngOnChanges(): void {
        this.starWidth = this.rating * 74 / 5;
    }


}

