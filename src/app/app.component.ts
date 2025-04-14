import { Component, OnInit, ViewEncapsulation, NgZone } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CredentialResponse, PromptMomentNotification } from 'google-one-tap';

import { HeaderComponent } from './header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
//import { ModalComponent } from './modal/modal.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeaderComponent,
    ReactiveFormsModule,
    //ModalComponent,
    FooterComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit{
  title = 'home-decore-app';
  router: any;
  constructor(private ngZone: NgZone) {}
  handleCredentialResponse(response: CredentialResponse) {
    // Decoding  JWT token...
      let decodedToken: any | null = null;
      try {
        decodedToken = JSON.parse(atob(response?.credential.split('.')[1]));
      } catch (e) {
        console.error('Error while trying to decode token', e);
      }
      console.log('decodedToken', decodedToken);
    }

  ngOnInit(): void {
    // @ts-ignore
    window.onGoogleLibraryLoad = () => {
      console.log('Google\'s One-tap sign in script loaded!');

      // @ts-ignore
      google.accounts.id.initialize({
        // Ref: https://developers.google.com/identity/gsi/web/reference/js-reference#IdConfiguration
        client_id: 'XXXXXXXX',
        callback: this.handleCredentialResponse.bind(this), // Whatever function you want to trigger...
        auto_select: true,
        cancel_on_tap_outside: false
      });

      // OPTIONAL: In my case I want to redirect the user to an specific path.
      // @ts-ignore
      google.accounts.id.prompt((notification: PromptMomentNotification) => {
        console.log('Google prompt event triggered...');

        if (notification.getDismissedReason() === 'credential_returned') {
          this.ngZone.run(() => {
            this.router.navigate(['myapp/somewhere'], { replaceUrl: true });
            console.log('Welcome back!');
          });
        }
      });
    };
  }
  
}
