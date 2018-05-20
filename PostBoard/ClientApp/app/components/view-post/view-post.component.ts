import { Component, OnInit } from '@angular/core';
import { PostService } from './../../services/post.service';
import { CommentService } from './../../services/comment.service';
import { Post } from './../../models/post';
import { Comment } from './../../models/comment';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'view-post',
    templateUrl: './view-post.component.html',
    styleUrls: ['./view-post.component.css']
})
export class ViewPostComponent implements OnInit {
    public postId: number;
    public post: Post;

    public comment: Comment = {
        commentId: 0,
        content: '',
        createDate: '',
        createUser: '',
        postId: this.postId
    };

    constructor(private postService: PostService, private commentService: CommentService, private route: ActivatedRoute, private router: Router) {
        route.params.subscribe(params => {
            this.postId = +params['id'];
            this.comment.postId = +params['id'];
            if (isNaN(this.postId) || this.postId <= 0) {
                router.navigate(['/posts']);
                return;
            }
        });
    }

    ngOnInit() {
        this.postService.getPost(this.postId)
            .subscribe(post => { this.post = post }, error => console.error(error));
    }

    /*
     * On comment form submit
     */
    public submitComment() {
        var result$ = this.commentService.create(this.comment);
        result$.subscribe(comment => {
            this.comment.content = '';
            this.post.comments.push(comment);
        }, error => console.error(error));
    }
}