import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationStart, NavigationEnd,Router} from "@angular/router";
import {AuthService} from "../../_services/auth.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {MatSelectChange} from "@angular/material/select";
import {MatDialog} from "@angular/material/dialog";
import {DiagnosisdialogComponent} from "./diagnosisdialog/diagnosisdialog.component";
import {ThemePalette} from "@angular/material/core";
import {ProgressSpinnerMode} from "@angular/material/progress-spinner";
import {MatInput} from "@angular/material/input";
// @ts-ignore
import pdfMake from "pdfmake/build/pdfmake";
// @ts-ignore
import pdfFonts from "pdfmake/build/vfs_fonts";
import {filter, take} from "rxjs/operators";
import {ToastrService} from "ngx-toastr";
pdfMake.vfs = pdfFonts.pdfMake.vfs;
export interface DialogData {
  id: number;
  opted: string;
}

@Component({
  selector: 'app-diagnosis',
  templateUrl: './diagnosis.component.html',
  styleUrls: ['./diagnosis.component.css']
})
export class DiagnosisComponent implements OnInit,AfterViewInit {

  mobileNo:any;
  doctors:any;
   patient:any;
   patientAppointment:any[];
   complaints:any;
   diagnosisTypes:any;
   selectedDate:any;
   selectedDoctorMobileNo:any;
   appointmentNo:any;
   selectedTooth:any=[];
   selectedTreatment:any;
   discount:any;
   totalAmount:any;
  newItem: any = {};
  newMedicineItem:any={};
  medicines:Array<any>=[];
  treatmentCosts: Array<any> = [];
  diagnosisType:any;
  searchTxt: any=" ";
  imgPath:any="assets/18-tooth-upper.png";
  csearchTxt: any=" ";
  fqnumbers:number[]=[18,17,16,15,14,13,12,11];
  sqnumbers:number[]=[21,22,23,24,25,26,27,28];
  tqnumbers:number[]=[48,47,46,45,44,43,42,41];
  fthnumbers:number[]=[31,32,33,34,35,36,37,38];
  part1:string="assets/"
  part2:string="-tooth-upper.png"
  part3:string="-tooth-front.png"
  part4:string="-lower-tooth.png"
  part5:string="-lower-front.png"
  treatmentData:any;
  medicineData:any;
  _18upper:string='assets/18-tooth-upper.png';
  _17upper:string='assets/17-tooth-upper.png';
  _16upper:string='assets/16-tooth-upper.png';
  _15upper:string='assets/15-tooth-upper.png';
  _14upper:string='assets/14-tooth-upper.png';
  _13upper:string='assets/13-tooth-upper.png';
  _12upper:string='assets/12-tooth-upper.png';
  _11upper:string='assets/11-tooth-upper.png';

 patientAppointmentFormGroup: FormGroup;
  frequencyData: any;
  dosageData:any;
  durationData:any;
  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'determinate';
  value = 50;
  medicineNoteData: string[];
  selectedNoteData: any;
  loading:any=false;
  constructor(private router:Router, private toaster:ToastrService, private actRoute: ActivatedRoute,private authService:AuthService,
              public formBuilder:FormBuilder,public dialog: MatDialog) {
    this.loading=false;
    this.mobileNo = this.actRoute.snapshot.params.mobileNo;
    console.log(this.mobileNo);
    console.log(this.part1+18+this.part2);
    router.events.pipe(filter(e => e instanceof NavigationStart), take(1))
      .subscribe((e) => {
        this.loading = false;
        //alert('loaded - this fires only once');
      });
    router.events.pipe(filter(e => e instanceof NavigationEnd), take(1))
      .subscribe((e) => {
        this.loading = false;
        //alert('loaded - this fires only once');
      });
    this.patientAppointmentFormGroup = this.formBuilder.group({
      patientMobileNo: ['', Validators.required],
      doctorMobileNo: ['', Validators.required],
      doa: [''],
      chair:[''],
      treatment: [''],
      complaint:[''],
      diagnosisType:[''],
      selectedTooth:[''],
      discount:[''],
      totalAmount:[''],
      newItem:[''],
      selectedMedicine:[''],
      selectedDosage:[''],
      selectedFrequency:[''],
      selectedDuration:[''],
      newMedicine:[],
      treatmentCosts:[],
      medicines:[]

    });
  }

  ngAfterViewInit(): void {
        this.loading=false;
    }



