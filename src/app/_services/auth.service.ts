import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  complaints,
  diagnosisType,
  dosageData,
  durationData,
  frequencyData,
  medicineData, medicineNotes,
  treatmentData
} from "../models/menudata";

const AUTH_API = 'http://localhost:7070/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    var data={
      "userName":username,
      "userPwd":password
    }
    console.log(data);
    return this.http.post(AUTH_API + 'signin', data, {responseType: 'text'});
  }

  register(userData:any): Observable<any> {

    return this.http.post(AUTH_API + 'signup', userData, httpOptions);
  }

  patientRegister(patientData:any): Observable<any> {

    return this.http.post(AUTH_API + 'patients/signup', patientData, httpOptions);
  }

  doctorRegister(doctorData:any): Observable<any> {

    return this.http.post(AUTH_API + 'doctors/signup', doctorData, httpOptions);
  }

  getDoctors():Observable<any>{
    return this.http.get(AUTH_API + 'doctors', httpOptions);
  }
  getPatients():Observable<any>{
    return this.http.get(AUTH_API + 'patients', httpOptions);
  }
  getPatientsByMobileNo(mobileNo:any):Observable<any>{
    return this.http.get(AUTH_API + 'patients/'+mobileNo, httpOptions);
  }

  addDoctorAppointments(appointmentData:any):Observable<any>{
    return this.http.post(AUTH_API + 'appointments', appointmentData, httpOptions);
  }

  getDoctorAppointments(mobileNo:any):Observable<any>{
    return this.http.get(AUTH_API + 'appointments/'+mobileNo,httpOptions);
  }

  addPatientAppointment(appointmentData:any):Observable<any>{
    return this.http.post(AUTH_API + 'patientappointments', appointmentData, httpOptions);
  }

  getAllPatientAppointments():Observable<any>{
    return this.http.get(AUTH_API + 'patientappointments/',httpOptions);
  }

  getPatientAppointmentById(appointmentNo:any):Observable<any>{
    return this.http.get(AUTH_API + 'patientappointments/'+appointmentNo,httpOptions);
  }

  getPatientAppointmentByMobileNo(mobileNo:any):Observable<any>{
    return this.http.get(AUTH_API + 'patientappointmentsmobile/'+mobileNo,httpOptions);
  }
  sendWhatsApp(patientMobileNo:any,treatment:any):void{
    this.http.get("https://wa.me"+"/91"+patientMobileNo+"/?text="+treatment,httpOptions);
  }

  getComplaints():string[]{
    return complaints;
  }
  getDiagnosisTypes():string[]{
    return diagnosisType;
  }

  getTreatmentData():string[]{
    return treatmentData;
  }
  getMedicineData():string[]{
    return medicineData;
  }
  getDosageData():string[]{
    for(let i=10;i<1000;i++){
      dosageData.push(i+"mg");
    }
    dosageData.push("1g");
    return dosageData;
  }
  getFrequencyData():string[]{
    return frequencyData;
  }
  getDurationData():string[]{
    return durationData;
  }
  getMedicineNotes():string[]{
    return medicineNotes;
  }

  addDiagnosis(diagnosisData:any):Observable<any>{
    return this.http.post(AUTH_API + 'diagnosis', diagnosisData, httpOptions);
  }
  addTreatment(treatmentData:any):Observable<any>{
    return this.http.post(AUTH_API + 'treatments', treatmentData, httpOptions);
  }
  addPrescription(prescriptionData:any):Observable<any>{
    return this.http.post(AUTH_API + 'prescriptions', prescriptionData, httpOptions);
  }
}
