using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PostBoard.Models;
using PostBoard.Models.Posts;

namespace PostBoard.Controllers
{
    [Route("api/[controller]")]
    public class PostsController : Controller
    {
        /*
         * Get all Posts
         */
        [HttpGet("[action]")]
        public IActionResult Posts()
        {
            using (var db = new Db())
            {

                return Ok(db.Posts.Include(x => x.Comments).OrderByDescending(x => x.CreateDate).ToList());
            }
        }

        /*
         * Get a Post by id
         */
        [HttpGet("[action]/{id}")]
        public IActionResult Posts(int id)
        {
            using (var db = new Db())
            {
                return Ok(db.Posts.Include(x => x.Comments).FirstOrDefault(x => x.PostId == id));
            }
        }

        /*
         * Add new Post
         */
        [HttpPost("[action]")]
        public IActionResult Posts([FromBody]Post value)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            value.CreateDate = DateTime.Now;

            using (var db = new Db())
            {
                db.Posts.Add(value);
                db.SaveChanges();

                return Ok(value);
            }
        }

        /*
         * Add new Comment
         */
        [HttpPost("[action]")]
        public IActionResult Comment([FromBody]Comment value)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            value.CreateDate = DateTime.Now;

            using (var db = new Db())
            {
                db.Comments.Add(value);
                db.SaveChanges();

                return Ok(value);
            }
        }
    }
}