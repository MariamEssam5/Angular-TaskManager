import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  router = inject(Router);
  get isLoggedIn(){
    return localStorage.getItem('username')!==null;
  }
  //de function b t get el username el 7aly
  get currentUsername(): string | null {
    return localStorage.getItem('username');
  }
  logout()
  {
    localStorage.removeItem('username');
    this.router.navigate(['/login']);
  }
}
