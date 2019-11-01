import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let LoginaristpageComponent = class LoginaristpageComponent {
    constructor(postrequest, router, idService) {
        this.postrequest = postrequest;
        this.router = router;
        this.idService = idService;
        this.username = "";
        this.password = "";
        this.artistID = 0;
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
        //console.log(info);
        this.artistID = 8;
        this.idService.changeMessage(this.artistID);
        this.router.navigateByUrl("/artistoptionspage");
        //backend endpoint goes here
        let url = "http://ec2-18-216-221-127.us-east-2.compute.amazonaws.com:9999/artist/login";
        this.postrequest.postmethod(url, body).then((info) => {
            console.log(info);
            this.artistID = info.artistID;
            this.idService.changeMessage(this.artistID);
            this.router.navigateByUrl("/artistoptionspage");
        }).catch((response) => { console.log("Information couldn't be found"); });
    }
};
LoginaristpageComponent = tslib_1.__decorate([
    Component({
        selector: 'app-loginaristpage',
        templateUrl: './loginaristpage.component.html',
        styleUrls: ['./loginaristpage.component.css']
    })
], LoginaristpageComponent);
export { LoginaristpageComponent };
//# sourceMappingURL=loginaristpage.component.js.map