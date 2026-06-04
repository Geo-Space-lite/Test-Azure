import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

export interface Task {
  id: number;
  text: string;
  done: boolean;
}

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  newTaskText = '';
  private nextId = 1;

  tasks: Task[] = [
    { id: this.nextId++, text: 'Learn Angular basics', done: false },
    { id: this.nextId++, text: 'Build a small app', done: false }
  ];

  get activeCount(): number {
    return this.tasks.filter(t => !t.done).length;
  }

  get allDone(): boolean {
    return this.tasks.length > 0 && this.activeCount === 0;
  }

  addTask(): void {
    const text = this.newTaskText.trim();
    if (!text) {
      return;
    }
    this.tasks = [...this.tasks, { id: this.nextId++, text, done: false }];
    this.newTaskText = '';
  }

  toggleTask(task: Task): void {
    task.done = !task.done;
  }

  removeTask(id: number): void {
    this.tasks = this.tasks.filter(t => t.id !== id);
  }

  clearCompleted(): void {
    this.tasks = this.tasks.filter(t => !t.done);
  }
}
