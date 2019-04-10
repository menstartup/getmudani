import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  en = 'hello'
  vn = 'xinchao';
  imageUrl ='https://angular.io/assets/images/logos/angular/logo-nav@2x.png'
  constructor() { }
  forgot = false;
  toggleForgot() {
    this.forgot = !this.forgot;
  }
  ngOnInit() {
  }

}
