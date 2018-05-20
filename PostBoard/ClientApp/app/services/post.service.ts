import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Post } from '../models/post';

@Injectable()
export class PostService {
    private readonly postsEndpoint = 'api/Posts/Posts';

    constructor(private http: Http, @Inject('BASE_URL') private baseUrl: string) { }

    /*
     * Get all posts
     */
    getPosts() {
        return this.http.get(this.baseUrl + this.postsEndpoint)
            .map(res => res.json());
    }

    /*
     * Get selected post
     */
    getPost(id: number) {
        return this.http.get(this.baseUrl + this.postsEndpoint + '/' + id)
            .map(res => res.json());
    }

    /*
     * Create new post
     */
    create(post: Post) {
        return this.http.post(this.baseUrl + this.postsEndpoint, post)
            .map(res => res.json());
    }
}