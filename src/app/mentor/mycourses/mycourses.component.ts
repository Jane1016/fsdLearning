import { Component, OnInit } from '@angular/core';
import { DataTableResource } from 'angular7-data-table';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-mycourses',
  templateUrl: './mycourses.component.html',
  styleUrls: ['./mycourses.component.scss']
})
export class MycoursesComponent implements OnInit {
  mycourses = [
      { 'id': 1, 'name': 'Vue practise traing', 'price': 210, 'totalHours': 10,
        'authorEmail': 'Heath44@hotmail.com', 'description': 'Vue Regional Configuration Producer',
        'authorName': 'Yvonne Conroy', 'createDate': '2018-11-06T07:21:25.510Z', 'flagPass': true},
      { 'id': 2, 'name': 'how to learn Java smoothly', 'price': 310, 'totalHours': 15,
        'authorEmail': 'Heath44@hotmail.com', 'description': 'Global Java Training',
        'authorName': 'Yvonne Conroy', 'createDate': '2018-12-20T00:48:40.276Z', 'flagPass': false},
    ]

  limit = 5;

  searchText = '';
  loading = false;
  // choose not release course yet
  itemResource = new DataTableResource(this.mycourses);
  items = [];
  tableTile = 'All My Course List';
  itemCount = 0;
  limits = [5, 10, 20, 40, 80];

  constructor(
    private toastr: ToastrService) {
      this.itemResource.count().then(count => this.itemCount = count);
    }

  ngOnInit() {}

  searchItems() {
    const searchVar = this.searchText.toLowerCase();
    if (searchVar && searchVar.length > 0) {
      console.log(searchVar);
      const searchList = this.mycourses.filter( course => {
        return (course.id.toString().toLowerCase() === searchVar) ||
         (course.name.toLowerCase().indexOf(searchVar, 0) > -1) ||
         (course.description.toLowerCase().indexOf(searchVar, 0) > -1) ||
         (course.authorEmail.toLowerCase().indexOf(searchVar, 0) > -1) ||
         (course.authorName.toLowerCase().indexOf(searchVar, 0) > -1);
      });
      this.tableTile = 'Search Results List';
      this.itemResource = new DataTableResource(searchList);
    } else {
      this.tableTile = 'My Courses List';
      this.itemResource = new DataTableResource(this.mycourses);
    }
    this.itemResource.count().then(count => this.itemCount = count);
    this.reloadItems(this.itemResource);
  }

  reloadItems(params) {
    this.itemResource.query(params).then(items => this.items = items);
  }

  // special properties:
  rowClick(rowEvent) {
      console.log('Clicked: ' + rowEvent.row.item.name);
  }

  rowTooltip(item) {
    return item.description;
  }

}
