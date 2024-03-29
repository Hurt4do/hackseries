import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { ChaTestComponent } from './test.component';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, ChaTestComponent],
  selector: 'agroi-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'agroi';
}
