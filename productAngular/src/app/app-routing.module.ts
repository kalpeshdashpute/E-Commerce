import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminRegisterComponent } from './admin-register/admin-register.component';
import { AdminComponent } from './admin/admin.component';
import { ContactComponent } from './contact/contact.component';
import { CoolFeaturesComponent } from './cool-features/cool-features.component';
import { FeaturesComponent } from './features/features.component';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path:'', redirectTo:'/services', pathMatch:'full'
  },
  {
    path:'home',component:HomeComponent
  },
  {
    path:'features',component:FeaturesComponent
  },
  {
    path:'services',component:ServicesComponent
  },
  {
    path:'cool-features',component:CoolFeaturesComponent
  },
  {
    path:'contact',component:ContactComponent
  },
  {
    path:'admin',component:AdminComponent,canActivate:[AuthGuard]
  },
  {
    path:'signIn',component:SignUpComponent
  },
  {
    path:'adminRegister',component:AdminRegisterComponent
  },
  {
    path:'adminLogin',component:AdminLoginComponent
  },
  {
    path:'user',component:UserComponent,
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
