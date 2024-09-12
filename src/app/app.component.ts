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
      console.log(this.designationList);
    })
  }
  loadRoleId(){
    this.http.get("https://freeapi.gerasim.in/api/EmployeeApp/GetAllRoles").subscribe((res:any)=>{
      this.roleList=res.data;
      console.log(this.roleList);
    })
  }
  gotoStep2(){
    const currentStep=this.stepsList.find
  }


  saveEmployee(){
    this.http.post("https://freeapi.gerasim.in/api/EmployeeApp/CreateNewEmployee",this.employeeObj).subscribe((res:any)=>{
      if(res.result){
        alert('Employee Create Success');
      }
      else{
        alert('res.massage')
      }
    })
  }

  constructor(private http:HttpClient){}
  ngOnInit(): void {
    this.loadDesignations() ;
    this.loadRoleId()
  }
 
}
// private cdr: ChangeDetectorRef
