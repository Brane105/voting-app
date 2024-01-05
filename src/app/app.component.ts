import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuard } from './gaurd/auth.guard';
import { AllService } from './shared/all.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  value? : any;
  data? : any
  constructor(private _service : AllService, private auth : AuthGuard ,private router : Router ){
    this.auth.getLoggedInName.subscribe(el => {
      console.log(el)
      if(el != null){
        this.value = el;
      }
    })
  }

  ngOnInit(): void {
    this.data = sessionStorage.getItem('token');
  }
//   private changeName(name: string): void {
//     this.userName = name;
// }
logout(){
  this.value = null; 
  this._service.logout();
  }
  title = 'voting-app';
}
