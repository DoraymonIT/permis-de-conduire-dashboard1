import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { Router } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { CandidatService } from 'src/app/services/candidat.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(private router: Router) {}
  ngOnInit(): void {
    initFlowbite();
  }
  login() {
    if (this.loginForm.valid) {
      console.warn(this.loginForm.value['email']);
      let email = this.loginForm.value['email'];
      let pass = this.loginForm.value['password'];
      if (email === 'admin@admin.com' && pass === 'admin') {
        localStorage.setItem('userRole', 'admin');

        this.router.navigate(['/dashboard/me']);
      } else if (email === 'candidate@candidate.com' && pass === 'candidate') {
        localStorage.setItem('userRole', 'candidate');

        this.router.navigate(['/dashboard/my-exam']);
      } else {
        alert(
          'Enter the credentials mentionned in the bottom of the form , please'
        );
      }
    } else {
      alert('Enter the credentials , please');
    }
  }
}
