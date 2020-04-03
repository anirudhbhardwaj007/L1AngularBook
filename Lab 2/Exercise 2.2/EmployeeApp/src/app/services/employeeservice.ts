import { Injectable } from '@angular/core';
import { Employee } from '../model/employee';

@Injectable()
export class EmployeeService{

 store=[
   new Employee(1,'anirudh',10,"Python"),
   new Employee(2,'shashank',20,"C++"),
   new Employee(3,'srasthi',30,"Angular"),
   new Employee(4,'navdeep',40,"Spring boot"),
   new Employee(5,'krishna',50,"Java")
];   
 
 

  fetchAllEmployees(): Employee[]{
      return this.store;
  }


}