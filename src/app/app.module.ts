import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataAddComponent } from './data-add/data-add.component';
import { ListDataComponent } from './list-data/list-data.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule }    from '@angular/common/http';
import {DataserviceService } from './dataservice.service';
import { ViewComponent } from './view/view.component';
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";

import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';

var config = {
apiKey: "AIzaSyBO8n99r5gHlNvGDACXCnz7MKAsr-Dh624",
authDomain: "triodesk-database.firebaseapp.com",
databaseURL: "https://triodesk-database.firebaseio.com",
projectId: "triodesk-database",
storageBucket: "triodesk-database.appspot.com",
messagingSenderId: "222672577138"
};
@NgModule({
  declarations: [
    AppComponent,
    DataAddComponent,
    ListDataComponent,
    ViewComponent,
    SignupComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    RouterModule.forRoot([
     {path:'',pathMatch:'full',redirectTo:'login'},
     {path:'data-add',component:DataAddComponent},
     {path:'list-data',component:ListDataComponent},
     {path:'view/:id',component:ViewComponent},
     {path:'signup',component:SignupComponent},
     {path:'login',component:LoginComponent}
    ])
  ],
  providers: [DataserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
