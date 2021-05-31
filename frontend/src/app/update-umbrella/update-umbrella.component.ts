import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { Umbrella } from '../umbrella.model';

@Component({
  selector: 'app-update-umbrella',
  templateUrl: './update-umbrella.component.html',
  styleUrls: ['./update-umbrella.component.css']
})
export class UpdateUmbrellaComponent implements OnInit {

  modelo: string = 'teste';
  tamanho: number = 0;
  altura: number = 0;
  marca: string = '';
  cores: Array<string> = new Array<string>();
  id: string;
  
  constructor(private api: ApiService, private route: Router) {
    const id = this.route.getCurrentNavigation().extras.state.id;
    this.id = id;
    this.api.getUmbrella(id).subscribe(it => { 
      this.modelo = it.model;
      this.tamanho = it.size;
      this.altura = it.height;  
      this.marca = it.brand;
      this.cores = it.colors;
    });

  }

  editUmbrella() {
    var umbrelaUp: Umbrella = new  Umbrella(this.marca,this.tamanho,this.altura,this.modelo,this.cores);
    this.api.updateUmbrella(this.id,umbrelaUp).subscribe(umb=> console.log(umb));
    this.route.navigateByUrl('/');
  }

  ngOnInit(): void {
  }

  adicionaCor(novaCor: string) {
    this.cores.push(novaCor);
  }
}
