import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
// import { AddTask } from './pages/add-task/add-task';
// import { TaskList } from './pages/task-list/task-list';
import { Login } from './pages/login/login';
import { Signup } from './pages/signup/signup';
import { NotFound } from './pages/not-found/not-found';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
  { path: '', component: Home, pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'add-task', loadComponent:()=> import('./pages/add-task/add-task').then(m=>m.AddTask) ,canActivate:[authGuard] },
  { path: 'tasks', loadComponent:()=> import('./pages/task-list/task-list').then(m=>m.TaskList) ,canActivate:[authGuard] },
  { path: 'login', loadComponent:()=> import('./pages/login/login').then(m=>m.Login) },
  { path: 'signup', loadComponent:()=> import('./pages/signup/signup').then(m=>m.Signup) },
  {path:'about',loadComponent:()=> import('./pages/about/about').then(m=>m.About)},// lazily loaded
  { path: '**', component: NotFound },
];
