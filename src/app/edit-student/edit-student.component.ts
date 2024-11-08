
import { Component } from '@angular/core';
import{FormGroup,FormControl} from '@angular/forms';
import{StudentService}from '../student.service'
import {ActivatedRoute}from '@angular/router';
@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent {

constructor(private student:StudentService,private route:ActivatedRoute){}


editStudent=new FormGroup({
  name: new FormControl(''),
  email: new FormControl('')
});


massage: boolean=false;

ngOnInit(): void {
  //console.log(this.route.snapshot.params['id']);
  this.student.getStudentById(this.route.snapshot.params['id']).subscribe((result:any )=>
  
  {
//  console.log(result);
   this.editStudent=new FormGroup({
      name: new FormControl(result['name']),
      email: new FormControl(result['email'])
    });
  });
}

upDateStudent(){
  //console.log(this.editStudent.value);
  this.student.updateStudent(this.route.snapshot.params['id'],this.editStudent.value).subscribe((result :any) =>{
   // console.log(result);

    this.massage=true;
    this.editStudent.reset({});

  });

}

  removeMassage(){
    this.massage=false;
  }

}








