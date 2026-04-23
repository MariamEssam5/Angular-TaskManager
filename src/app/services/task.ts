import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private http=inject(HttpClient);
  private apiUrl = 'http://localhost:3000/tasks';

  getAllTasks(username:string):Observable<any> {
    return this.http.get<any[]>(`${this.apiUrl}?userName=${username}`);
  }
  addTask(task:any):Observable<any>{
    return this.http.post(this.apiUrl,task)
  }
  updateTask(id:string,task:any):Observable<any>{
    return this.http.put(`${this.apiUrl}/${id}`,task)
  }
  deleteTask(id:string):Observable<any>{
    return this.http.delete(`${this.apiUrl}/${id}`)
  }

}
