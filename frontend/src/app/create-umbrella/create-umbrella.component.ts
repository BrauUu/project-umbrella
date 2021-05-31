import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Umbrella } from '../umbrella.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-umbrella',
  templateUrl: './create-umbrella.component.html',
  styleUrls: ['./create-umbrella.component.css']
})
export class CreateUmbrellaComponent implements OnInit {

  newItem: Umbrella;
  cores: Array<string> = new Array<string>();
  
  constructor(private api: ApiService) { 
    
  }

  criateNewUmbrella(brand: string, size: number,height:number,model:string){
    this.newItem = new Umbrella(brand, size, height, model, this.cores);
    this.api.addUmbrella(this.newItem).subscribe(umb=> console.log(umb));
  }

  ngOnInit(): void {
  }

  adicionaCor(novaCor: string){
    this.cores.push(novaCor);
  }

}
