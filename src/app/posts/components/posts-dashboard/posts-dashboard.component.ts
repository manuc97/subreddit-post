import { of } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { catchError, debounceTime, switchMap } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

// Service
import { PostsService } from '../../posts.service';

// Model
import { Post } from '../../models/post.model';

// Config
import { POST_TABLE_CONFIG } from '../../configs/post-table.config';


@Component({
    selector: 'posts-dashboard',
    templateUrl: './posts-dashboard.component.html',
    styleUrls: ['./posts-dashboard.component.scss'],
})

export class PostsDashboardComponent implements OnInit {

    public data: Array<any> = [];
    public config = JSON.parse(JSON.stringify(POST_TABLE_CONFIG));

    public isLoading = true;
    public hasError = false;
    public subreddit = new FormControl();
    public form: FormGroup = this.formBuilder.group({
        subreddit: this.subreddit
    });

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private postsService: PostsService,
        private formBuilder: FormBuilder
    ) { }

    ngOnInit(): void {
        this.searchBySubredit();
    }

    public searchBySubredit(): void {
        this.subreddit.valueChanges.pipe(
            debounceTime(500),
            switchMap(subreddit => {
                this.isLoading = true;
                return this.postsService.getSubredditPosts(subreddit).pipe(
                    catchError(err => {
                        this.hasError = true;
                        console.log('Error appeared', err);
                        return of(err);
                    })
                );
            })
        ).subscribe(response => {
            if (response && response.length > 0) {
                this.hasError = false;
                this.isLoading = false;
                this.data = response;
            }
        });
    }


    public onItemClicked(post: Post): void {
        if (post && post.id) {
            this.router.navigate([post.id], { relativeTo: this.route });
        }
    }
}
