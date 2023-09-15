import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  userRole: string | null = localStorage.getItem('userRole');
  constructor(private router: Router) {}
  logout() {
    localStorage.removeItem('userRole');
    this.router.navigate(['']);
  }
}
