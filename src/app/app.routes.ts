import { Routes } from '@angular/router';
// import { Dashboard } from './dashboard/dashboard/dashboard';

export const routes: Routes = [

    {
      path: 'dashboard',
      loadComponent: () => import('./dashboard/dashboard'),
      children:[
        {
          path: 'about-me',
          title: 'About Me',
          loadComponent: ()=> import('./dashboard/pages/about-me/about-me')
        },
        {
          path: 'projects',
          title: 'Projects',
          loadComponent: () => import('./dashboard/pages/projects/projects')
        },
        {
          path: 'contact',
          title: 'Contact',
          loadComponent: () => import('./dashboard/pages/contact/contact')
        },
        {
          path: '',
          redirectTo: 'about-me',
          pathMatch: 'full'
        }
      ]

    },
    {
      path: '',
      redirectTo: '/dashboard',
      pathMatch: 'full'
    }
];
