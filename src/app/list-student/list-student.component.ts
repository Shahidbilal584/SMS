import { Component } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent {

constructor( private student:StudentService){}

studentList:any=[];

dtOptions:DataTables.Settings = {};
ngOnInit(): void{
  this.dtOptions={
    pagingType:'full_numbers',
    pageLength:5,
    lengthMenu:[5,10,15,50],
    processing:true
  },
  this.student.getStudents().subscribe((list) =>{

    console.log(list)
    this.studentList=list;
  });
}

deleteStudent(student_id: any){
  this.student.deleteStudent(student_id).subscribe((result) =>{
//console.log(result);
this.ngOnInit();
  });
}
}
