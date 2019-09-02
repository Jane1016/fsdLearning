import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FileSelectDirective, FileUploader } from 'ng2-file-upload/ng2-file-upload';
const URL = '/users/uploadUserData';

@Component({
  selector: 'app-applycourses',
  templateUrl: './applycourses.component.html',
  styleUrls: ['./applycourses.component.scss']
})
export class ApplycoursesComponent implements OnInit {
  public uploader: FileUploader = new FileUploader({url: URL, itemAlias: 'photo'});
  private courseID: number;
  validatingForm: FormGroup;

  constructor(private routeInfo: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    // get param from route
    this.courseID = this.routeInfo.snapshot.queryParams[' courseID '];
    if ( this.courseID && this.courseID.toString().length > 0) {
      // show the detail of this course in this page
      // update the information of the course when submit
    }
    this.validatingForm = new FormGroup({
      courseFormName: new FormControl(null, Validators.required),
      courseFormDesc: new FormControl(null, Validators.required),
      courseFormPrice: new FormControl(null, Validators.required),
      courseFormHours: new FormControl(null, Validators.required)
    });
    this.uploadFile();
  }

  get courseFormName() { return this.validatingForm.get('courseFormName'); }
  get courseFormDesc() { return this.validatingForm.get('courseFormDesc'); }
  get courseFormPrice() { return this.validatingForm.get('courseFormPrice'); }
  get courseFormHours() { return this.validatingForm.get('courseFormHours'); }

  uploadFile() {
    this.uploader.onAfterAddingFile = (file) => {file.withCredentials = false; };
    this.uploader.onCompleteItem = (item: any, response: any, headers: any) => {
      console.log('file upload', item, status, response);
    };
  }

  submitRegstr() {
    // stop here if form is invalid
    if (this.validatingForm.invalid) {
      return;
    }
  }

}
