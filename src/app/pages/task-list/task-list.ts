import { Component, inject, signal, computed } from '@angular/core'; 
import { TaskService } from '../../services/task'; 
import { DatePipe } from '@angular/common';
import { RouterLink } from "@angular/router";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [DatePipe, RouterLink],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css'
})
export class TaskList   {
 private taskService= inject(TaskService);
 alltasks=signal<any[]>([]);
 currentTab=signal<string>('All');
 editingTaskId=signal<string|null>(null);
 displayedTasks=computed(()=>{
  const tab=this.currentTab();
  const tasks=this.alltasks();
   if(tab==="Done"){
return tasks.filter((t: any) => t.isDone);
  }
  else if(tab==="Undone"){
     return tasks.filter((t:any)=>!t.isDone);
     }
     else{
      return [...tasks];
     }
    });

    ngOnInit()
    {
      this.loadData();
    }
    loadData(){
      const currentUser = localStorage.getItem('username');
      if(currentUser){

        this.taskService.getAllTasks(currentUser).subscribe({
        next:(data)=>{
          this.alltasks.set(data);

        },
        error:(err)=>console.error("Error getting tasks:", err)
        
      });
      }

      
    }

 
  deleteTask(id: string) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to get this task back",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#dc3545', 
      cancelButtonColor: '#6c757d', 
      confirmButtonText: 'Yes, delete it'
    }).then((result) => {
      if (result.isConfirmed) {
        this.taskService.deleteTask(id).subscribe({
          next: () => {
            this.alltasks.update((tasks) => tasks.filter(t => t.id !== id));
            
            Swal.fire({
              title: 'Deleted!',
              text: 'Your task has been deleted.',
              icon: 'success',
              timer: 1500,
              showConfirmButton: false
            });
          }
        });
      }
    });
  }


  saveEdit(task: any, newTitle: string, newDate: string, newPriority: string, newCategory: string) {
    const updatedTask = { 
      ...task, title: newTitle, dueDate: newDate, priority: newPriority, category: newCategory 
    };

    this.taskService.updateTask(task.id, updatedTask).subscribe({
      next: (res) => {
        this.alltasks.update((tasks) => tasks.map(t => t.id === task.id ? res : t));
        this.editingTaskId.set(null); 

        Swal.fire({
          title: 'Updated!',
          text: 'Task updated successfully ',
          icon: 'success',
          timer: 1500,
          showConfirmButton: false
        });
      }
    });
  }

    toggleDone(task:any){
      const updatedTask={...task,isDone:!task.isDone};
      this.taskService.updateTask(task.id,updatedTask).subscribe({
        next:(res)=>{
          this.alltasks.update((tasks)=>{
            return tasks.map(t=>t.id === task.id ? res : t);
          })
        }
      })
    }
    startEditing(taskId:string){
      this.editingTaskId.set(taskId);
    }
    cancelEditing(){
      this.editingTaskId.set(null);
    }

  
  changeTab(tab:string){
    this.currentTab.set(tab);

  }

}