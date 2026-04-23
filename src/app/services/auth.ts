import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  private http= inject(HttpClient);
  private apiUrl = 'http://localhost:3000/users';
  checkEmail(email:string):Observable<any[]>{
      const params = new HttpParams().set('email', email);

    return this.http.get<any[]>(`${this.apiUrl}?email=${email}`)
  }
  register(user:any):Observable<any>{
    return this.http.post(this.apiUrl,user);
  }
  
 login(username: string, password: string): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map((users) => {
        return users.filter(u => u.username === username && u.password === password);
      })
    );
  }
}
