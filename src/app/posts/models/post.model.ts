import { IPost } from '../interfaces/post.interface';

export class Post implements IPost {
    [x: string]: any;
    id: string;
    subreddit: string;
    title: string;
    ups: number;
    downs: number;
    selftext: string;

    constructor(post: IPost) {
        this.id = post.id;
        this.subreddit = post.subreddit;
        this.title = post.title;
        this.ups = post.ups;
        this.downs = post.downs;
        this.selftext = post.selftext;
    }
}
