import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
let DataService = class DataService {
    constructor() {
        this.messageSource = new BehaviorSubject(0);
        this.currentMessage = this.messageSource.asObservable();
    }
    changeMessage(userid) {
        this.messageSource.next(userid);
    }
};
DataService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], DataService);
export { DataService };
//# sourceMappingURL=data.service.js.map