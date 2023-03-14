import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

imgSrc: string = "./assets/toy.png";

onMouseOver(): void {
  this.imgSrc = "./assets/toy1.png";
}

onMouseOut(): void {
  this.imgSrc = "./assets/toy.png";
}
onMouseUp(): void {
  this.imgSrc = "./assets/toy2.png";
}

onMousedown(): void {
  this.imgSrc = "./assets/toy3.png";
}
  ngOnInit(): void {
  }

}
