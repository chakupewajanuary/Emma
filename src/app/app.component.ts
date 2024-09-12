import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { KaribuComponent } from './components/karibu/karibu.component';
// import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule,HttpClientModule,KaribuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
[x: string]: any;
  // title = 'Emma';
  designationList:any [] = [];
  roleList:any [] = [];

    stepsList: any[] = [
    { stepName: 'Basic Details', isCompleted: false },
    { stepName: 'Skills', isCompleted: false },
    { stepName: 'Experience', isCompleted: false },
  ];

  activeStep: any = this.stepsList[0];
    // value to store percentage for complition
  stepperCompletionValue:number=8;
  //object
  employeeObj: any = {
  "roleId": 0,
  "userName": "string",
  "empCode": "string",
  "empId": 0,
  "empName": "string",
  "empEmailId": "string",
  "empDesignationId": 0,
  "empContactNo": "string",
  "empAltContactNo": "string",
  "empPersonalEmailId": "string",
  "empExpTotalYear": 0,
  "empExpTotalMonth": 0,
  "empCity": "string",
  "empState": "string",
  "empPinCode": "string",
  "empAddress": "string",
  "empPerCity": "string",
  "empPerState": "string",
  "empPerPinCode": "string",
  "empPerAddress": "string",
  "password": "string",
    ErpEmployeeSkills: [],
    ErmEmpExperiences: [],
  };
  // ErpEmployeeSkills: any = {
  //   "empSkillId": 0,
  //   "empId": 0,
  //   "skill": "string",
  //   "totalYearExp": 0,
  //   "lastVersionUsed": "string"
  // };
  // ErmEmpExperiences: any = {
  //     "empExpId": 0,
  //     "empId": 0,
  //     "companyName": "string",
  //     "startDate": "2024-09-09T06:19:28.800Z",
  //     "endDate": "2024-09-09T06:19:28.800Z",
  //     "designation": "string",
  //     "projectsWorkedOn": "string"
  // };

  setActiveStep(activeStep: any) {
    this.activeStep = activeStep;
  }
  addSkills(){
    const skillObj={
      "empSkillId": 0,
      "empId": 0,
      "skill": "string",
      "totalYearExp": 0,
      "lastVersionUsed": "string"
    };
    console.log(skillObj);
    this.employeeObj.ErpEmployeeSkills.unshift(skillObj);
    console.log(this.employeeObj.ErpEmployeeSkills)
  }
  addExp(){
    const expObj={
        "empExpId": 0,
        "empId": 0,
        "companyName": "string",
        "startDate": "2024-09-09T06:19:28.800Z",
        "endDate": "2024-09-09T06:19:28.800Z",
        "designation": "string",
        "projectsWorkedOn": "string"
    };
    console.log(expObj);
    this.employeeObj.ErmEmpExperiences.unshift(expObj);
    console.log( this.employeeObj.ErmEmpExperiences);
    // this.cdr.detectChanges();    
  }
  loadDesignations(){
    this.http.get("https://freeapi.gerasim.in/api/EmployeeApp/GetAllDesignation").subscribe((res:any)=>{
      this.designationList=res.data;
      // console.log(this.designationList);
    })
  }
  loadRoleId(){
    this.http.get("https://freeapi.gerasim.in/api/EmployeeApp/GetAllRoles").subscribe((res:any)=>{
      this.roleList=res.data;
      // console.log(this.roleList);
    })
  }
  gotoStep2(){
    const currentStep=this.stepsList.find(m=>m.stepName==this.activeStep.stepName);
    currentStep.isCompleted=true;
    this.activeStep=this.stepsList[1];
    this.stepperCompletionValue=50;
  }
  gotoStep3(){
    const currentStep=this.stepsList.find(m=>m.stepName==this.activeStep.stepName);
    currentStep.isCompleted=true;
    this.activeStep=this.stepsList[2];
    this.stepperCompletionValue=100;
   }

  //  saveEmployee() {
  //   debugger;
  //   console.log(this.employeeObj);
  
  //   this.http.post("https://freeapi.gerasim.in/api/EmployeeApp/CreateNewEmployee", this.employeeObj)
  //     .subscribe(
  //       (res: any) => {
  //         if (res.result) {
  //           alert('Employee Create Success');
  //         } else {
  //           alert(res.message || 'An error occurred while creating the employee');
  //         }
  //       },
  //       (error) => {
  //         // Error handler to catch network issues or invalid requests
  //         console.error('Error posting employee:', error);
  //         alert('Failed to create employee. Please try again.');
  //       }
  //     );
  // }
  

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

  constructor(private http:HttpClient){}
  ngOnInit(): void {
    this.loadDesignations() ;
    this.loadRoleId()
  }
 
}

