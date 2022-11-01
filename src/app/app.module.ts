import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ReportComponent } from './report/report.component';
import { TopbarComponent } from './topbar/topbar.component';
import { StartcontentComponent } from './startcontent/startcontent.component';
import { HttpClientModule } from '@angular/common/http';
import { ReponsivePageComponent } from './reponsive-page/reponsive-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ReportComponent,
    TopbarComponent,
    StartcontentComponent,
    ReponsivePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
