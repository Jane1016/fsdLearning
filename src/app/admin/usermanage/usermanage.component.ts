import { User } from './../../Model/user';
import { UserService } from './../../service/user.service';
import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { DataTableResource } from 'angular7-data-table';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-usermanage',
  templateUrl: './usermanage.component.html',
  styleUrls: ['./usermanage.component.scss']
})
export class UsermanageComponent implements OnInit {
  limit = 5;
  searchText = '';
  roleCheck = 'All User';
  loading = false;
  allUsers: User[] = [];
  users: User[] = [];
  itemResource = new DataTableResource([]);
  items = [];
  tableTile = 'All User List';
  itemCount = 0;
  limits = [5, 10, 20, 40, 80];

  constructor(
    private userService: UserService,
    private toastr: ToastrService) {
      this.itemResource.count().then(count => this.itemCount = count);
    }

  ngOnInit() {
    this.loadAllUsers();
  }

  loadAllUsers() {
    this.loading = true;
    this.userService.getAllUsers().pipe(first()).subscribe(users => {
      this.loading = false;
      this.allUsers = users.filter(user => {
        return user.role !== 'admin';
      });
      this.itemResource = new DataTableResource(this.allUsers);
      this.itemResource.count().then(count => this.itemCount = count);
      this.reloadItems(this.itemResource);
    });

  }

  changeUserStatus(item) {
    item.lockflag = !item.lockflag;
    this.loading = true;
    this.userService.updateUser(item).pipe(first()).subscribe( user => {
      this.loading = false;
      // this.loadAllUsers();
      this.toastr.success('Update ' + item.username + ' Successfully!', 'Success!', {timeOut: 3000});
    },
    error => {
        // this.alertService.error(error);
        this.toastr.error(error, 'Warning!', {timeOut: 3000});
    });
  }

  searchItems() {
    const searchVar = this.searchText.toLowerCase();
    if (searchVar && searchVar.length > 0) {
      console.log(searchVar);
      const searchList = this.allUsers.filter( users => {
        return (users.id.toString().toLowerCase() === searchVar) ||
         (users.email.toLowerCase().indexOf(searchVar, 0) > -1) ||
         (users.username.toLowerCase().indexOf(searchVar, 0) > -1);
      });
      this.tableTile = 'Search Results List';
      this.itemResource = new DataTableResource(searchList);
      this.itemResource.count().then(count => this.itemCount = count);
      this.reloadItems(this.itemResource);
    }


  }

  getTheRole(e) {
    this.roleCheck = e.target.value;
    if ( this.roleCheck === 'All User' ) {
      this.itemResource = new DataTableResource(this.allUsers);
    } else {
      this.users = this.allUsers.filter((user) => {
        return user.role === this.roleCheck;
      });
      this.itemResource = new DataTableResource(this.users);
    }
    this.tableTile = this.roleCheck + ' List';
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
    return item.username;
  }

}
