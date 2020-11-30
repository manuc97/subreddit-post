import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

// Models & interface
import { Post } from './models/post.model';
import { IPost } from './interfaces/post.interface';

// Service
import { ApiService } from '../shared/service/api.service';

const postUrl = '/r/';

@Injectable({ providedIn: 'root' })
export class PostsService {

    private posts: Array<Post>;

    constructor(private apiService: ApiService) { }

    public getSubredditPosts(subreddit: string): Observable<Array<Post>> {
        return this.apiService.get(`${postUrl}${subreddit}.json`).pipe(
            map((response) => {
                const parsedResults = response.data.children.map((post: IPost) => new Post(post['data']));
                parsedResults.sort((a, b) => (a.ups < b.ups) ? 1 : ((b.ups < a.ups) ? -1 : 0));
                this.posts = parsedResults;
                return parsedResults;
            }),
            catchError((err) => {
                console.log('Error appeared', err);
                return throwError(err);
            })
        );
    }

    public getPostById(id: string): Post {
        if (id && this.posts && this.posts.length > 0) {
            return this.posts.find((element: Post) => element.id === id);
        }
    }
}
