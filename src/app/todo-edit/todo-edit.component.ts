import { Component, OnInit } from '@angular/core';
import { ITodo } from '../interfaces/itodo';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css']
})
export class TodoEditComponent implements OnInit {

  todo: ITodo;
  modalInstance: NgbModalRef;
  newDescription = '';
  constructor() { }

  ngOnInit() {
  }

  save(): void {
    this.todo.description = this.newDescription;
    this.modalInstance.close(this.todo);
  }

}
