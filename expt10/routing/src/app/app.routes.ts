import { Routes } from '@angular/router';
import { HomeComponent } from './home-component/home-component';
import { UserComponent } from './user-component/user-component';
import { BookComponent } from './book-component/book-component';
import { authGuard } from './auth-guard';

export const routes: Routes = [
    {
        path:'',
        loadComponent:()=> import('./home-component/home-component').then(m=>m.HomeComponent)
    },
    {
        path:'user',
        loadComponent:()=> import('./user-component/user-component').then(m=>m.UserComponent)
    },
    {
        path:'book',
        canActivate:[authGuard],
        loadComponent:()=> import('./book-component/book-component').then(m=>m.BookComponent)
    },
];
