import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: '[app-table-header]',
  templateUrl: './table-header.component.html',
  styleUrls: ['./table-header.component.scss']
})
export class TableHeaderComponent implements OnInit {

  @Input() config: any = {};
  @Output() sortChange = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  onSortChange(event) {
    this.sortChange.emit(event);
  }
}
