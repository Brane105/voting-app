import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AllService } from '../shared/all.service';

@Component({
  selector: 'app-page-notfound',
  templateUrl: './page-notfound.component.html',
  styleUrls: ['./page-notfound.component.css']
})
export class PageNotfoundComponent implements OnInit {

  constructor(private router : Router,private _service : AllService) { }

  ngOnInit(): void {
  }
  go(){
    sessionStorage.clear();
    this._service.logout();
  }
}
