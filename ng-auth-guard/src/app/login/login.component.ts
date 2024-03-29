import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../authenticate.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Login } from '../login';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
    user:Login;
    returnUrl: string;
   constructor(private serv:AuthenticateService, private router:Router, private act: ActivatedRoute){
    this.user = new Login('','');
    this.returnUrl = '';
   }
  ngOnInit(): void {
    this.returnUrl = this.act.snapshot.queryParams['returnUrl'] || '/';
  }

   login():void {
      this.serv.authUser(this.user)
      .subscribe({
          next:(resp)=>{
          //  if(this.serv.currentUserInfo.IsLoggedIn){
              alert(`Success in Login ${this.returnUrl}`);
              this.router.navigate([this.returnUrl]);
            //}
          }
      });
   }
}
