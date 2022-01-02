import {Component, Inject, OnInit} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from "@angular/material/dialog";
import {DiagnosisComponent, DialogData} from "../diagnosis.component";
import {MatSelectChange} from "@angular/material/select";

@Component({
  selector: 'app-diagnosisdialog',
  templateUrl: './diagnosisdialog.component.html',
  styleUrls: ['./diagnosisdialog.component.css']
})
export class DiagnosisdialogComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<DiagnosisComponent>,
               @Inject(MAT_DIALOG_DATA) public data: DialogData,) { }

  ngOnInit(): void {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  getDentalChartSelection($event: MatSelectChange) {
    console.log($event.value);
  }
}
