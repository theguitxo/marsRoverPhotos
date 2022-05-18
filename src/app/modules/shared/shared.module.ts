import { CommonModule, DatePipe, DecimalPipe } from "@angular/common";
import { NgModule } from "@angular/core";
import { LoaderComponent } from "./components/loader/loader.component";
import { PaginatorComponent } from "./components/paginator/paginator.component";
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule
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
    LoaderComponent,
    PaginatorComponent,
    DatePipe,
    DecimalPipe
  ]
})
export class SharedModule {}
