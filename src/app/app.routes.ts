export const APP_ROUTES_CONFIGURATION = [{
    path: '',
    loadChildren: () => import('./posts/posts.module').then(m => m.PostsModule),
}];
