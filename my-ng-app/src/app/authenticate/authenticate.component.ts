import { Component } from '@angular/core';
import { SecurityInfraService } from '../htppservice/security-infra.service';
import { CategoryModel } from '../models/app.models';
import { AppUser, LoginUser } from '../models/app.security.model';
import { CategoryHttpService } from '../htppservice/category-http.service';

@Component({
  selector: 'app-authenticate',
  standalone: true,
  imports: [],
  templateUrl: './authenticate.component.html',
  styleUrl: './authenticate.component.css'
})
export class AuthenticateComponent {

  categories:Array<CategoryModel>;
  newUser: AppUser;
  authUser: LoginUser;
  message:string;

  constructor(private serv:SecurityInfraService, private catServ:CategoryHttpService) {
    this.categories = new Array<CategoryModel>();
    this.newUser = new AppUser('','','');
    this.authUser = new LoginUser('','');
    this.message = "";
  }


  loginUser():void {
     this.authUser.Email = 'user1@msit.com';
     this.authUser.Password = 'P@ssw0rd_';
     this.serv.authenticateUser(this.authUser)
        .subscribe({
          next:(response)=>{
            // Save the token in Broser's Session Storage
              sessionStorage.setItem('token', response.Token);
              this.message = response.Message;
          },
          error:(err)=>{
            this.message = `Error Occurred ${JSON.stringify(err)}`;
          }
        });
  }
  getCategories():void {
    // Read the Token from SessionStorage
    let token = sessionStorage.getItem('token');
    this.catServ.getData(token)
      .subscribe({
        next:(response)=>{
           this.categories = response.Records
           this.message = response.Message
        },
        error: (err)=>{
          this.message =`Error Occured while reading categories ${JSON.stringify(err)}`
        }
      });
  }

}
