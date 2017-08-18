import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  tableConfig = {
    header: 'Users',
    columns: [{
      label: 'First Name',
      key: 'firstName',
      sortable: true,
      visible: true
    }, {
      label: 'Last Name',
      key: 'lastName',
      sortable: true,
      visible: true
    }, {
      label: 'Email',
      kay: 'email',
      sortable: false,
      visible: false  
    }],
    pagination: false
  }
}
