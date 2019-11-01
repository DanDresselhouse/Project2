import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateaccountpageComponent } from './components/createaccountpage/createaccountpage.component';
import { LoginpageComponent } from './components/loginpage/loginpage.component';
import { LoginaristpageComponent } from './components/loginaristpage/loginaristpage.component';
import { ArtistoptionspageComponent } from './components/artistoptionspage/artistoptionspage.component';
import{ArtistupdatepageComponent} from './components/artistupdatepage/artistupdatepage.component';
import { UseroptionspageComponent } from './components/useroptionspage/useroptionspage.component';
import { ArtistuploadsongpageComponent } from './components/artistuploadsongpage/artistuploadsongpage.component';
import { UserupdatepageComponent } from './components/userupdatepage/userupdatepage.component';


const routes: Routes = [
  {path : "loginpage", component : LoginpageComponent},
  {path : "artistoptionspage", component : ArtistoptionspageComponent},
  {path : "useroptionspage", component : UseroptionspageComponent},
  {path : "loginartistpage", component : LoginaristpageComponent},
  {path : "createaccountpage", component : CreateaccountpageComponent},
  {path : "artistuploadsong", component : ArtistuploadsongpageComponent},
  {path : "userupdatepage", component : UserupdatepageComponent},
  {path: "artistupdatepage", component : ArtistupdatepageComponent},
  {path : "**", component : LoginpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
