import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {EtudiantService} from "../../../Service/etudiant.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-update-etudiant',
  templateUrl: './update-etudiant.component.html',
  styleUrls: ['./update-etudiant.component.css']
})
export class UpdateEtudiantComponent implements OnInit {
  studentForm: FormGroup;
  studentId: string | null;

  constructor(private http: HttpClient, private formBuilder: FormBuilder,private studentService: EtudiantService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.studentForm = this.formBuilder.group({
      firstname: [''],
      lastname: [''],
      op: [''],
    });
    this.studentId = this.route.snapshot.paramMap.get('studentId');
    this.fetchStudentDetails();

  }
  fetchStudentDetails() {
    // Fetch student details from the server based on student ID
    // Update the form values with the fetched data
    const studentId = this.route.snapshot.paramMap.get('studentId');
    this.studentService.getStudentById(studentId).subscribe(
      (studentDetails) => {
        this.studentForm.patchValue({
          firstname: studentDetails.prenomE,
          lastname: studentDetails.nomE,
          op: studentDetails.op,
        });
      },
      (error) => {
        console.error('Error fetching student details:', error);
      }
    );
  }
  onSubmit() {
    if (this.studentForm.valid) {
      // const studentId = // Get the student ID from somewhere (e.g., route parameter)

      // Prepare the update data object
      const updateData = {
        idEtudiant: this.studentId,
        prenomE: this.studentForm.value.firstname,
        nomE: this.studentForm.value.lastname,
        op: this.studentForm.value.op,
      };

      // @ts-ignore
      this.studentService.updateStudent(updateData).subscribe(
        (response) => {
          console.log('Student Updated:', response);
          this.router.navigate(['/student']);
        },
        (error) => {
          console.error('Error updating student:', error);
        }
      );
    }
  }
}
