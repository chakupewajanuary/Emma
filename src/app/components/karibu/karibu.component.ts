import { Component, inject, OnInit } from '@angular/core';
import { TestService } from '../../services/test.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-karibu',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './karibu.component.html',
  styleUrl: './karibu.component.css'
})
export class KaribuComponent implements OnInit{
  htpp=inject(TestService);
  gatDate:any[]=[];

  ngOnInit(): void {
    this.htpp.getTodo();
    console.log(this.htpp)
  }
  
}
