import { PostResolver } from './resolvers/post.resolver';

// Components
import { PostPopupComponent } from './components/post-popup/post-popup.component';
import { PostsDashboardComponent } from './components/posts-dashboard/posts-dashboard.component';

export const POSTS_ROUTES = [{
    path: '',
    component: PostsDashboardComponent,
    children: [{
        path: ':id',
        component: PostPopupComponent,
        resolve: {
            post: PostResolver
        }
    }]
}];
