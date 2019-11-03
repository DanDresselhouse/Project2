import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let ArtistoptionspageComponent = class ArtistoptionspageComponent {
    constructor(idTransfer) {
        this.idTransfer = idTransfer;
        this.id = 0;
    }
    ngOnInit() {
        this.idTransfer.currentMessage.subscribe(id => this.id = id);
        console.log(this.id);
    }
};
ArtistoptionspageComponent = tslib_1.__decorate([
    Component({
        selector: 'app-artistoptionspage',
        templateUrl: './artistoptionspage.component.html',
        styleUrls: ['./artistoptionspage.component.css']
    })
], ArtistoptionspageComponent);
export { ArtistoptionspageComponent };
//# sourceMappingURL=artistoptionspage.component.js.map