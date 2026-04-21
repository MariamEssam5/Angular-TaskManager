import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
router=inject(Router);// 34an an2l el user b3d el login l home page
onSubmit(form:any)
{
  if(form.valid)
  {
    localStorage.setItem('username',form.value.username);
    this.router.navigate(['/home']);
  }
  else
    {
      alert("please fill the Form Correctly");
    }
}

}
