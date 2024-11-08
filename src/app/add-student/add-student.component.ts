import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import { StudentService } from '../student.service'
@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent {

  constructor(private student: StudentService) { }

  addStudent = new FormGroup({
    name: new FormControl(''),
    email: new FormControl('')
  });

  massage: boolean = false;
  OnInit(): void {

  }

  saveStudent() {

    this.student.addStudent(this.addStudent.value).subscribe((result) => {
      this.massage = true;
      this.addStudent.reset({});
    });

  }
  removeMassage() {
    this.massage = false;
  }

}
