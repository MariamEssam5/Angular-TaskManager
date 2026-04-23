import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Auth } from '../../services/auth';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
router=inject(Router);
authservice=inject(Auth);
 onSubmit(loginForm: any) {
    if (loginForm.valid) {
            console.log("user Data: ", loginForm.value);
      const username = loginForm.value.username.trim();
      const password = loginForm.value.password.trim();
      
      

      this.authservice.login(username, password).subscribe({
        next: (users) => {
          console.log("server users", users);
          if (users.length > 0) {
            localStorage.setItem('username', users[0].username);
            Swal.fire('Success', 'Welcome back', 'success');
            this.router.navigate(['/tasks']);
          } else {
            Swal.fire({
              title: 'User not found!',
              text: 'Invalid username or password .',
              icon: 'error',
              showCancelButton: true, 
              confirmButtonText: 'Go to Sign Up',
              cancelButtonText: 'Try Again'
            }).then((result) => {
              if (result.isConfirmed) {
                this.router.navigate(['/signup']); 
              }
            });
          }
        }
      });
    }
  }

}
