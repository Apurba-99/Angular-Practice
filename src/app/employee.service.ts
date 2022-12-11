import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseURL="http://localhost:8070/api/v1/employees";
  private uploadURL="http://localhost:8070/api/v1/upload-file";
  
  constructor(private http:HttpClient) { }

  getEmployeesList():Observable<Employee[]>{
    return this.http.get<Employee[]>(`${this.baseURL}`);
  }

  createEmployee(employee:Employee):Observable<Object>{
    return this.http.post(`${this.baseURL}`,employee);

  }


//correction
upload(file:any){
    const formdata=new FormData();
    formdata.append("files",file,file.name);
    console.log("uploaded");
    console.log(file);
    return this.http.post(this.uploadURL,formdata)
    .subscribe((Response)=>{});
  }


}
