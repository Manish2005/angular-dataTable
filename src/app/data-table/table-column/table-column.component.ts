import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'th',
  templateUrl: './table-column.component.html',
  styleUrls: ['./table-column.component.scss']
})
export class TableColumnComponent implements OnInit {

  @Input() sort?: string = '';
  @Output() onSortChange = new EventEmitter<any>();
  order: string = '';


  constructor() { }

  ngOnInit() {
  }

  onColumnClick() {
    if (!this.sort) {
      return false;
    }
    if (!this.order) {
      this.order = '+';
    } else {
      this.order = this.order === '+' ? '-' : '+';
    }
    this.onSortChange.emit((this.order === '-' ? '-' : '') + this.sort);
  }
}
