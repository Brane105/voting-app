import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AllService } from '../shared/all.service';

@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.css']
})
export class AdminpageComponent implements OnInit {
  
  candidateValue: any = [];
  value: string | null | undefined;

  constructor(private _service : AllService,private router : Router) { 
  }

  ngOnInit(): void {
    this._service.getCandidates().subscribe(event => {
      this.candidateValue = event
      console.log(this.candidateValue);
    });
    this.value = sessionStorage.getItem('token')
    if(this.value !== 'admin'){
      this.value = null;
      this.router.navigate(['**']);
    }
  }
  candidateForm = new FormGroup({
    candidate: new FormControl(''),
    symbol: new FormControl(''),
    party : new FormControl('')
  });

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log(this.candidateForm.value)
    this._service.createCandidates(this.candidateForm.value).subscribe(el =>{
      console.log(el)
      this.candidateForm.reset()
      this.ngOnInit()
    })
    console.log(this.candidateForm.value);
  }
  delete1(value : any){
    console.log(value)
    this._service.deletCandidate(value).subscribe(el =>{
      console.log(el)
      this.ngOnInit()
    })  
  }
}
