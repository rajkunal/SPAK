import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Route[] = [
  {path :'',redirectTo:'/login',pathMatch:'full'},
  {path : 'login', component: LoginComponent},
  {path : 'list',component : ListComponent},
  {path : 'signup',component : SignUpComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
