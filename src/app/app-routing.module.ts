import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ReponsivePageComponent } from './reponsive-page/reponsive-page.component';
import { ReportComponent } from './report/report.component';
import { StartcontentComponent } from './startcontent/startcontent.component';

const routes: Routes = [
  {
    path:"",
    redirectTo:"/startcontent",
    pathMatch:"full"
  },
  {
    path:'startcontent',
    component: StartcontentComponent
  }, 
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'register',
    component: RegisterComponent
  },

  {
    path:'report',
    component: ReportComponent
  },
  {
    path:'reponsive-page',
    component: ReponsivePageComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