  ngOnInit(): void {
    this.authService.getPatientsByMobileNo(this.mobileNo).subscribe(res=>
    {
      //console.log(res);
      this.patient=res;
    })

   this.loading=false;

    this.authService.getDoctors().subscribe(res=>{
      this.doctors=res;
    })
    this.complaints=this.authService.getComplaints();
    this.diagnosisTypes=this.authService.getDiagnosisTypes();
    this.treatmentData=this.authService.getTreatmentData();
    this.medicineData=this.authService.getMedicineData();
    this.frequencyData=this.authService.getFrequencyData();
    this.dosageData=this.authService.getDosageData();
    this.durationData=this.authService.getDurationData();
    this.medicineNoteData=this.authService.getMedicineNotes();
  }

  getDoctorMobileNo($event: MatSelectChange) {
    this.selectedDoctorMobileNo=$event.value;
  }

  onClick($event: MouseEvent) {
    this.patientAppointmentFormGroup.value.complaint="";
  }

  getDentalChartSelection($event: MatSelectChange) {
    console.log($event.value);
  }


  selected_tooth_upperImage(event:any) {
    console.log(event.target.src);
    event.target.src=this.part1+'selected-'+event.target.id+this.part2;
    const dialogRef = this.dialog.open( DiagnosisdialogComponent, {
      width: '250px',
      data: {id: event.target.id, opted: ''},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      event.target.src=this.part1+result.opted.toLowerCase()+'-'+event.target.id+this.part2;
      this.selectedTooth.push( result.opted.toLowerCase()+'-'+event.target.id+this.part2);
    });


  }

  selected_tooth_frontImage(event: any) {
    console.log(event.target.src);
    event.target.src=this.part1+'selected-'+event.target.id+this.part3;

  }

  selected_lower_toothImage(event: any) {
    console.log(event.target.src);
    event.target.src=this.part1+'selected-'+event.target.id+this.part4;
    const dialogRef = this.dialog.open( DiagnosisdialogComponent, {
      width: '250px',
      data: {id: event.target.id, opted: ''},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      event.target.src=this.part1+result.opted.toLowerCase()+'-'+event.target.id+this.part4;
      this.selectedTooth.push( result.opted.toLowerCase()+'-'+event.target.id+this.part4);

    });

  }

  selected_lower_frontImage(event: any) {
    console.log(event.target.src);
    event.target.src=this.part1+'selected-'+event.target.id+this.part5;
  }

  tooth_upperImage(event: any) {
    console.log(event.target.src);
    event.target.src=this.part1+'selected-'+event.target.id+this.part4;
    const dialogRef = this.dialog.open( DiagnosisdialogComponent, {
      width: '250px',
      data: {id: event.target.id, opted: ''},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      event.target.src=this.part1+result.opted.toLowerCase()+'-'+event.target.id+this.part4;
      this.selectedTooth.push( result.opted.toLowerCase()+'-'+event.target.id+this.part4);

    });

   // event.target.src=this.part1+event.target.id+this.part2;
  }

  tooth_frontImage(event: any) {
    console.log(event.target.src);
    event.target.src=this.part1+event.target.id+this.part3;
    const dialogRef = this.dialog.open( DiagnosisdialogComponent, {
      width: '250px',
      data: {id: event.target.id, opted: ''},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      event.target.src=this.part1+result.opted.toLowerCase()+'-'+event.target.id+this.part3;
      this.selectedTooth.push( result.opted.toLowerCase()+'-'+event.target.id+this.part3);
    });
  }

  lower_frontImage(event: any) {
    console.log(event.target.src);
    event.target.src=this.part1+event.target.id+this.part5;
    const dialogRef = this.dialog.open( DiagnosisdialogComponent, {
      width: '250px',
      data: {id: event.target.id, opted: ''},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      event.target.src=this.part1+result.opted.toLowerCase()+'-'+event.target.id+this.part5;
      this.selectedTooth.push( result.opted.toLowerCase()+'-'+event.target.id+this.part5);
    });
  }

  lower_toothImage(event: any) {
    console.log(event.target.src);
    event.target.src=this.part1+event.target.id+this.part4;
    const dialogRef = this.dialog.open( DiagnosisdialogComponent, {
      width: '250px',
      data: {id: event.target.id, opted: ''},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      event.target.src=this.part1+result.opted.toLowerCase()+'-'+event.target.id+this.part4;
      this.selectedTooth.push( result.opted.toLowerCase()+'-'+event.target.id+this.part4);
    });
  }

