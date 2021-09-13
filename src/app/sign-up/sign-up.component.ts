import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServiceService } from '../Service/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private http: HttpClient,private service : ServiceService,private router: Router) { }

  userEmail;
  userPwd;

  ngOnInit(): void {
  }

  addNewUser(){
   var data = {
     "userEmail" : this.userEmail,
     "userPwd" : this.userPwd
   }

   console.log(data);

   this.service.registerUser(data).subscribe(res=>{
      console.log(res);
      if(res.status == '200' && res.data!='User already exists!')alert("Registered Successfully")
      else  if(res.status == '200' && res.data=='User already exists!')alert("User already exists!")
      else alert("Registration Unsuccessfull")
   })


  }

  goToLogin(){
    this.router.navigate(['/login']);
  }

}
