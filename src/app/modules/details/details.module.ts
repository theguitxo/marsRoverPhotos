import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { DetailsComponent } from "./components/details/details.component";
import { DetailsRoutingModule } from "./details-routing.module";

/**
 * Module for show details about the photos for a rover, day and camera
 */
@NgModule({
  imports: [
    SharedModule,
    DetailsRoutingModule
  ],
  declarations: [
    DetailsComponent
  ]
})
export class DetailsModule {}
