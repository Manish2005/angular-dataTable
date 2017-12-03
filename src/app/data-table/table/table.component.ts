import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() config: any = {};
  @Input() data: any = [];
  @Output() refresh = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  onSortChange(sort) {
    debugger;
    this.config.sort = sort;
    this.refreshData();
  }

  refreshData() {
    this.refresh.emit(this.config);
  }

}
