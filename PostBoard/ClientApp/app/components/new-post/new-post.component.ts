import { Component } from '@angular/core';
import { PostService } from './../../services/post.service';
import { Post } from './../../models/post';
import { Router } from "@angular/router";

@Component({
    selector: 'new-post',
    templateUrl: './new-post.component.html',
    styleUrls: ['./new-post.component.css']
})
export class NewPostComponent {
    public post: Post = {
        postId: 0,
        title: '',
        content: '',
        createDate: '',
        createUser: '',
        comments: []
    };

    constructor(private postService: PostService, private router: Router) { }

    /*
     * On form submit
     */
    public submit() {
        var result$ = this.postService.create(this.post);
        result$.subscribe(post => {
            this.router.navigate(['/posts/', post.postId])
        });
    }
}