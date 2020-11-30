import { EMPTY, Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';

// Services
import { PostsService } from '../posts.service';

// Models
import { Post } from '../models/post.model';

@Injectable()
export class PostResolver implements Resolve<Post> {
    constructor(private postsService: PostsService, private router: Router) { }

    resolve(route: ActivatedRouteSnapshot): Observable<Post> {
        const post = this.postsService.getPostById(route.paramMap.get('id'));
        if (post) {
            return of(post);
        } else {
            this.router.navigate(['']);
            return EMPTY;
        }
    }
}
