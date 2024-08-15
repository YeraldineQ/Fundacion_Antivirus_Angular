import { Routes } from '@angular/router';
import { loginGuard } from './private/guards/login_guards/login.guard';

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
        path: 'private',
        canActivate: [loginGuard],
        loadComponent: ()=> import('./private/private.component').then(m=>m.PrivateComponent),
        children: [
            {
                path: 'usuario',
                title: 'Usuario',
                loadComponent: ()=> import('./private/moduls/usuario/usuario.component').then(m=>m.UsuarioComponent),
            }
        ]
    },
    {
        path: '',
        redirectTo: 'public/home',
        pathMatch: 'full'
    }
];
