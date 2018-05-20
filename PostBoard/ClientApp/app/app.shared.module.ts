import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

// Components
import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { PostsComponent } from './components/posts/posts.component';
import { ViewPostComponent } from './components/view-post/view-post.component';
import { NewPostComponent } from './components/new-post/new-post.component';

// Services
import { PostService } from './services/post.service';
import { CommentService } from './services/comment.service';

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        PostsComponent,
        ViewPostComponent,
        NewPostComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'posts', pathMatch: 'full' },
            { path: 'posts', component: PostsComponent },
            { path: 'posts/:id', component: ViewPostComponent },
            { path: 'newPost', component: NewPostComponent },
            { path: '**', redirectTo: 'posts' }
        ])
    ],
    providers: [
        PostService,
        CommentService
    ]
})
export class AppModuleShared {
}