  getPatientAppointmentNo() {
    console.log(this.selectedDate);
    this.authService.getPatientAppointmentByMobileNo(this.mobileNo).subscribe(res=>{
      this.patientAppointment=res;
      this.patientAppointment.forEach(appointment=>{
        console.log(appointment);
        console.log(appointment.doa);
        let givenDate = new Date(appointment.doa);
        let selected = new Date(this.selectedDate);
        console.log(givenDate.getDate());
        console.log(selected.getDate());
         if(givenDate.getDate()== selected.getDate()){
         this.appointmentNo=appointment.appointmentId;
         console.log(this.appointmentNo);
        }
      })
    })
  }

  saveExamination() {
    this.isDisabled=true;
    console.log("hi");
    this.patientAppointmentFormGroup.value.patientMobileNo=this.patient.mobileNo;
    this.patientAppointmentFormGroup.value.doctorMobileNo=this.selectedDoctorMobileNo;
    this.patientAppointmentFormGroup.value.doa=this.appointmentNo;
    this.patientAppointmentFormGroup.value.chair=1;
    this.toaster.info("Diagnosis Saved!!!!");

    console.log(this.patientAppointmentFormGroup.value);

  }

  saveDiagnosis() {
    this.isDiagDisabled=true;
    this.patientAppointmentFormGroup.value.patientMobileNo=this.patient.mobileNo;
    this.patientAppointmentFormGroup.value.doctorMobileNo=this.selectedDoctorMobileNo;
    this.patientAppointmentFormGroup.value.doa=this.appointmentNo;
    this.patientAppointmentFormGroup.value.chair=1;
    this.patientAppointmentFormGroup.value.selectedTooth=this.selectedTooth;

    this.toaster.info("Diagnosis Saved!!!!");


    console.log(this.patientAppointmentFormGroup.value);
    var obj={
      patientMobileNo:this.patientAppointmentFormGroup.value.patientMobileNo,
      doctorMobileNo:  this.patientAppointmentFormGroup.value.doctorMobileNo,
      appointmentNo:  this.patientAppointmentFormGroup.value.doa,
      complaints:    this.patientAppointmentFormGroup.value.complaint,
      diagnosisType: this.patientAppointmentFormGroup.value.diagnosisType,
      selectedTooth:this.patientAppointmentFormGroup.value.selectedTooth

    }

    this.authService.addDiagnosis(obj).subscribe(response=>{
      console.log(response);
    })

  }
  selectedCost:any;
  selectedMedicine: any;
  selectedDosage: any;
  selectedFrequency: any;
  selectedDuration: any;
  clicked: any=false;
  isDisabled: any=false;
  isDiagDisabled: any=false;
  isBillDisabled: any=false;
  isPrescDisabled: any=false;
  getTreatmentType($event: MatSelectChange) {
    this.selectedCost=$event.value.treatmentCost;
    this.selectedTreatment=$event.value.treatmentType;
    console.log(this.selectedTreatment);
  }

  discountChanged() {
    console.log(this.selectedCost);
    console.log(this.newItem.discount);
    this.newItem.treatmentType=this.selectedTreatment;
    this.newItem.treatmentCost=this.selectedCost;
    this.newItem.totalAmount=parseInt(this.selectedCost)-parseInt(this.newItem.discount);
  // console.log(this.newItem);
  }

  addNewTreatment() {
    this.treatmentCosts.push(this.newItem);
    this.treatmentCosts.forEach(data=>{
      console.log(data);
    })
    this.newItem={};
  }


  removeItem(index: any) {
    this.treatmentCosts.splice(index, 1);
  }

  getMedicine($event: MatSelectChange) {
    this.selectedMedicine=$event.value;

  }

  getDosage($event: MatSelectChange) {
    this.selectedDosage=$event.value;
  }

  getFrequency($event: MatSelectChange) {
    this.selectedFrequency=$event.value;
  }

  getDuration($event: MatSelectChange) {
    this.selectedDuration=$event.value;
  }

  addNewMedicine() {
    this.newMedicineItem.medicine=this.selectedMedicine;
    this.newMedicineItem.dosage=this.selectedDosage;
    this.newMedicineItem.frequency=this.selectedFrequency;
    this.newMedicineItem.duration=this.selectedDuration;
    this.newMedicineItem.notes=this.selectedNoteData;
    this.medicines.push(this.newMedicineItem);
    this.medicines.forEach(data=>{
      console.log(data);
    })
    this.newMedicineItem={};
  }

