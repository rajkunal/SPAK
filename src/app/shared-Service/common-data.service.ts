import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonDataService {

  user : Subject<any[]> = new Subject<any[]>();
  isloggedIn : Subject<any[]> = new Subject<any[]>();
  constructor() { }

  public getUser(): Observable<any>{
    console.log('testlog');
    return this.user.asObservable();
  }

  public setUser(user){
    console.log(user);
    this.user.next(user);
  }

  public getIsLogged() : Observable<any>{
    console.log('testlog1');
    return this.isloggedIn.asObservable();
  }

  public setIsLogged(val){
    console.log(val);
    this.isloggedIn.next(val);
  }

}
