import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BootstrapcomponentComponent } from './bootstrapcomponent/bootstrapcomponent.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [ 
  {path: '', component: AppComponent},
  {path: 'app ', component: AppComponent},
  {path: 'login', component: LoginComponent},
  {path: 'bootstrapcomponent', component: BootstrapcomponentComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
