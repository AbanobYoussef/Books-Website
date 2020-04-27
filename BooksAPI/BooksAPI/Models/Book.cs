using System;
using System.Collections.Generic;

namespace BooksAPI.Models
{
    public partial class Book
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Auther { get; set; }
        public int? NumberOfPages { get; set; }
        public DateTime? PublshDate { get; set; }
    }
}
