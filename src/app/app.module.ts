import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFileUploaderModule } from "angular-file-uploader";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginpageComponent } from './components/loginpage/loginpage.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { CreateaccountpageComponent } from './components/createaccountpage/createaccountpage.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginpageComponent,
    CreateaccountpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFileUploaderModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
