import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  signupData = {
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  isLoading = false;

  constructor(private http: HttpClient, private router: Router) {}

  onSubmit(form: NgForm) {
    if (form.invalid) return;

    this.isLoading = true;

    this.http.post('https://localhost:7293/api/Auth/register', this.signupData, {
      responseType: 'text' 
    }).subscribe({
      next: () => {
        alert('Signup successful!');
        this.router.navigate(['/login']);
        this.isLoading = false;
      },
      error: (err) => {
        alert(err.error || 'Signup failed.');
        this.isLoading = false;
      }
    });
  }
}
