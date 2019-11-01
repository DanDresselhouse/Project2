import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CreateaccountpageComponent } from './components/createaccountpage/createaccountpage.component';
import { LoginpageComponent } from './components/loginpage/loginpage.component';
import { LoginaristpageComponent } from './components/loginaristpage/loginaristpage.component';
import { ArtistoptionspageComponent } from './components/artistoptionspage/artistoptionspage.component';
import { UseroptionspageComponent } from './components/useroptionspage/useroptionspage.component';
import { UserupdatepageComponent } from './components/userupdatepage/userupdatepage.component';
const routes = [
    { path: "loginpage", component: LoginpageComponent },
    { path: "artistoptionspage", component: ArtistoptionspageComponent },
    { path: "useroptionspage", component: UseroptionspageComponent },
    { path: "loginartistpage", component: LoginaristpageComponent },
    { path: "createaccountpage", component: CreateaccountpageComponent },
    { path: "userupdatepage", component: UserupdatepageComponent },
    { path: "**", component: LoginpageComponent }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map