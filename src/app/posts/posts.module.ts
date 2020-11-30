import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// User-defined modules
import { SharedModule } from '../shared/shared.module';
import { PostsRoutingModule } from './posts-routing.module';

// Service
import { PostsService } from './posts.service';

// Resolver
import { PostResolver } from './resolvers/post.resolver';

@NgModule({
    imports: [
        PostsRoutingModule,
        CommonModule,
        SharedModule
    ],
    exports: [],
    declarations: PostsRoutingModule.components,
    providers: [PostsService, PostResolver],
})
export class PostsModule { }
