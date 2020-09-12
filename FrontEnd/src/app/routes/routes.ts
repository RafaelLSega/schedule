import { Route } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { HomeModule } from '../pages/home/home.module';
import { ContactModule } from '../pages/contact/contact.module';
import { LoginModule } from '../pages/login/login.module';

export const routes: Route[] = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadChildren: () => HomeModule,
      },
      {
        path: 'contact',
        loadChildren: () => ContactModule,
      },
    ],
  },
  { path: 'login', loadChildren: () => LoginModule },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];
