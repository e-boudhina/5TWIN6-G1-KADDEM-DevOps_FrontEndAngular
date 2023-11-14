import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {EtudiantService} from "../../../Service/etudiant.service";

@Component({
  selector: 'app-add-etudiant',
  templateUrl: './add-etudiant.component.html',
  styleUrls: ['./add-etudiant.component.css']
})
export class AddEtudiantComponent implements OnInit {

  studentForm: FormGroup; // Create a form group for capturing post data
  options: string[] = ['GAMIX', 'SE', 'SAE', 'INFINI', 'TWIN'];
  selectedOption:  string =''; // Set the default value

  constructor(private http: HttpClient, private formBuilder: FormBuilder,private studentService: EtudiantService, private router: Router ) { }

  ngOnInit(): void {
    this.studentForm = this.formBuilder.group({
      firstname: [''],
      lastname: ['' ],
      option: [''],
    });
  }

  // Function to handle form submission
  onSubmit() {
    if (this.studentForm.valid) {
      // Prepare the post data object
      const studentData = {
        prenomE: this.studentForm.value.firstname,
        nomE: this.studentForm.value.lastname,
        op: this.studentForm.value.option
      };

      // @ts-ignore
      this.studentService.createStudent(studentData)
        .subscribe(response => {
          console.log('Student Created:', response);
          //window.location.reload();
          this.router.navigate(['/student']);
        });
    }
  }
  onOptionChange(value: string) {
    this.selectedOption = value;
    console.log('Selected Option:', this.selectedOption);
  }
}
