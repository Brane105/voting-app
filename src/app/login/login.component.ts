import { Component, OnInit } from '@angular/core';
import { AllService } from '../shared/all.service';
import { Router } from '@angular/router';
import { Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  adminvalue : any;
  users : any = [];

  constructor(private _service : AllService,private router : Router) { 

  }

  ngOnInit(): void {
    this._service.getadmin().subscribe(event => {
      this.adminvalue = event
      console.log(this.adminvalue);
    });
  }

  checkuseroradmin(logininfo : any): void {
    // console.log(logininfo);
    let value = logininfo
    if(value.username !== "" && value.password !== ""){
      console.log(value);
      if(value.username == 'admin' && value.password == 'admin'){
        sessionStorage.setItem('token',this.adminvalue[0].username);
        this.router.navigate(['/main'])
      }
      else if(value.username && value.password ){
          this._service.getuser(value.username,value.password).subscribe(event => {
            console.log(event)
            if(event.length > 0){
            sessionStorage.setItem('token',event[0].username);
            this.router.navigate(['/userpage']);
            console.log("event",event[0])
            }
            else{
              alert("Invalid credentials");
              sessionStorage.clear();
            }
          });
        }
        else{
          alert("Invalid credentials");
          sessionStorage.clear();
        }
    }
    else{
      alert("Please fill the credentials");
      sessionStorage.clear();
    } 
  }

    // variable - default false
  show: boolean = false;
  showpassword(){
    this.show = !this.show;
    // console.log(this.show)
  }
}
