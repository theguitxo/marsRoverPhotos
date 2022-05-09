import { NgModule } from "@angular/core";
import { MatExpansionModule } from '@angular/material/expansion';
import { DashboardRoutingModule } from "./dashboard-routing.module";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { RoverPanelComponent } from "./components/rover-panel/rover-panel.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  imports: [
    SharedModule,
    DashboardRoutingModule,
    MatExpansionModule
  ],
  declarations: [
    DashboardComponent,
    RoverPanelComponent
  ]
})
export class DashboardModule {}
