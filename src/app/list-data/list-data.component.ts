import { Component, OnInit } from '@angular/core';
import {DataserviceService} from '../dataservice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-list-data',
  templateUrl: './list-data.component.html',
  styleUrls: ['./list-data.component.css']
})
export class ListDataComponent implements OnInit {
  bind:any;
  erase:any;
  show:any;
  constructor(private dataservice:DataserviceService,public routing:Router) { }

  ngOnInit() {
   this.get();
  }
  get(){
    this.dataservice.getData().subscribe(res=>{
      this.bind=res;
      console.log(res)
    })
  }
 del(value){
   this.dataservice.del(value.id).subscribe(res=>{
     let data=res;
     this.get();
   })
   this.erase=value
   console.log(value.id)
 }



}
