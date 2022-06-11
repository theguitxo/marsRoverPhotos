import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./components/dashboard/dashboard.component";

/**
 * Routes for the dashboard module
 */
const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  }
];

/**
 * Module for manage the routes in the dashboard module
 */
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
