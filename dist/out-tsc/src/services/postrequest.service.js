import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
let PostrequestService = class PostrequestService {
    constructor(http) {
        this.http = http;
    }
    //pass in url and body object
    postmethod(url, postObject) {
        //put backend rest point here
        let response = this.http.post(url, postObject).toPromise();
        return response;
    }
};
PostrequestService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], PostrequestService);
export { PostrequestService };
//# sourceMappingURL=postrequest.service.js.map