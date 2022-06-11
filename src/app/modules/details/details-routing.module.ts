import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DetailsComponent } from "./components/details/details.component";

/**
 * Routes for the details module
 */
const routes: Routes = [
  {
    path: '',
    component: DetailsComponent
  }
];

/**
 * Module for manage the routes for the detais module
 */
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailsRoutingModule {}
