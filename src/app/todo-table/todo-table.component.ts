import { Component, OnInit, ViewChild } from '@angular/core';
import { ITodo } from '../interfaces/itodo';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TodoService } from '../services/todo.service';


@Component({
  selector: 'app-todo-table',
  templateUrl: './todo-table.component.html',
  styleUrls: ['./todo-table.component.css']
})
export class TodoTableComponent implements OnInit {
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  displayedColumns: string[] = ['title', 'description', 'status', 'createdAt'];
  dataSource: MatTableDataSource<ITodo>;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.todoService.getTodos());
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
