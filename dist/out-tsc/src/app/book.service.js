import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let BookService = class BookService {
    constructor(http) {
        this.http = http;
        this.url = "http://localhost:57577/api/Books";
    }
    getAllBooks() {
        this.http.get(this.url).toPromise().then(res => {
            this.books = res;
        });
    }
    postBook() {
        return this.http.post(this.url, this.book);
    }
    putBook() {
        return this.http.put(this.url + "/" + this.book.id, this.book);
    }
    deleteBook(id) {
        return this.http.delete(this.url + "/" + id);
    }
};
BookService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], BookService);
export { BookService };
//# sourceMappingURL=book.service.js.map