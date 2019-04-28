import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { APP_BASE_HREF } from '@angular/common';
const routes: Routes = [
  { path: '', component:  LoginComponent},
  { path: 'pages' , loadChildren: './pages/pages.module#PagesModule', canLoad: [AuthGuard] },
  { path: '**', redirectTo: 'pages/pacientes'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}]
})
export class AppRoutingModule { }
