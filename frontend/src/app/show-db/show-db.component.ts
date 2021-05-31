import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../api.service';
import { Umbrella } from '../umbrella.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-show-db',
  templateUrl: './show-db.component.html',
  styleUrls: ['./show-db.component.css']
})
export class ShowDbComponent implements OnInit {


  listItens: Array<Umbrella>;

  constructor(private api: ApiService) {
    //api.getUmbrella('60b39e760f279e80975b57c2').subscribe(item => this.item = item)
    api.getUmbrellas().subscribe(list => this.listItens = list);
   }

  ngOnInit(): void {
  }

}
