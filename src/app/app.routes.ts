import { Routes } from '@angular/router';
import { Home } from './pages/Home/Home';
import { Products } from '../pages/products/products';
import { NewProduct } from '../pages/NewProduct/NewProduct';

export const routes: Routes = [

    {
        path: 'home',
        component: Home
    },{
        path: 'products',
        component: Products
    },
    {
        path: 'newProduct',
        component: NewProduct
    },
    {
        path:"**",
        redirectTo:"/home",
        pathMatch:"full"
    }

];
