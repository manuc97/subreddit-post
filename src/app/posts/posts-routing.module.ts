import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// Constants
import { POSTS_ROUTES } from './posts.routes';

// Components
import { PostPopupComponent } from './components/post-popup/post-popup.component';
import { PostDialogComponent } from './components/post-dialog/post-dialog.component';
import { PostsDashboardComponent } from './components/posts-dashboard/posts-dashboard.component';

@NgModule({
  imports: [RouterModule.forChild(POSTS_ROUTES)],
  exports: [RouterModule]
})
export class PostsRoutingModule {
  static components = [PostsDashboardComponent, PostPopupComponent, PostDialogComponent];
}
