import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { AppService } from './app.service';
import { debug } from 'util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  data: any[] = [];
  tableConfig: any = {};

  constructor(
    private appService: AppService
  ) {

  }

  ngOnInit(): void {
    this.tableConfig = {
      title: 'User Details',
      select: 'name,age,city,regDate,email',
      filter: {},
      sort: null,
      pagination: {
        page: null,
        size: null,
        sizeOptions: [5, 10, 20, 50, 100, 150, 200]
      },
      selection: 'single' // or multiple
    }
    this.getData(this.tableConfig);
  }

  getData(config) {
    this.data = [];
    setTimeout(() => {
      this.data = this.appService.getRecords();
    }, 1000);
  }

}
