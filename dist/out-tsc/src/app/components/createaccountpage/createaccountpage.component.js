import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let CreateaccountpageComponent = class CreateaccountpageComponent {
    constructor(postrequest, router) {
        this.postrequest = postrequest;
        this.router = router;
        this.name = "";
        this.username = "";
        this.password = "";
        this.isartist = false;
    }
    ngOnInit() {
    }
    createaccount() {
        let body = {
            id: 0,
            name: this.name,
            username: this.username,
            password: this.password
        };
        let url = "";
        //backend endpoint goes here
        if (this.isartist) {
            url = "http://ec2-18-216-221-127.us-east-2.compute.amazonaws.com:9999/artist";
        }
        else {
            url = "http://ec2-18-216-221-127.us-east-2.compute.amazonaws.com:9999/user";
        }
        console.log(url);
        this.postrequest.postmethod(url, body).then(() => {
            console.log("success");
            if (this.isartist) {
                this.router.navigateByUrl("/artistoptionspage");
            }
            else {
                this.router.navigateByUrl("/useroptionspage");
            }
        }).catch((response) => { console.log("Information couldn't be found"); });
    }
};
CreateaccountpageComponent = tslib_1.__decorate([
    Component({
        selector: 'app-createaccountpage',
        templateUrl: './createaccountpage.component.html',
        styleUrls: ['./createaccountpage.component.css']
    })
], CreateaccountpageComponent);
export { CreateaccountpageComponent };
//# sourceMappingURL=createaccountpage.component.js.map