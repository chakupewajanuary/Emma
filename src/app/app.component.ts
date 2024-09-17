import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { KaribuComponent } from './components/karibu/karibu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule,HttpClientModule,KaribuComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], // Fixed typo from "styleUrl" to "styleUrls"
})
export class AppComponent implements OnInit {
  designationList: any[] = [];
  roleList: any[] = [];
  stepsList: any[] = [
    { stepName: 'Basic Details', isCompleted: false },
    { stepName: 'Skills', isCompleted: false },
    { stepName: 'Experience', isCompleted: false },
  ];

  activeStep: any = this.stepsList[0];
  stepperCompletionValue: number = 8; // percentage for stepper progress

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
    "empPinCode": "",
    "empAddress": "",
    "empPerCity": "",
    "empPerState": "",
    "empPerPinCode": "",
    "empPerAddress": "",
    "password": "",
    ErpEmployeeSkills: [],
    ErmEmpExperiences: [],
  };

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadDesignations();
    this.loadRoleId();
    console.log('this is my reoleId', this.employeeObj.reoleId)
  }

  setActiveStep(activeStep: any) {
    this.activeStep = activeStep;
  }

  addSkills() {
    const skillObj = {
      "empSkillId": 0,
      "empId": 0,
      "skill": "",
      "totalYearExp": 0,
      "lastVersionUsed": ""
    };
    this.employeeObj.ErpEmployeeSkills.unshift(skillObj);
  }

  addExp() {
    const expObj = {
     
      "empExpId": 0,
      "empId": 0,
      "companyName": "",
      "startDate": "2024-09-13T06:18:51.691Z",
      "endDate": "2024-09-13T06:18:51.691Z",
      "designation": "",
      "projectsWorkedOn": ""
    };
    this.employeeObj.ErmEmpExperiences.unshift(expObj);
  }

  loadDesignations() {
    this.http.get("https://freeapi.gerasim.in/api/EmployeeApp/GetAllDesignation")
      .subscribe((res: any) => {
        this.designationList = res.data;
      });
  }

  loadRoleId() {
    this.http.get("https://freeapi.gerasim.in/api/EmployeeApp/GetAllRoles")
      .subscribe((res: any) => {
        this.roleList = res.data;
      });
  }

  gotoStep2() {
    const currentStep = this.stepsList.find(m => m.stepName == this.activeStep.stepName);
    if (currentStep) {
      currentStep.isCompleted = true;
      this.activeStep = this.stepsList[1];
      this.stepperCompletionValue = 50;
    }
  }

  gotoStep3() {
    const currentStep = this.stepsList.find(m => m.stepName == this.activeStep.stepName);
    if (currentStep) {
      currentStep.isCompleted = true;
      this.activeStep = this.stepsList[2];
      this.stepperCompletionValue = 100;
    }
  }
  saveEmployee(){
    debugger;
    
    this.http.post("https://freeapi.gerasim.in/api/EmployeeApp/CreateNewEmployee",this.employeeObj).subscribe((res:any)=>{
      if(res.result){
        alert('Employee Create Success');
      }
      else{
        alert('res.massage')
      }
      console.log('this is my employee OBJECT', this.employeeObj)
    })
  

  }
 }
