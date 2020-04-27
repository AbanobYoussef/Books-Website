import { __decorate } from "tslib";
import { Component } from '@angular/core';
let BooksListComponent = class BooksListComponent {
    constructor(service) {
        this.service = service;
    }
    ngOnInit() {
        this.service.getAllBooks();
    }
    fillData(item) {
        this.service.book.id = item.id;
        this.service.book.title = item.title;
        this.service.book.auther = item.auther;
        this.service.book.numberOfPages = item.numberOfPages;
        this.service.book.publshDate = item.publshDate;
    }
    delete(id) {
        this.service.deleteBook(id).subscribe(res => {
            this.service.getAllBooks();
        }, err => {
            console.log(err);
        });
    }
};
BooksListComponent = __decorate([
    Component({
        selector: 'app-books-list',
        templateUrl: './books-list.component.html',
        styleUrls: ['./books-list.component.css']
    })
], BooksListComponent);
export { BooksListComponent };
//# sourceMappingURL=books-list.component.js.map