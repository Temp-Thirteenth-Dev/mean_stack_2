import { Routes } from '@angular/router';
import { HomeComponent } from './home-component/home-component';
import { UserComponent } from './user-component/user-component';
import { BookComponent } from './book-component/book-component';
import { authGuard } from './auth-guard';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'/home',
        pathMatch:'full'
    },
    {
        path:'home',
        component:HomeComponent,
        children:[
            {
                path:'user',
                component:UserComponent
            },
            {
                path:'book',
                canActivate:[authGuard],
                component:BookComponent
            },
        ]
    },
];
