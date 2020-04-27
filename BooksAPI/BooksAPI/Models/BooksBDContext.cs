using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace BooksAPI.Models
{
    public partial class BooksBDContext : DbContext
    {

        public BooksBDContext(DbContextOptions<BooksBDContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Book> Book { get; set; }

    }
}
