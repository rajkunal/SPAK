import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../Service/service.service';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

   task : any;
   editTrue = [];
   taskList = [];
   taskListComplete = [];

  constructor(private service : ServiceService,private router: Router) { }
 

  ngOnInit(): void {
    if(sessionStorage.getItem('user') == null || sessionStorage.getItem('user') == 'Welcome Guest')
      this.router.navigate(['/login']);
    this.getUserTasks();
  }

  getUserTasks(){
    this.service.getTasks().subscribe(res=>{
      console.log(res);
     
     // res.data[0].taskList;
      if(res && res.data[0] && res.data[0].taskList.length>0){
        let dataAll= res.data[0].taskList
        for(let i=0;i<dataAll.length;i++){
          if(dataAll[i]['completed'] == false){
            this.taskList.push(dataAll[i]);
          }
          else{
            this.taskListComplete.push(dataAll[i]);
          }
          this.editTrue.push(false);
        }
      }
      else{
        this.taskList =[];
        this.taskListComplete =[];
        this.editTrue = [];
      }
      
    })
  }

  addTask(){
   let obj = {'task': '','date_created' : new Date(),'completed':false}
   this.editTrue.unshift(true);
   this.taskList.unshift(obj);
  }

  saveTask(){
    console.log(this.taskList);
    let finalTaskList = [];
    if(this.taskListComplete.length!=0)
    finalTaskList = this.taskList.concat(this.taskListComplete);
    let data = {
      'user' : sessionStorage.getItem('user'),
      'taskList' : finalTaskList
    } 
    this.service.saveUserTask(data).subscribe(res=>{
      this.editTrue.fill(false);
    })

  }

  editTask(i){
    this.editTrue[i] = true;
  }

  deleteTask(i){
    this.taskList.splice(i,1);
    this.saveTask();
  }

  completeTask(i){
    this.taskList[i]['completed'] = true;
    var t = this.taskList[i];
    this.taskList.splice(i,1);
    this.taskListComplete.push(t);
    console.log(this.taskList);
    this.saveTask();
   
  }

  drop(event: CdkDragDrop<string[]>) {
    console.log(this.taskList);
    moveItemInArray(this.taskList, event.previousIndex, event.currentIndex);
    this.saveTask();
  }
  
}
