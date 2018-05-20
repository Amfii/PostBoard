import { Component, OnInit } from '@angular/core';
import { PostService } from './../../services/post.service';
import { Post } from './../../models/post';

@Component({
    selector: 'posts',
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
    public posts: Post[];

    constructor(private postService: PostService) { }

    ngOnInit() {
        this.postService.getPosts()
            .subscribe(posts => this.posts = posts);
    }

}