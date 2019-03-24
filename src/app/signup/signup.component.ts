import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/Http';
import {DataserviceService} from '../dataservice.service';
import { User } from '../user';
import {AuthserviceService} from '../authservice.service';
import { Router } from '@angular/router';
import {AngularFireAuth} from 'angularfire2/auth';




@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user={} as User
  userId={
    uid:''
  }
  email = '';
  password = '';
  errorMessage = '';
  error: {name: string, message: string} = {name: '', message: ''};

  constructor(private dataservice:DataserviceService,
    public authService: AuthserviceService,
    private router : Router,
    private afauth:AngularFireAuth) { }

  ngOnInit() {
  }
  onSignup(user){
    this.afauth.auth.createUserWithEmailAndPassword(user.email,user.password)
    .then(data=>{
      this.userId.uid=this.afauth.auth.currentUser.uid;
      console.log(this.userId.uid)
      alert('Registered !')
      this.router.navigate(['/login'])
     
    })
    .catch(_error=>{
      this.error = _error
      this.router.navigate(['/signup'])
    });
  }
}
      

