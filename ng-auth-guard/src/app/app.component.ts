import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { AuthenticateService } from './authenticate.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ng-auth-guard';
  constructor(private serv:AuthenticateService, private router:Router){}
  logOff():void {
    this.serv.logout(); // CLear the Session Storage
    this.router.navigate(['']); // Navigate to Default route
  }
}