  removeMedicineItem(index: number) {
    this.medicines.splice(index, 1);
  }

  modifiedTreatmentCost($event: any) {
    this.selectedCost=$event.value;
    console.log(this.selectedCost);
  }

  getNote($event: MatSelectChange) {
    this.selectedNoteData=$event.value;
  }

  saveBill() {
    this.isBillDisabled=true;
    this.patientAppointmentFormGroup.value.patientMobileNo=this.patient.mobileNo;
    this.patientAppointmentFormGroup.value.doctorMobileNo=this.selectedDoctorMobileNo;
    this.patientAppointmentFormGroup.value.doa=this.appointmentNo;
    this.patientAppointmentFormGroup.value.chair=1;
    this.patientAppointmentFormGroup.value.selectedTooth=this.selectedTooth;
    this.patientAppointmentFormGroup.value.treatmentCosts=this.treatmentCosts;
    //this.patientAppointmentFormGroup.value.complaints=this.complaints;
   // this.patientAppointmentFormGroup.value.diagnosisType=this.diagnosisType;
    this.toaster.info("Bill Saved!!!");
    console.log(this.patientAppointmentFormGroup.value);
    this.patientAppointmentFormGroup.value.treatmentCosts.forEach((data:any)=>{
      var obj={
        patientMobileNo:this.patientAppointmentFormGroup.value.patientMobileNo,
        doctorMobileNo:  this.patientAppointmentFormGroup.value.doctorMobileNo,
        appointmentNo:  this.patientAppointmentFormGroup.value.doa,
        discount: data.discount,
        totalAmount: data.totalAmount,
        treatmentCost:data.treatmentCost,
        treatmentType:data.treatmentType

      }

      this.authService.addTreatment(obj).subscribe(response=>{
        console.log(response);
      })
    })

  }

  savePrescription() {
    this.isPrescDisabled=true;
    this.patientAppointmentFormGroup.value.patientMobileNo=this.patient.mobileNo;
    this.patientAppointmentFormGroup.value.doctorMobileNo=this.selectedDoctorMobileNo;
    this.patientAppointmentFormGroup.value.doa=this.appointmentNo;
    this.patientAppointmentFormGroup.value.chair=1;
    this.patientAppointmentFormGroup.value.selectedTooth=this.selectedTooth;
    this.patientAppointmentFormGroup.value.treatmentCosts=this.treatmentCosts;
    this.patientAppointmentFormGroup.value.medicines=this.medicines;
   // this.patientAppointmentFormGroup.value.complaints=this.complaints;
  //  this.patientAppointmentFormGroup.value.diagnosisType=this.diagnosisType;
    this.toaster.info("The Prescription Saved!!!!!!!!!");
    console.log(this.patientAppointmentFormGroup.value);
    this.patientAppointmentFormGroup.value.medicines.forEach((data:any)=>{
      var obj={
        patientMobileNo:this.patientAppointmentFormGroup.value.patientMobileNo,
        doctorMobileNo:  this.patientAppointmentFormGroup.value.doctorMobileNo,
        appointmentNo:  this.patientAppointmentFormGroup.value.doa,
        dosage:data.dosage,
        duration:data.duration,
        frequency:data.frequency,
        medicineName:data.medicine,
        notes:data.notes

      }

      this.authService.addPrescription(obj).subscribe(response=>{
        console.log(response);
      })
    })



  }

  printPage() {
    window.print();
  }

