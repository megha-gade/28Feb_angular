import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../model/employee';

@Injectable({
  providedIn: 'root'
})
export class EmpServiceService {

baseURL:string;
  constructor(private http:HttpClient) {
this.baseURL='http://localhost:3000/emp'
   }

addEmployee(emp:Employee)
{
return this.http.post(this.baseURL,emp)
}

fetchAllEmployeeList()
{
return this.http.get(this.baseURL);
}


deleteEmployee(id:string)
{
return this.http.delete(this.baseURL+'/'+id)
}


updateEmployee(id: string, data: Employee) {
  return this.http.put<Employee>(`${this.baseURL}/${id}`, data);
}

}
