import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthGuard } from '../gaurd/auth.guard';
import { AllService } from '../shared/all.service';

@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.css']
})
export class UserpageComponent implements OnInit {
  candidates: any = [];
  value: string | null | undefined;
  user : any;
  status: any;
  vote: any;
  constructor(private  _service : AllService, private router : Router,private auth : AuthGuard) { 
   this.value = sessionStorage.getItem('token');
  } 


  ngOnInit(): void {
    this._service.getCandidates().subscribe(event => {
      this.candidates = event
      console.log("candidates",this.candidates)
    });
    this._service.getusers().subscribe(el =>{
      console.log(el)
      if(el){
        this.getuser(el)
      }
    })
  }

  get(event:any,element:any){
    console.log("event",event);
    console.log(element)
  }

  getuser(users : any){
    for(let i = 0 ; i <  users.length ; i++){
      // console.log(users[i])
      // console.log(typeof(this.value))
      if(this.value == users[i].username){
        this.user = users[i].username 
        this.status = users[i].status
        this.vote = users[i].vote
        console.log("user----->",this.user);
        console.log("status----->",this.status);
      }
    } 
  }

  voted(candidateref : any){
    if(candidateref[0].candidate !== undefined && !Number.isNaN(candidateref[0].count)){
      let cadidateName = candidateref[0].candidate;
    let cadidatecount = candidateref[0].count + 1;
    // console.log(cadidatecount)
    let body = {
      candidate : cadidateName,
      count : cadidatecount
    }
    console.log(body)
    let userbody = {
      username : this.value,
      status : true,
      vote : cadidateName
    }
    if(body && userbody){
      this._service.updateCandidate(body).subscribe(el =>{
        console.log(el)
      });
      this._service.updateuser(userbody).subscribe(ele =>{
        console.log(ele)
        this.ngOnInit()
      });
    }
    else{
      console.warn("err")
    }
    // this._service
    console.log(userbody)
    // console.log(cadidateName,cadidatecount)
    }
    else{
      alert('Please Select atleast one candidate')
    }
  }

}
