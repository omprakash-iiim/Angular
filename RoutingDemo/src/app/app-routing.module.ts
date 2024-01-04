import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  { path: 'employees' , component:EmployeeListComponent},
  //passing single parameters
  {path:"employee/:id", component: EmployeeDetailComponent},
  //how to pass multiple parameters
  {path:"employee/:id/:designation", component: EmployeeDetailComponent},
  //wild card route. note: always place this route at the end of other routers
  { path: '**' , component:PageNotFoundComponent},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 


}
