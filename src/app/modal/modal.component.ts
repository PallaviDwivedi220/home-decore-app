import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserLoginComponent } from '../user-login/user-login.component';
import { UserRegistrationComponent } from '../user-registration/user-registration.component';

@Component({
  selector: 'app-modal',
  standalone: true,
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
  imports: [UserLoginComponent, UserRegistrationComponent, CommonModule]
})
export class ModalComponent {

}
 