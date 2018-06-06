import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SubjectService } from '../../app/services';
import {Subjects } from '../../app/models/subjects'


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  list: Subjects[] = [];

  constructor(public navCtrl: NavController, private subjectService: SubjectService) {

  }

  ngOnInit() {
    this.loadSubjects();
  }

  loadSubjects() {
    this.subjectService.ApiSubjectGet().subscribe(x => {
      this.list = x;
    });
  }

  delete(id) {
    this.subjectService.ApiSubjectByIdDelete(id).subscribe(() =>{
      this.loadSubjects();
    });
  }

}
