import { CommonModule, DatePipe, DecimalPipe } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatIconModule } from "@angular/material/icon";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatTabsModule } from "@angular/material/tabs";
import { LoaderComponent } from "./components/loader/loader.component";
import { PaginatorComponent } from "./components/paginator/paginator.component";
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { ErrorDialogLauncherComponent } from "./components/error-dialog/error-dialog-launcher/error-dialog-launcher.component";
import { ErrorDialogPopupComponent } from "./components/error-dialog/error-dialog-popup/error-dialog-popup.component";
import { MatSelectModule } from '@angular/material/select';

/**
 * Module for shared features
 */
@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatExpansionModule,
    MatTabsModule,
    MatIconModule,
    MatCardModule,
    MatDividerModule,
    MatListModule,
    MatDialogModule,
    MatSelectModule
  ],
  declarations: [
    LoaderComponent,
    PaginatorComponent,
    ErrorDialogLauncherComponent,
    ErrorDialogPopupComponent
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
    MatCardModule,
    MatDividerModule,
    MatListModule,
    MatDialogModule,
    MatSelectModule,
    DatePipe,
    DecimalPipe,
    LoaderComponent,
    PaginatorComponent,
    ErrorDialogLauncherComponent,
    ErrorDialogPopupComponent
  ]
})
export class SharedModule {}