  generatePDF(action = 'open') {
    let docDefinition = {
      content: [

        {
          text: 'VEB DENTAL CARE',
          fontSize: 16,
          alignment: 'center',
          color: '#047886'
        },
        {
          text: 'INVOICE',
          fontSize: 20,
          bold: true,
          alignment: 'center',
          decoration: 'underline',
          color: 'skyblue'
        },
        {
          text: 'Clinic Details',
          style: 'sectionHeader'
        },
        {
          columns: [
            [
              {
                text: 'VEB Dental Care',
                bold: true
              },
              {text: 'No 16, VEB SAI VILLA'},
              {text: 'First Street, Dr.Prakasam Nagar'},
              {text: 'Thriuninravur'},
              {text: 'Chennai 602024'},
              {text: 'Email:drvignesh1995@gmail.com'},
              {text: 'MobileNo:8056010299'}
            ],
            [
              {
                text: `Date: ${new Date().toLocaleString()}`,
                alignment: 'right'
              },
              {
                text: `Bill No : ${((Math.random() * 1000).toFixed(0))}`,
                alignment: 'right'
              }
            ]
          ]
        },
        {
          text: 'Treatment Details',
          style: 'sectionHeader'
        },
        {
          table: {
            headerRows: 1,
            widths: ['*', 'auto', 'auto', 'auto'],
            body: [
              ['Treatment Type', 'Cost', 'Discount', 'Amount'],
              ...this.patientAppointmentFormGroup.value.treatmentCosts.map((p: { treatmentType: any;
                treatmentCost: any; discount: any; totalAmount: any; }) => ([p.treatmentType, p.treatmentCost,
                p.discount, (p.totalAmount).toFixed(2)])),
              [{text: 'Total Amount', colSpan: 3}, {}, {}, this.patientAppointmentFormGroup.value.treatmentCosts.reduce((sum: number, p: { totalAmount: number; })=> sum + (p.totalAmount), 0).toFixed(2)]
            ]
          }
        },
        {
          text: 'Additional Details',
          style: 'sectionHeader'
        },
        {
          text: 'Get Well Soon',
          margin: [0, 0, 0, 15]
        },

        {
          text: 'Terms and Conditions',
          style: 'sectionHeader'
        },
        {
          ul: [

            'This is system generated invoice.',
          ],
        }
      ],
      styles: {
        sectionHeader: {
          bold: true,
          decoration: 'underline',
          fontSize: 14,
          margin: [0, 15, 0, 15]
        }
      }
    };


    if (action === 'download') {
      pdfMake.createPdf(docDefinition).download();
    } else if (action === 'print') {
      pdfMake.createPdf(docDefinition).print();
    } else {
      pdfMake.createPdf(docDefinition).open();
    }
  }

  toggleButton() {
    this.clicked=true;
  }

  generatePrescriptionPDF(action = 'open') {
    let docDefinition = {
      content: [

        {
          text: 'VEB DENTAL CARE',
          fontSize: 16,
          alignment: 'center',
          color: '#047886'
        },
        {
          text: 'Prescription Report',
          fontSize: 20,
          bold: true,
          alignment: 'center',
          decoration: 'underline',
          color: 'skyblue'
        },
        {
          text: 'Clinic Details',
          style: 'sectionHeader'
        },
        {
          columns: [
            [
              {
                text: 'VEB Dental Care',
                bold: true
              },
              {text: 'No 16, VEB SAI VILLA'},
              {text: 'First Street, Dr.Prakasam Nagar'},
              {text: 'Thriuninravur'},
              {text: 'Chennai 602024'},
              {text: 'Email:drvignesh1995@gmail.com'},
              {text: 'MobileNo:8056010299'}
            ],
            [
              {
                text: `Date: ${new Date().toLocaleString()}`,
                alignment: 'right'
              },
              {
                text: `Bill No : ${((Math.random() * 1000).toFixed(0))}`,
                alignment: 'right'
              }
            ]
          ]
        },
        {
          text: 'Prescription Report',
          style: 'sectionHeader'
        },
        {
          table: {
            headerRows: 1,
            widths: ['*', 'auto', 'auto', 'auto','auto'],
            body: [
              ['Medicine', 'Dosage', 'Frequency', 'Duration','Note'],
              ...this.patientAppointmentFormGroup.value.medicines.map((p: { medicine: any;
                dosage: any; frequency: any; duration: any;notes:any }) => ([p.medicine, p.dosage,
                p.frequency, p.duration,p.notes]))]

          }
        },
        {
          text: 'Additional Details',
          style: 'sectionHeader'
        },
        {
          text: 'Get Well Soon',
          margin: [0, 0, 0, 15]
        },

        {
          text: 'Terms and Conditions',
          style: 'sectionHeader'
        },
        {
          ul: [

            'This is system generated invoice.',
          ],
        }
      ],
      styles: {
        sectionHeader: {
          bold: true,
          decoration: 'underline',
          fontSize: 14,
          margin: [0, 15, 0, 15]
        }
      }
    };


    if (action === 'download') {
      pdfMake.createPdf(docDefinition).download();
    } else if (action === 'print') {
      pdfMake.createPdf(docDefinition).print();
    } else {
      pdfMake.createPdf(docDefinition).open();
    }
  }


}
