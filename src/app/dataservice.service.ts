import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { reject, resolve } from 'q';
@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  triodesk:any;
  getData1:any;
  constructor(private http:HttpClient) { }
  adddata(value){
   return this.http.post('https://5c8205572d2ad30014be5098.mockapi.io/api/v1/triodeskdata',value).toPromise()
   .then((data)=>{
     resolve(data)
   })
  }

  getData(){
    return this.http.get('https://5c8205572d2ad30014be5098.mockapi.io/api/v1/triodeskdata')
    .pipe(map(data=>this.getData1=data))
  }
  del(value){
    return this.http.delete('https://5c8205572d2ad30014be5098.mockapi.io/api/v1/triodeskdata/'+value,)
    .pipe(map(data=>this.getData1=data))
  }
}
