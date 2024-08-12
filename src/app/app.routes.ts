import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'public',
        loadComponent: ()=> import('./publics/publics.component').then(m=>m.PublicsComponent),
        children: [
            {
                path: 'home',
                title: 'Home',
                loadComponent: ()=> import('./publics/home/home.component').then(m=>m.HomeComponent),
            },
            {
                path: 'login',
                title: 'Login',
                loadComponent: ()=> import('./publics/login/login.component').then(m=>m.LoginComponent),
            },
            {
                path: 'registrate',
                title: 'Registrate',
                loadComponent: ()=> import('./publics/registrate/registrate.component').then(m=>m.RegistrateComponent),
            },
        ]
    },
    {
        path: '',
        redirectTo: 'public/home',
        pathMatch: 'full'
    }
];
