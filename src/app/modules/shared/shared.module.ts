import { CommonModule, DatePipe, DecimalPipe } from "@angular/common";
import { NgModule } from "@angular/core";
import { LoaderComponent } from "./components/loader/loader.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LoaderComponent
  ],
  providers: [
    DatePipe,
    DecimalPipe
  ],
  exports: [
    CommonModule,
    LoaderComponent,
    DatePipe,
    DecimalPipe
  ]
})
export class SharedModule {}
