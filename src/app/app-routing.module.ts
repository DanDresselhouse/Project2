import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateaccountpageComponent } from './components/createaccountpage/createaccountpage.component';
import { LoginpageComponent } from './components/loginpage/loginpage.component';


const routes: Routes = [
  {path : "loginpage", component : LoginpageComponent},
  {path : "createaccountpage", component : CreateaccountpageComponent},
  {path : "**", component : LoginpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
