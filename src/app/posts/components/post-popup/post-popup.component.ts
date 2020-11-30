import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// Rxjs
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

// Components
import { PostDialogComponent } from '../post-dialog/post-dialog.component';

// Material
import { MatDialog } from '@angular/material/dialog';

@Component({
    selector: 'post-popup',
    templateUrl: './post-popup.component.html',
    styleUrls: ['./post-popup.component.scss']
})
export class PostPopupComponent implements OnInit, OnDestroy {
    private destroy$ = new Subject<boolean>();

    constructor(private dialog: MatDialog, private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.route.params.pipe(
            takeUntil(this.destroy$)
        ).subscribe((data) => {
            this.dialog.open(PostDialogComponent, {
                data: {
                    post: data.id ? this.route.snapshot.data['post'] : null,
                    action: this.route.snapshot.data.action,
                    dialogRef: this.dialog
                }
            });
        });

    }

    ngOnDestroy(): void {
        this.destroy$.next(true);
        this.destroy$.complete();
    }
}

