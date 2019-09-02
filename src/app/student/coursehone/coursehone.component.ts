import { Courses } from './../../Model/courses';
import courses from '../course.data';
import { Component, OnInit } from '@angular/core';
import {  DataTableResource } from 'angular7-data-table';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-coursehone',
  templateUrl: './coursehone.component.html',
  styleUrls: ['./coursehone.component.scss']
})
export class CoursehoneComponent implements OnInit {
  yearLimit = 2019;
  limit = 5;

  searchText = '';
  loading = false;
  // choose not release course yet
  itemResource = new DataTableResource(courses);
  items = [];
  tableTile = 'All Course List';
  itemCount = 0;
  limits = [3, 10, 20, 40, 80];

  constructor(
    private toastr: ToastrService) {
      this.itemResource.count().then(count => this.itemCount = count);
    }

  ngOnInit() {}

  searchItems() {
    const searchVar = this.searchText.toLowerCase();
    if (searchVar && searchVar.length > 0) {
      const searchList = courses.filter( course => {
        return (course.id.toString().toLowerCase() === searchVar) ||
         (course.name.toLowerCase().indexOf(searchVar, 0) > -1) ||
         (course.description.toLowerCase().indexOf(searchVar, 0) > -1) ||
         (course.authorEmail.toLowerCase().indexOf(searchVar, 0) > -1) ||
         (course.authorName.toLowerCase().indexOf(searchVar, 0) > -1);
      });
      this.tableTile = 'Search Results List';
      this.itemResource = new DataTableResource(searchList);
    } else {
      this.tableTile = 'Courses List';
      this.itemResource = new DataTableResource(courses);
    }
    this.itemResource.count().then(count => this.itemCount = count);
    this.reloadItems(this.itemResource);
  }


  reloadItems(params) {
    this.itemResource.query(params).then(items => this.items = items);
  }

  // special properties:
  rowClick(rowEvent) {
      console.log('Clicked: ' + rowEvent.row.item.username);
  }

  rowDoubleClick(rowEvent) {
      alert('Double clicked: ' + rowEvent.row.item.username);
  }

  rowTooltip(item) {
    return item.description;
  }

}

