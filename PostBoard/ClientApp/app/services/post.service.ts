import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Post } from '../models/post';

@Injectable()
export class PostService {
    private readonly postsEndpoint = 'api/Posts/Posts';

    constructor(private httpClient: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

    /*
     * Get all posts
     */
    getPosts() {
        return this.httpClient.get<Post[]>(this.baseUrl + this.postsEndpoint);
    }

    /*
     * Get selected post
     */
    getPost(id: number) {
        return this.httpClient.get<Post>(this.baseUrl + this.postsEndpoint + '/' + id);
    }

    /*
     * Create new post
     */
    create(post: Post) {
        return this.httpClient.post<Post>(this.baseUrl + this.postsEndpoint, post);
    }
}