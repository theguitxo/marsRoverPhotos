import { CommonModule, DatePipe, DecimalPipe } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatIconModule } from "@angular/material/icon";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatTabsModule } from "@angular/material/tabs";
import { LoaderComponent } from "./components/loader/loader.component";
import { PaginatorComponent } from "./components/paginator/paginator.component";

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatExpansionModule,
    MatTabsModule,
    MatIconModule
  ],
  declarations: [
    LoaderComponent,
    PaginatorComponent
  ],
  providers: [
    DatePipe,
    DecimalPipe
  ],
  exports: [
    CommonModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatExpansionModule,
    MatTabsModule,
    MatIconModule,
    DatePipe,
    DecimalPipe,
    LoaderComponent,
    PaginatorComponent
  ]
})
export class SharedModule {}
