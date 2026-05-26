import { Routes } from '@angular/router';
import { Home } from './pages/Home/Home';

export const routes: Routes = [
    
    {
        path: 'home',
        component: Home
    },
    {
        path 'products'
        component : Products
    },
    {
        path:"**",
        redirectTo:"/home",
        pathMatch:"full"
    }

];
