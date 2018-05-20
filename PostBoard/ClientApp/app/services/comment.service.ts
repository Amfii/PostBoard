import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Comment } from '../models/comment';

@Injectable()
export class CommentService {
    private readonly commentsEndpoint = 'api/Posts/Comment';

    constructor(private httpClient: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

    /*
     * Add new comment
     */
    create(comment: Comment) {
        return this.httpClient.post<Comment>(this.baseUrl + this.commentsEndpoint, comment);
    }

}