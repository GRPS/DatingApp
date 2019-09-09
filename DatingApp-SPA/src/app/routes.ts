import { MemberListResolver } from './resolvers/member-list-resolver';
import { MemberDetailResolver } from './resolvers/member-detail-resolver';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { Routes } from '@angular/router';
import { MessagesComponent } from './messages/messages.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { HomeComponent } from './home/home.component';
import { ListsComponent } from './lists/lists.component';
import { AuthGuard } from './guades/auth.guard';

export const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
            { path: 'members', component: MemberListComponent, resolve: { users: MemberListResolver } },
            { path: 'messages', component: MessagesComponent },
            { path: 'members/:id', component: MemberDetailComponent, resolve: { user: MemberDetailResolver } },
            { path: 'lists', component: ListsComponent },
            { path: 'detail', component: MemberDetailComponent }
        ]
    },
    { path: '**', redirectTo: 'home', pathMatch: 'full' }
];
