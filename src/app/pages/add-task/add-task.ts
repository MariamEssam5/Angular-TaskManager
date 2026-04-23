import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { TaskService } from '../../services/task';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './add-task.html',
  styleUrl: './add-task.css',
})
export class AddTask {
  private taskService = inject(TaskService);
  private router = inject(Router);

  taskForm = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(3)]),
    dueDate: new FormControl('', Validators.required),
    priority: new FormControl('High'),
    category: new FormControl('Work'),
  });

  onSubmit() {
    if (this.taskForm.valid) {
      const currentUser = localStorage.getItem('username');
      const newTask = {
        title: this.taskForm.value.title,
        dueDate: this.taskForm.value.dueDate,
        priority: this.taskForm.value.priority,
        category: this.taskForm.value.category,
        isDone: false,
        userName:currentUser
      };

      this.taskService.addTask(newTask).subscribe({
        next: () => {
        
          Swal.fire({
            title:'Good Job',
            text:'Task added successfully',
            icon:'success',
            timer:2000,
            showConfirmButton:false
          }

          )
          // console.log("Task added successfully");
          this.router.navigate(['/tasks']);
        },
        error: (err) => console.error('Error adding task:', err),
      });
    }
  }
}
