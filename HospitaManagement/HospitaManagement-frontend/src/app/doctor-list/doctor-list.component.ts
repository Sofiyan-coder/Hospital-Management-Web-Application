import { Component, OnInit } from '@angular/core';
import { Doctor } from '../doctor';
import { DoctorService } from '../doctor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.css']
})
export class DoctorListComponent implements OnInit {

  doctors: Doctor[];
  constructor(private doctorService: DoctorService,private router: Router) { }

  ngOnInit(): void {
    this.getDoctors();
  }


  private getDoctors(){
    this.doctorService.getDoctorsList().subscribe(data => {
      this.doctors = data;
    })
  }



  openAddDoctorPage() {
    this.router.navigate(['/add-doctor']);
  }
}
