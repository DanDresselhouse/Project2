import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let UseroptionspageComponent = class UseroptionspageComponent {
    constructor(getrequest, data, postrequest) {
        this.getrequest = getrequest;
        this.data = data;
        this.postrequest = postrequest;
        this.userid = 0;
        this.searchinput = "";
        this.checkedstring = "fa fa-star checked zoom";
        this.uncheckedstring = "fa fa-star zoom";
        this.class1 = this.checkedstring;
        this.class2 = this.uncheckedstring;
        this.class3 = this.uncheckedstring;
        this.class4 = this.uncheckedstring;
        this.class5 = this.uncheckedstring;
        this.oldclass1 = this.checkedstring;
        this.oldclass2 = this.uncheckedstring;
        this.oldclass3 = this.uncheckedstring;
        this.oldclass4 = this.uncheckedstring;
        this.oldclass5 = this.uncheckedstring;
    }
    ngOnInit() {
        this.data.currentMessage.subscribe(id => this.userid = id);
        this.getuserbyid(2);
        //let thisuser = this.getuserbyid(this.userid);
        this.getallsongs();
    }
    getallsongs() {
        let url = "http://ec2-18-216-221-127.us-east-2.compute.amazonaws.com:9999/song";
        this.getrequest.getmethod(url).then((info) => {
            console.log(info);
            this.songs = info;
            console.log(this.songs);
        }).catch((response) => { console.log("Information couldn't be found"); });
    }
    // getallartists() {
    //   let url = "http://ec2-18-216-221-127.us-east-2.compute.amazonaws.com:9999/artist";
    //   this.getrequest.getmethod(url).then((info) => {
    //     this.artists = info;
    //   }).catch((response) => { console.log("Information couldn't be found") });
    // }
    getuserbyid(id) {
        let url = "http://ec2-18-216-221-127.us-east-2.compute.amazonaws.com:9999/user/" + id;
        this.getrequest.getmethod(url).then((info) => {
            this.thisuser = info;
            console.log(this.thisuser);
        }).catch((response) => { console.log("Information couldn't be found"); });
    }
    search(name) {
        let url = "http://ec2-18-216-221-127.us-east-2.compute.amazonaws.com:9999/song/name/" + name;
        this.getrequest.getmethod(url).then((info) => {
            console.log(info);
            this.songs = info;
            console.log(this.songs);
        }).catch((response) => { console.log("Information couldn't be found"); });
    }
    rateit(i) {
        switch (i) {
            case 1:
                this.class1 = this.checkedstring;
                this.class2 = this.uncheckedstring;
                this.class3 = this.uncheckedstring;
                this.class4 = this.uncheckedstring;
                this.class5 = this.uncheckedstring;
                break;
            case 2:
                this.class1 = this.checkedstring;
                this.class2 = this.checkedstring;
                this.class3 = this.uncheckedstring;
                this.class4 = this.uncheckedstring;
                this.class5 = this.uncheckedstring;
                break;
            case 3:
                this.class1 = this.checkedstring;
                this.class2 = this.checkedstring;
                this.class3 = this.checkedstring;
                this.class4 = this.uncheckedstring;
                this.class5 = this.uncheckedstring;
                break;
            case 4:
                this.class1 = this.checkedstring;
                this.class2 = this.checkedstring;
                this.class3 = this.checkedstring;
                this.class4 = this.checkedstring;
                this.class5 = this.uncheckedstring;
                break;
            case 5:
                this.class1 = this.checkedstring;
                this.class2 = this.checkedstring;
                this.class3 = this.checkedstring;
                this.class4 = this.checkedstring;
                this.class5 = this.checkedstring;
        }
        this.oldclass1 = this.class1;
        this.oldclass2 = this.class2;
        this.oldclass3 = this.class3;
        this.oldclass4 = this.class4;
        this.oldclass5 = this.class5;
    }
    temprate(i) {
        this.oldclass1 = this.class1;
        this.oldclass2 = this.class2;
        this.oldclass3 = this.class3;
        this.oldclass4 = this.class4;
        this.oldclass5 = this.class5;
        switch (i) {
            case 1:
                this.class1 = this.checkedstring;
                this.class2 = this.uncheckedstring;
                this.class3 = this.uncheckedstring;
                this.class4 = this.uncheckedstring;
                this.class5 = this.uncheckedstring;
                break;
            case 2:
                this.class1 = this.checkedstring;
                this.class2 = this.checkedstring;
                this.class3 = this.uncheckedstring;
                this.class4 = this.uncheckedstring;
                this.class5 = this.uncheckedstring;
                break;
            case 3:
                this.class1 = this.checkedstring;
                this.class2 = this.checkedstring;
                this.class3 = this.checkedstring;
                this.class4 = this.uncheckedstring;
                this.class5 = this.uncheckedstring;
                break;
            case 4:
                this.class1 = this.checkedstring;
                this.class2 = this.checkedstring;
                this.class3 = this.checkedstring;
                this.class4 = this.checkedstring;
                this.class5 = this.uncheckedstring;
                break;
            case 5:
                this.class1 = this.checkedstring;
                this.class2 = this.checkedstring;
                this.class3 = this.checkedstring;
                this.class4 = this.checkedstring;
                this.class5 = this.checkedstring;
        }
    }
    oldrate() {
        this.class1 = this.oldclass1;
        this.class2 = this.oldclass2;
        this.class3 = this.oldclass3;
        this.class4 = this.oldclass4;
        this.class5 = this.oldclass5;
    }
    submitcomment(thissong) {
        console.log(this.thisuser);
        console.log(thissong);
        let body = {
            id: 16,
            comment: "test comment",
            rating: 4,
            user: this.thisuser.id,
            song: 1
        };
        console.log(body);
        //backend endpoint goes here
        let url = "http://ec2-18-216-221-127.us-east-2.compute.amazonaws.com:9999/comment/song";
        this.postrequest.postmethod(url, body).then(() => {
            console.log("success");
        }).catch((response) => { console.log("something went wrong"); });
    }
};
UseroptionspageComponent = tslib_1.__decorate([
    Component({
        selector: 'app-useroptionspage',
        templateUrl: './useroptionspage.component.html',
        styleUrls: ['./useroptionspage.component.css']
    })
], UseroptionspageComponent);
export { UseroptionspageComponent };
//# sourceMappingURL=useroptionspage.component.js.map