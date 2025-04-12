import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss'],
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule
  ]
})
export class UserLoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: [
        '',
        [Validators.required, Validators.email], // Email validation
      ],
      password: [
        '',
        [Validators.required, Validators.minLength(6)], // Password validation
      ],
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      console.log('Login Data:', this.loginForm.value);
      // Add your login logic here
    } else {
      console.log('Form is invalid');
    }
  }

  // Helper method to access form controls in the template
  get f() {
    return this.loginForm.controls;
  }
}