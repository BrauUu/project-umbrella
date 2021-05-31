import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Umbrella } from '../umbrella.model';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-umbrelas',
  templateUrl: './show-umbrelas.component.html',
  styleUrls: ['./show-umbrelas.component.css']
})
export class ShowUmbrelasComponent implements OnInit {

  umbrellaList: Array<Umbrella>;

  constructor(private api: ApiService, private route: Router) {
    this.api.getUmbrellas().subscribe(lista => this.umbrellaList = lista);
  }

  ngOnInit(): void {
  }

  deleteUmbrella(id:string, idArray:number){
    this.api.deleteUmbrella(id).subscribe(item=>{console.log(item)});
    this.umbrellaList.splice(idArray,1);
  }

  editarItem(id: string){
    this.route.navigateByUrl('/update',{state:{id: id}});
  }

}
