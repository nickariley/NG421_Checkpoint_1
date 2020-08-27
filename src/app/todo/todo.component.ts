import { Component, OnInit,Input } from '@angular/core';
import {TodoService} from '../services/todo.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { ConfirmationModalComponent } from '../confirmation-modal/confirmation-modal.component';
import { ITodo } from '../interfaces/itodo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @Input() todo;
  constructor(private todoService: TodoService, private modalService : NgbModal) { }
  todoTitle = '';
  isEditing = false;
  statuses: string[];

  ngOnInit() {
    this.statuses = this.todoService.getStatuses();
  }
  async deleteTodo(todo): Promise<void> {
    let result;
    const modal = this.modalService.open(ConfirmationModalComponent);
    modal.componentInstance.modalInstance = modal;
    try {
      result = await modal.result;
      if (result === 'yes') {
        this.todoService.deleteTodo(todo);
      }
    }
    catch(ex){
      
    }
  }

  editTodo(): void {
    
  }

}
