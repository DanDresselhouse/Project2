import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
let GetrequestService = class GetrequestService {
    constructor(http) {
        this.http = http;
    }
    getmethod(url) {
        //put backend rest point here
        let response = this.http.get(url).toPromise();
        return response;
    }
};
GetrequestService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], GetrequestService);
export { GetrequestService };
//# sourceMappingURL=getrequest.service.js.map