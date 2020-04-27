import { __decorate } from "tslib";
import { Component } from '@angular/core';
let BookItemComponent = class BookItemComponent {
    constructor(service) {
        this.service = service;
    }
    ngOnInit() {
        this.service.book = {
            id: 0,
            title: null,
            auther: null,
            numberOfPages: null,
            publshDate: null
        };
    }
    submit() {
        if (this.service.book.id == 0) {
            this.service.postBook().subscribe(res => {
                this.service.getAllBooks();
            }, err => {
                console.log(err);
            });
        }
        else {
            this.service.putBook().subscribe(res => {
                this.service.getAllBooks();
            }, err => {
                console.log(err);
            });
        }
    }
};
BookItemComponent = __decorate([
    Component({
        selector: 'app-book-item',
        templateUrl: './book-item.component.html',
        styleUrls: ['./book-item.component.css']
    })
], BookItemComponent);
export { BookItemComponent };
//# sourceMappingURL=book-item.component.js.map