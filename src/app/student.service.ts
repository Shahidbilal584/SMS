import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  url='http://localhost:3000/students';
  constructor(private http: HttpClient) { }

    
  getStudents(){
    return this.http.get(this.url);
    
  }

  addStudent(addRecored:any){
    return this.http.post(this.url,addRecored);
  }

  deleteStudent(id:any){
    return this.http.delete(`${this.url}/${id}`);
  }

  getStudentById(id:number){
    return this.http.get(`${this.url}/${id}`);
  }



  updateStudent(id:Number,data:any){
  
   return this.http.put(`${this.url}/${id}`,data);
   
  }


}
