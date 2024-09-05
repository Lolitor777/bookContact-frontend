import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import  DashboardComponent  from '../components/dashboard/dashboard.component';
import LoginComponent from '../components/auth/login/login.component';
import { SharedModule } from '../shared.module';
import { AuthGuard } from './core/guards/auth.guard';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterOutlet, DashboardComponent, LoginComponent, SharedModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'frontend';
}
