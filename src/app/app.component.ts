import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  // title = 'Emma';
  stepsList:any []=[
    {stepName:"Basic Details",isCompleted:false},
    {stepName:"Skills",isCompleted:false},
    {stepName:"Experience",isCompleted:false}
  ];

  activeStep:any=this.stepsList[0];
  //object
  employeeObj:any={
    "emId":0,
    "empName":'',
    "empEmailId":0,
    "empDesignationlId":0,
    "empContactNo":'',
    "empAltenativeContact":'',
    "empPersonalEmailId":'',
    "empTotalExpYear":'',
    "empTotalExpMonth":'',
    "empCity":'',
    "empState":'',
    "empPincode":'',
    "empAddress":'',
    "empPerCity":'',
    "empPerState":'',
    "empPerPinecode":'',
    "Password":'',
    erpEmployeeSkills:[],
    erpEmployeeExperience:[]  
  }
  erpEmployeeSkills:any={
    "empSkillId":0,
    "empId":0,
    "skills":'string',
    "TotalYearExp":0,
    "LastVersionUsed":'string'
  }
  erpEmployeeExperience:any={
    "empExpId":0,
    "empId":0,
    "companyName":'string',
    "StartDate":'2024-03-15 ',
    "EndDate":'',
    "designation":'string',
    "ProjectWorkedOn":'string'
  }

  setActiveStep(activeStep:any){
    this.activeStep=activeStep;
  }

  ngOnInit(): void {
    
  }

}
