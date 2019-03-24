import { Component, OnInit } from '@angular/core';
import { stringify } from 'querystring';
import {DataserviceService} from '../dataservice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-data-add',
  templateUrl: './data-add.component.html',
  styleUrls: ['./data-add.component.css']
})
export class DataAddComponent implements OnInit {
   data1:any;
  constructor(public dataservice:DataserviceService,public routing:Router) { }

  ngOnInit() {
  }
add(data){
this.dataservice.adddata(data).then((data)=>{
  this.data1=data;
  this.routing.navigate(['/list-data']); 
})
console.log(data)
}
}
