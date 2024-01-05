import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  value: any;

  constructor() { 
    this.value = sessionStorage.getItem('token')
  }

  ngOnInit(): void {
  }

}
