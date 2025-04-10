// app.routes.ts
import { Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';  // Welcome Page
import { LoginComponent } from './login/login.component';  // Login Page
import { SignUpComponent } from './sign-up/sign-up.component';  // Sign-up Page
import { DashboardComponent } from './dashboard/dashboard.component';  // Dashboard Page
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';

export const routes: Routes = [
  { path: '', component: WelcomeComponent },  // Welcome page will be the default route
  { path: 'login', component: LoginComponent },  // Login page
  { path: 'signup', component: SignUpComponent },  // Sign-up page
  { path: 'dashboard', component: DashboardComponent }, 
  { path:'add-employee', component: AddEmployeeComponent},
  { path: 'update-employee/:id', component: EditEmployeeComponent },
  { path: '**', component: WelcomeComponent }  
 // Wildcard route to redirect to login if no route matches
];
