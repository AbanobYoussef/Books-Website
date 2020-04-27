import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {

  constructor(public service:BookService) { }
  
  ngOnInit(): void {
    this.service.getAllBooks();
  }


  fillData(item)
  {
    this.service.book.id=item.id;
    this.service.book.title=item.title;
    this.service.book.auther=item.auther;
    this.service.book.numberOfPages=item.numberOfPages;
    this.service.book.publshDate=item.publshDate;
  }


  delete(id)
  {
    this.service.deleteBook(id).subscribe(
      res=>{
        this.service.getAllBooks();
      },
      err=>{
        console.log(err);
      });
  }
}
