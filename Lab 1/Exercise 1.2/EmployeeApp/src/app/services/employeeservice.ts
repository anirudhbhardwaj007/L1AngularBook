import { Injectable } from '@angular/core';
import { Employee } from '../model/employee';

@Injectable()
export class EmployeeService{

 store=[
   new Employee(2,'krishna',10,"C++"),
   new Employee(1,'anirudh',20,"Java")
];   
 
  addEmployee(emp:Employee):void{
   this.store.push(emp);
  }
  updateEmployee(id:number):void{
    let foundIndex=-1;
    for(let i=0;i<this.store.length;i++){
      let emp=this.store[i];
      if(emp.empId===id){
        foundIndex=i;
        break;
      }
    }
    if(foundIndex<0){
      return;
    }
    this.store.sort();
  }

  removeEmployeeById(id:number){
    let foundIndex=-1;
    for(let i=0;i<this.store.length;i++){
      let emp=this.store[i];
      if(emp.empId===id){
        foundIndex=i;
        break;
      }
    }
    if(foundIndex<0){
      return;
    }
    this.store.splice(foundIndex,1);

  }

  fetchAllEmployees(): Employee[]{
      return this.store;
  }


}