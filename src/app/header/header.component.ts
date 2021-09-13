import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonDataService } from '../shared-Service/common-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user :any;
  isLogged : any = true;

  constructor(private commonDataService:CommonDataService,private router: Router) { }

 

  ngOnInit() {
    if(sessionStorage.getItem('user')!=null){
      this.user = sessionStorage.getItem('user');
    }
    else{
      this.user = 'Welcome Guest';
    }
    this.commonDataService.getUser().subscribe(res=>{
      console.log(res)
      this.user = res;
    });

    this.commonDataService.getIsLogged().subscribe(res=>{
      this.isLogged = res;
    })
  }

  logout(){
    this.commonDataService.setIsLogged(null);
    this.commonDataService.setUser('Welcome Guest');
    sessionStorage.setItem('user','Welcome Guest')
    this.router.navigate(['/login']);
  }

}
