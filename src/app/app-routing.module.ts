import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const ROUTES: Routes = [
    {
        path: '',
        loadChildren: './main/main.module#MainModule'
    },
    {
        path: 'friends',
        loadChildren: './friends/friends.module#FriendsModule'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(ROUTES)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

