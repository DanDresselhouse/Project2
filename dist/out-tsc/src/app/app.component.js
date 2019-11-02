import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let AppComponent = class AppComponent {
    constructor(uploadservice) {
        this.uploadservice = uploadservice;
        this.title = 'Project2';
    }
    ngOnInit() {
    }
    upload() {
        const file = this.selectedFiles.item(0);
        this.uploadservice.uploadFile(file);
    }
    selectFile(event) {
        this.selectedFiles = event.target.files;
    }
};
AppComponent = tslib_1.__decorate([
    Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map