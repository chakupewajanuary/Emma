import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  // title = 'Emma';
  stepsList: any[] = [
    { stepName: 'Basic Details', isCompleted: false },
    { stepName: 'Skills', isCompleted: false },
    { stepName: 'Experience', isCompleted: false },
  ];

  activeStep: any = this.stepsList[0];
  //object
  employeeObj: any = {
    "roleId": 0,
    "userName": "",
    "empCode": "",
    "empId": 0,
    "empName": "",
    "empEmailId": "",
    "empDesignationId": 0,
    "empContactNo": "",
    "empAltContactNo": "",
    "empPersonalEmailId": "",
    "empExpTotalYear": 0,
    "empExpTotalMonth": 0,
    "empCity": "",
    "empState": "",
    "empPinCode":"",
    "empAddress": "",
    "empPerCity": "",
    "empPerState": "",
    "empPerPinCode": "",
    "empPerAddress": "",
    "password": "",
    ErpEmployeeSkills: [],
    ErmEmpExperiences: [],
  };
  ErpEmployeeSkills: any = {
    "empSkillId": 0,
    "empId": 0,
    "skill": "string",
    "totalYearExp": 0,
    "lastVersionUsed": "string"
  };
  ErmEmpExperiences: any = {
"empExpId": 0,
      "empId": 0,
      "companyName": "string",
      "startDate": "2024-09-09T06:19:28.800Z",
      "endDate": "2024-09-09T06:19:28.800Z",
      "designation": "string",
      "projectsWorkedOn": "string"
  };

  setActiveStep(activeStep: any) {
    this.activeStep = activeStep;
  }

  ngOnInit(): void {}
}
