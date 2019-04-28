import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatButtonModule,
  MatSidenavModule,
  MatToolbarModule,
  MatCardModule,
  MatListModule,
  MatIconModule,
  MatInputModule,
  MatFormFieldModule,
  MatPaginatorModule,
  MatSortModule,
  MatTableModule,
  MatExpansionModule,
  MatSliderModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSelectModule,
  MatChipsModule
} from '@angular/material';
@NgModule({
  declarations: [],
  imports: [
    MatButtonModule,
    MatSidenavModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatExpansionModule,
    MatSliderModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatChipsModule
  ],
  exports: [
    MatButtonModule,
    MatSidenavModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatExpansionModule,
    MatSliderModule,
    MatDatepickerModule,
    MatSelectModule,
    MatChipsModule
  ]
})
export class MaterialModule { }
