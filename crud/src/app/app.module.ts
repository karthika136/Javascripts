import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { ForelementComponent } from './forelement/forelement.component';

import { RecordsService } from './records.service';
import { HomeComponent } from './home/home.component';
import { DataComponent } from './data/data.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    ForelementComponent,
    HomeComponent,
    DataComponent,
    LoginComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([

      {
        path:'login',
        component:LoginComponent
      },
      
      {
        path:'data',
        component:DataComponent,
        canActivate : [AuthGuard]
      },
      {
        path:'logout',
        component:LogoutComponent
      },
      {
        path:'',
        component:HomeComponent
      }
    ]),
  ],
  providers: [RecordsService,AuthService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
