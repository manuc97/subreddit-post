import { Component, Inject, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

// Model
import { Post } from '../../models/post.model';

@Component({
    selector: 'post-dialog',
    templateUrl: './post-dialog.component.html',
    styleUrls: ['./post-dialog.component.scss']
})
export class PostDialogComponent implements OnDestroy{
    public postForm: FormGroup;
    private post: Post;
    private dialogRef: MatDialog;

    constructor(
        @Inject(MAT_DIALOG_DATA) public data,
        private formBuilder: FormBuilder,
        private router: Router
    ) {

        this.post = this.data && this.data.post ? this.data.post : null;
        this.dialogRef = this.data.dialogRef;

        if (this.post) {
            this.postForm = this.formBuilder.group({
                subreddit: [this.post.subreddit ? this.post.subreddit : ''],
                title: [this.post ? this.post.title : ''],
                selftext: [this.post ? this.post.selftext : '', []],
            });
        } else {
            this.navigateToPosts();
        }

    }
    private navigateToPosts(): void {
        this.router.navigate(['']);
    }

    ngOnDestroy(): void {
        this.navigateToPosts();
    }
}
