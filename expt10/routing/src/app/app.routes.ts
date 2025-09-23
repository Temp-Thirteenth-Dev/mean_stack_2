import { Routes } from '@angular/router';
import { HomeComponent } from './home-component/home-component';
import { UserComponent } from './user-component/user-component';
import { BookComponent } from './book-component/book-component';

export const routes: Routes = [
    {
        path:'',
        component:HomeComponent,
    },
    {
        path:'user',
        component:UserComponent,
    },
    {
        path:'book',
        component:BookComponent,
    },
];
