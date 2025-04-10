import { Routes } from '@angular/router';
import { LivingRoomComponent } from './living-room/living-room.component';
import { SalePageComponent } from './sale-page/sale-page.component';
import { BedroomPageComponent } from './bedroom-page/bedroom-page.component';
import { BathroomPageComponent } from './bathroom-page/bathroom-page.component';
import { KitchenPageComponent } from './kitchen-page/kitchen-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { HomePageComponent } from './home-page/home-page.component';

export const routes: Routes = [
    {
        path: '',
        component: HomePageComponent
    },
    {
        path: 'living-room',
        component: LivingRoomComponent
    },
    {
        path: 'sale',
        component: SalePageComponent
    },
    {
        path: 'bedroom',
        component: BedroomPageComponent
    },
    {
        path: 'bathroom',
        component: BathroomPageComponent
    },
    {
        path: 'kitchen',
        component: KitchenPageComponent
    },
    {
        path: 'cart',
        component: CartPageComponent
    }
];
