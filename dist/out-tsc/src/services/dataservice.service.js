import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
let DataserviceService = class DataserviceService {
    constructor() {
        this.messageSource = new BehaviorSubject(0);
        this.currentMessage = this.messageSource.asObservable();
    }
    changeMessage(artistId) {
        this.messageSource.next(artistId);
    }
};
DataserviceService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], DataserviceService);
export { DataserviceService };
//# sourceMappingURL=dataservice.service.js.map