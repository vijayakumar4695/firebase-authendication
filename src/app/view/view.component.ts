import { Component, OnInit } from '@angular/core';
import {DataserviceService} from '../dataservice.service';
import { Route ,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  id:any;
  bind:any;
  result:any={
    name:'',
    email:'',
    aadhar:'',
    deg:'',
    doj:'',

  }
  constructor(public routing:ActivatedRoute,public service:DataserviceService) { }
 
  ngOnInit() {
    this.id=this.routing.snapshot.params['id'];
    console.log(this.id)
      this.service.getData().subscribe(res=>{
        this.bind=res;
       for(let i=0;i<this.bind.length;i++){
       if(this.id===this.bind[i].id){

         this.result.name=this.bind[i].uname
         this.result.email=this.bind[i].email
        this.result.aadhar=this.bind[i].aadharno
        this.result.deg=this.bind[i].degree
        this.result.doj=this.bind[i].doj
       }
      }
      })
  }
}
