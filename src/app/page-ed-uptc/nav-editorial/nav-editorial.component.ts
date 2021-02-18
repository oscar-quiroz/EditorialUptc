import { Component, OnInit } from '@angular/core';


declare var $:any;

@Component({
  selector: 'app-nav-editorial',
  templateUrl: './nav-editorial.component.html',
  styleUrls: ['./nav-editorial.component.css']
})
export class NavEditorialComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $('.sidenav').sidenav();
  }

}
