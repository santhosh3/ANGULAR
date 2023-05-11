import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Task} from '../../Task';
import {faTimes} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-tasks-item',
  templateUrl: './tasks-item.component.html',
  styleUrls: ['./tasks-item.component.css']
})
export class TasksItemComponent implements OnInit{

    @Input() task: Task
    @Output() onDeleteTask : EventEmitter<Task> = new EventEmitter();
    @Output() onToggleRemainder : EventEmitter<Task> = new EventEmitter();
    faTimes = faTimes

    ngOnInit(): void {
        
    }

    onDelete(task){
      this.onDeleteTask.emit(task);
    }

    onToggle(task){
      this.onToggleRemainder.emit(task);
    }
}
