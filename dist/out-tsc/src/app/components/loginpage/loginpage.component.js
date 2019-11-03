import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let LoginpageComponent = class LoginpageComponent {
    constructor(postrequest, router, data) {
        this.postrequest = postrequest;
        this.router = router;
        this.data = data;
        this.username = "";
        this.password = "";
        this.incorrectpasswordmessage = "";
    }
    ngOnInit() {
    }
    //this logins the artist and sets the artist object
    login() {
        let body = {
            id: 0,
            username: this.username,
            password: this.password
        };
        //backend endpoint goes here
        let url = "http://ec2-18-216-221-127.us-east-2.compute.amazonaws.com:9999/user/login";
        this.postrequest.postmethod(url, body).then((info) => {
            if (info != null) {
                console.log(info);
                this.userid = info.id;
                this.data.changeMessage(this.userid);
                this.router.navigateByUrl("/useroptionspage");
            }
        }).catch((response) => { this.incorrectpasswordmessage = "Incorrect username or password. Please try again."; });
    }
};
LoginpageComponent = tslib_1.__decorate([
    Component({
        selector: 'app-loginpage',
        templateUrl: './loginpage.component.html',
        styleUrls: ['./loginpage.component.css']
    })
], LoginpageComponent);
export { LoginpageComponent };
//# sourceMappingURL=loginpage.component.js.map