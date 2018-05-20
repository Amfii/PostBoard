using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PostBoard.Models.Shared
{
    public class BaseModel
    {
        [Column(TypeName = "datetime2")]
        public DateTime? CreateDate { get; set; }

        [Required]
        [StringLength(50)]
        public string CreateUser { get; set; }
    }
}
