import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { FormsModule } from '@angular/forms';
import { TableColumnComponent } from './table-column/table-column.component';
import { TableHeaderComponent } from './table-header/table-header.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [TableComponent, TableColumnComponent, TableHeaderComponent],
  exports: [TableComponent, TableColumnComponent, TableHeaderComponent]
})
export class DataTableModule { }
