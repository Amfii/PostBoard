using Microsoft.EntityFrameworkCore;
using PostBoard.Models.Posts;

namespace PostBoard.Models
{
    public class Db : DbContext
    {
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlite("Filename=./PostBoard.db");
        }

        public DbSet<Post> Posts { get; set; }

        public DbSet<Comment> Comments { get; set; }
    }
}
