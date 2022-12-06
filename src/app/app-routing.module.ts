import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { BusinessComponent } from './business/business.component';
import { ClientComponent } from './client/client.component';
import { HomeComponent } from './home/home.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
{ path: 'login', component: LoginComponent },
{ path: 'register', component: RegisterComponent },
{ path: 'home', component: HomeComponent },
{ path: 'business', component: BusinessComponent },
{ path: 'client', component: ClientComponent },
{ path: '', redirectTo: '/login', pathMatch: 'full' }, //Redirigir en ruta vacía

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
