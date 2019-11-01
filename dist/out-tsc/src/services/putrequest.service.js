import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
let PutrequestService = class PutrequestService {
    constructor(http) {
        this.http = http;
    }
    //pass in url and body object
    putmethod(url, putObject) {
        //put backend rest point here
        let response = this.http.put(url, putObject).toPromise();
        return response;
    }
};
PutrequestService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], PutrequestService);
export { PutrequestService };
//# sourceMappingURL=putrequest.service.js.map