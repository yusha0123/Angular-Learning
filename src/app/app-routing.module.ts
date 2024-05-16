import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AboutComponent } from './components/about/about.component';
import { authGuard } from './guards/auth-guard.guard';

const routes: Routes = [
  {
    path: '',
    title: 'Home page',
    component: HomeComponent,
  },
  {
    path: 'dashboard',
    title: 'Dashboard',
    component: DashboardComponent,
    canActivate: [authGuard],
  },
  {
    path: 'about',
    title: 'About',
    component: AboutComponent,
  },
  {
    path: '**',
    title: '404 - Page Not Found',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      bindToComponentInputs: true,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
