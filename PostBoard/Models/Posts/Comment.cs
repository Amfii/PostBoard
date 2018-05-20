using PostBoard.Models.Shared;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace PostBoard.Models.Posts
{
    public class Comment : BaseModel
    {
        [Key]
        public int CommentId { get; set; }

        public int PostId { get; set; }

        [Required]
        public string Content { get; set; }
    }
}
