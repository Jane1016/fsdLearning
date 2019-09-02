import { Courses } from './../../Model/courses';
import courses from './course.data';
import { UserService } from './../../service/user.service';
import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { DataTableResource } from 'angular7-data-table';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-coursemanage',
  templateUrl: './coursemanage.component.html',
  styleUrls: ['./coursemanage.component.scss']
})
export class CoursemanageComponent implements OnInit {
  limit = 5;

  searchText = '';
  loading = false;
  // choose not release course yet
  itemResource = new DataTableResource(courses);
  items = [];
  tableTile = 'All Course List';
  itemCount = 0;
  limits = [5, 10, 20, 40, 80];

  constructor(
    private toastr: ToastrService) {
      this.itemResource.count().then(count => this.itemCount = count);
    }

  ngOnInit() {}

  changeTheCourseStatus(item) {
    item.flagPass = !item.flagPass;
    // when there is backend, call the service to update the courses flag
  }


  searchItems() {
    const searchVar = this.searchText.toLowerCase();
    if (searchVar && searchVar.length > 0) {
      console.log(searchVar);
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

  SendMailToAuthor(item) {

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
