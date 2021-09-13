import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../Service/service.service';
import { CommonDataService } from '../shared-Service/common-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 

  constructor(private router: Router,private service : ServiceService,private commonDataService:CommonDataService) { }

  userEmail : any;
  userPwd : any;
  isloggedIn  = false;

  ngOnInit(): void {
    this.commonDataService.setUser('Welcome Guest');
    this.commonDataService.setIsLogged(false);
  }

  userLogin(){
    
    var data = {
      "email" : this.userEmail,
      "pwd" : this.userPwd
    }
    this.service.validateUser(data).subscribe(res=>{
      if(res.status == '200'){
        if(res.data == 'Email not found'){
          alert("No user record found");
          this.isloggedIn = false;
          this.commonDataService.setIsLogged(false);
        }
        else if(res.data == 'Password incorrect'){
          alert("Password incorrect");
          this.isloggedIn = false;
          this.commonDataService.setIsLogged(false);
        }
        else {
          this.isloggedIn = true;
          this.commonDataService.setIsLogged(true);
          sessionStorage.setItem('user',this.userEmail);
          this.commonDataService.setUser(this.userEmail);
          this.router.navigate(['/list']);
        }
      }
      else{
        this.isloggedIn = false;
        this.commonDataService.setIsLogged(false);
        alert("Error occurred");
      }
    })
    
  }

  gotoSignUp(){
    this.router.navigate(['/signup']);
  }
}
