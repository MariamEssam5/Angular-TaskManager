import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  imports: [ReactiveFormsModule],
  templateUrl: './signup.html',
  styleUrl: './signup.css',
})
export class Signup {
router = inject(Router);

SignupForm=new FormGroup({
  username: new FormControl('',[Validators.required,Validators.minLength(3)]),
  email:new FormControl('',[Validators.required,Validators.email]),
  password:new FormControl('',[Validators.required,Validators.minLength(6)])
})

onSubmit()
{
  if(this.SignupForm.valid){
    const newUsernm=this.SignupForm.value.username;
    if(newUsernm)
    {
      localStorage.setItem('username',newUsernm);
    }
    this.router.navigate(['/home']);
  }
}
}
