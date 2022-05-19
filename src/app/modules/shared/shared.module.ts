import { CommonModule, DatePipe, DecimalPipe } from "@angular/common";
import { NgModule } from "@angular/core";
import { LoaderComponent } from "./components/loader/loader.component";
import { PaginatorComponent } from "./components/paginator/paginator.component";
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatProgressSpinnerModule
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
