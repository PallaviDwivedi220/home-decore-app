import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';

export const routes: Routes = [
    {
        path: '',
        component: HomePageComponent,
        'title': 'Home',
    },
    {
        path: 'login',
        loadComponent: () => import('./user-login/user-login.component').then(c => c.UserLoginComponent),
        'title': 'Login'
    },
    {
        path: 'register',
        loadComponent: () => import('./user-registration/user-registration.component').then(c => c.UserRegistrationComponent),
        'title': 'Registration'
    },
    {
        path: 'living-room',
        loadComponent: () => import('./living-room/living-room.component').then(c => c.LivingRoomComponent),
        'title': 'Living Room'
    },
    {
        path: 'bedroom',
        loadComponent: () => import('./bedroom-page/bedroom-page.component').then(c => c.BedroomPageComponent),
        'title': 'Bedroom'
    },
    {
        path: 'bathroom',
        loadComponent: () => import('./bathroom-page/bathroom-page.component').then(c => c.BathroomPageComponent),
        title: 'Bathroom'
    },
    {
        path: 'kitchen',
        loadComponent: () => import('./kitchen-page/kitchen-page.component').then(c => c.KitchenPageComponent),
        title: 'Kitchen'
    },
    {
        path: 'wellness',
        loadComponent: () => import('./wellness/wellness.component').then(c => c.WellnessComponent),
        'title': 'Wellness'
    },
    {
        path: 'gifting',
        loadComponent: () => import('./gifting/gifting.component').then(c => c.GiftingComponent),
        'title': 'Gifting'
    },
    {
        path: 'cart',
        loadComponent: () => import('./cart-page/cart-page.component').then(c => c.CartPageComponent),
        'title': 'Cart'
    },
    {
        path: 'about',
        loadComponent: () => import('./project-overview/project-overview.component').then(c => c.ProjectOverviewComponent),
        'title': 'About'
    }
];
