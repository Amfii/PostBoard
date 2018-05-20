import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Comment } from '../models/comment';

@Injectable()
export class CommentService {
    private readonly commentsEndpoint = 'api/Posts/Comment';

    constructor(private http: Http, @Inject('BASE_URL') private baseUrl: string) { }

    /*
     * Add new comment
     */
    create(comment: Comment) {
        return this.http.post(this.baseUrl + this.commentsEndpoint, comment)
            .map(res => res.json());
    }

}