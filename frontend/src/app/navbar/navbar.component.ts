import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';  


@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  menuOpen: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  openCloseMenu(){
    this.menuOpen = !this.menuOpen;
  }

}
