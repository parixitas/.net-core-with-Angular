import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Route } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { EmployeeServices } from '../Services/empservices.service';
import { FetchEmployeeComponent } from './fetchemployee/fetchemployee.component';
import { LoginEmployeeComponent } from './loginemployee/loginemployee.component';
import { createemployee } from './createemployee/createemployee.componet'; 


const ROUTES: Route[] = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, pathMatch: 'full' },
  { path: 'counter', component: CounterComponent },
  { path: 'fetch-data', component: FetchDataComponent },
  { path: 'fetch-employee', component: FetchEmployeeComponent },
  { path: 'login', component: LoginEmployeeComponent },
  { path: 'regester-employee', component: createemployee },
  { path: 'employee/edit_employee/:empcode', component: createemployee },
  { path: '**', redirectTo: 'home' }
]

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    FetchEmployeeComponent,
    LoginEmployeeComponent,
    createemployee
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [EmployeeServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
