import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import Swal from 'sweetalert2';
import { Auth } from '../../services/auth';

@Component({
  selector: 'app-signup',
  imports: [ReactiveFormsModule,RouterLink],
  templateUrl: './signup.html',
  styleUrl: './signup.css',
})
export class Signup {
  private authService=inject(Auth);
private router = inject(Router);

SignupForm=new FormGroup({
  username: new FormControl('',[Validators.required,Validators.minLength(3)]),
  email:new FormControl('',[Validators.required,Validators.email]),
  password:new FormControl('',[Validators.required,Validators.minLength(6)])
})

onSubmit()
{
  if(this.SignupForm.valid){
    const email=this.SignupForm.value.email!;
    this.authService.checkEmail(email).subscribe({
        next: (users) => {
          if (users.length > 0) {
            Swal.fire({
              title: 'Oops!',
              text: 'This email is already registered. Please login.',
              icon: 'error',
              confirmButtonText: 'Go to Login'
            }).then(() => this.router.navigate(['/login'])); 
            
          } else {
            this.authService.register(this.SignupForm.value).subscribe({
              next: () => {
                localStorage.setItem('username', this.SignupForm.value.username!);
                
                Swal.fire({
                  title: 'Welcome!',
                  text: 'Account created successfully ',
                  icon: 'success',
                  timer: 1500,
                  showConfirmButton: false
                });
                
                this.router.navigate(['/tasks']); 
              }
            });
          }
        }
      });
    }
  }
}
