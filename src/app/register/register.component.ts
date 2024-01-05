import { Component, OnInit } from '@angular/core';
import {  FormGroup, FormControl  } from '@angular/forms';
import { AllService } from '../shared/all.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private _service : AllService) { }

  ngOnInit(): void {
  }

  profileForm = new FormGroup({
    name: new FormControl(''),
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    phone: new FormControl(''),
  });

  onSubmit() {
    // TODO: Use EventEmitter with form value
    this._service.createuser(this.profileForm.value).subscribe(el =>{
      console.log(el)
      this.profileForm.reset()
    })
    console.warn(this.profileForm.value);
  }

}
