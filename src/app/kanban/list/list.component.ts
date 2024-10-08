import { Component, EventEmitter, Input, Output } from '@angular/core';
import { KanbanList } from '../model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  @Input() list!: KanbanList;
  @Output() readonly addTask = new EventEmitter<void>();
  @Output() readonly titleChanged = new EventEmitter<string>();
  @Output() readonly remove = new EventEmitter<void>();

  constructor() {}

  titleUpdate(newTitle: string): void {
    if (newTitle !== this.list.title) {
      this.titleChanged.emit(newTitle);
    }
  }
}
