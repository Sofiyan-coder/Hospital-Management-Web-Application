import { Component, OnInit } from '@angular/core';
import { AddDoctorService } from '../services/add-doctor/add-doctor.service';

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.css']
})
export class AddDoctorComponent implements OnInit {

  constructor(private adddoctorService: AddDoctorService) { }

  ngOnInit(): void {
  }

  public doctor ={ 
    name:'',
    age:'',
    gender:'',
    specialist:''
    
  }


  formSubmit() {
    console.log(this.doctor);
   


     // add user: userservice
  this.adddoctorService.addDoctor(this.doctor).subscribe(
    (data) =>{
      // success
      console.log(data);
      alert('success');
    },
    (error) =>{
      // error
      console.log(error);
      alert('something went wrong')
    }
  )

}
}
