import { Component, OnInit } from '@angular/core';
import {User} from "../../../Models/user.model";
import {UserService} from "../../../Service/user.service";
import {Etudiant} from "../../../Models/etudiant";
import {EtudiantService} from "../../../Service/etudiant.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-index-etudiant',
  templateUrl: './index-etudiant.component.html',
  styleUrls: ['./index-etudiant.component.css']
})
export class IndexEtudiantComponent implements OnInit {

  students: Etudiant[] = [];

  constructor(private studentService: EtudiantService, private router: Router) { }

  ngOnInit(): void {
    this.loadStudents();
  }
  private loadStudents(): void {

    this.studentService.getStudents().subscribe(data => {
      this.students = data;
      console.log(this.students); // Log the data inside the subscription callback
    });
  }

  // @ts-ignore
  deleteStudent(id: number): any {
    this.studentService.deleteStudnet(id).subscribe(
      (msg) => {
        this.students = this.students.filter(student => student.idEtudiant !== id);
        console.log(msg.message)
      },
      (error) => {
        console.error('Error deleting post:', error);
        this.students = this.students.filter(student => student.idEtudiant !== id);
      }
    );
  }

  updateStudent(studentId: any) {
    this.router.navigate(['/updateStudent', studentId]);

  }
}
