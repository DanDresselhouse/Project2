import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let UserupdatepageComponent = class UserupdatepageComponent {
    constructor(getrequest, putrequest, data, router) {
        this.getrequest = getrequest;
        this.putrequest = putrequest;
        this.data = data;
        this.router = router;
        this.userid = 0;
        this.newName = "";
        this.newUsername = "";
    }
    ngOnInit() {
        this.data.currentMessage.subscribe(id => this.userid = id);
        this.getuserbyid(1);
        //let thisuser = this.getuserbyid(this.userid);
        console.log(this.userid);
    }
    updateUser() {
        let url = "http://ec2-18-216-221-127.us-east-2.compute.amazonaws.com:9999/user";
        let body = {
            id: this.userid,
            name: this.newName,
            username: this.newUsername
        };
        this.putrequest.putmethod(url, body).then(() => {
            console.log("success");
            //this.router.navigateByUrl("/useroptionspage");
        }).catch((response) => { console.log("Information couldn't be found"); });
    }
    getuserbyid(id) {
        let url = "http://ec2-18-216-221-127.us-east-2.compute.amazonaws.com:9999/user/" + id;
        this.getrequest.getmethod(url).then((info) => {
            this.thisuser = info;
            console.log(this.thisuser);
        }).catch((response) => { console.log("Information couldn't be found"); });
    }
};
UserupdatepageComponent = tslib_1.__decorate([
    Component({
        selector: 'app-userupdatepage',
        templateUrl: './userupdatepage.component.html',
        styleUrls: ['./userupdatepage.component.css']
    })
], UserupdatepageComponent);
export { UserupdatepageComponent };
//# sourceMappingURL=userupdatepage.component.js.map