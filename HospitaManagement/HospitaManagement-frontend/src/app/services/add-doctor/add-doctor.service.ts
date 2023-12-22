import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Doctor } from './doctor';

@Injectable({
  providedIn: 'root',
})
export class AddDoctorService {
  constructor(private http: HttpClient) {}
  private baseURL = "http://localhost:8080/api/v1/addDoctor";
  // add user
  public addDoctor(Doctor: any) {
    return this.http.post(`${this.baseURL}`, Doctor); // Use backticks for string interpolation
  }
}
