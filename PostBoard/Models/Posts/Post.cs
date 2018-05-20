using PostBoard.Models.Shared;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace PostBoard.Models.Posts
{
    public class Post: BaseModel
    {
        [Key]
        public int PostId { get; set; }

        [Required]
        public string Title { get; set; }

        [Required]
        public string Content { get; set; }

        public virtual ICollection<Comment> Comments { get; set; }
    }
}
