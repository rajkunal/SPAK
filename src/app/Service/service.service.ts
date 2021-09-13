import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Observable, of, throwError } from "rxjs";
import {FormGroup} from '@angular/forms';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  registerUser(data): Observable<any>{
    const url = "http://localhost:3000/api/v1/login/register";
    return this.http.post<any>(url,data); 

  }

  validateUser(data) : Observable<any>{
    const url = "http://localhost:3000/api/v1/login/validateUser";
    return this.http.post<any>(url,data); 

  }

  saveUserTask(data) :Observable<any>{
    const url = "http://localhost:3000/api/v1/task/save";
    return this.http.post<any>(url,data); 
  }

  getTasks()  :Observable<any>{
    let data = {'user':sessionStorage.getItem('user')}
    const url = "http://localhost:3000/api/v1/task/userTasks";
    return this.http.post<any>(url,data); 
  }


}
