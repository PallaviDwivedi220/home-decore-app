import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidationErrors, ReactiveFormsModule} from '@angular/forms';

// Custom validator function for password matching
function passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');

  if (password && confirmPassword && password.value !== confirmPassword.value) {
    return { passwordMismatch: true };
  }
  return null;
}

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class UserRegistrationComponent implements OnInit {
  registrationForm!: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      passwordGroup: this.fb.group({
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required]
      }, { validator: passwordMatchValidator }), // Apply custom validator to the group
      phone: ['', [Validators.pattern('^[0-9]{10}$')]], // Example: 10-digit number
      gender: ['male'], // Default value
      terms: [false, Validators.requiredTrue]
    });
  }

  // Getter methods for easy access to form controls in the template
  get f() { return this.registrationForm.controls; }
  get passwordGroup() { return this.registrationForm.controls['passwordGroup'] as FormGroup; }

  onSubmit(): void {
    this.submitted = true;

    // Stop here if the form is invalid
    if (this.registrationForm.invalid) {
      return;
    }

    // Display form values on success
    console.log('Form submitted!', this.registrationForm.value);
    // In a real application, you would send this data to a backend service
  }

  onReset(): void {
    this.submitted = false;
    this.registrationForm.reset();
  }
}