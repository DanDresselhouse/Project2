import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFileUploaderModule } from "angular-file-uploader";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginpageComponent } from './components/loginpage/loginpage.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { CreateaccountpageComponent } from './components/createaccountpage/createaccountpage.component';
import { LoginaristpageComponent } from './components/loginaristpage/loginaristpage.component';
import { ArtistoptionspageComponent } from './components/artistoptionspage/artistoptionspage.component';
import { UseroptionspageComponent } from './components/useroptionspage/useroptionspage.component';
import { ArtistuploadsongpageComponent } from './components/artistuploadsongpage/artistuploadsongpage.component';
import { UserupdatepageComponent } from './components/userupdatepage/userupdatepage.component';
import { ArtistupdatepageComponent } from './components/artistupdatepage/artistupdatepage.component';
import { RatingsPipe } from './pipes/ratings.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginpageComponent,
    CreateaccountpageComponent,
    LoginaristpageComponent,
    ArtistoptionspageComponent,
    UseroptionspageComponent,
    ArtistuploadsongpageComponent,
    ArtistuploadsongpageComponent,
    UserupdatepageComponent,
    ArtistupdatepageComponent,
    RatingsPipe
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
