import { NgModule } from "@angular/core";
import { DashboardRoutingModule } from "./dashboard-routing.module";
import { SharedModule } from "../shared/shared.module";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { RoverPanelComponent } from "./components/rover-panel/rover-panel.component";
import { RoverPhotosComponent } from "./components/rover-photos/rover-photos.component";

@NgModule({
  imports: [
    SharedModule,
    DashboardRoutingModule
  ],
  declarations: [
    DashboardComponent,
    RoverPanelComponent,
    RoverPhotosComponent
  ]
})
export class DashboardModule {}
