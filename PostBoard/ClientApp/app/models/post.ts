import { Comment } from './comment';

export interface Post {
    postId: number;
    title: string;
    content: string;
    createDate: string;
    createUser: string;
    comments: Comment[];
}