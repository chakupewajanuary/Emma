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

  setActiveStep(activeStep:any){
    this.activeStep=activeStep;
  }

  ngOnInit(): void {
    
  }

}
