import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {AuthService} from "../../_services/auth.service";
import {MatTableDataSource} from "@angular/material/table";
import {MatDialog} from "@angular/material/dialog";
import {Router} from "@angular/router";

@Component({
  selector: 'app-patientview',
  templateUrl: './patientview.component.html',
  styleUrls: ['./patientview.component.css']
})
export class PatientviewComponent implements OnInit,AfterViewInit {
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  constructor(private authService:AuthService,private router:Router) { }
  displayedColumns: string[] = [ 'mobileNo', 'firstName','lastName','dob','gender','action'];
  tableSource = new MatTableDataSource();
  ngOnInit(): void {
    this.authService.getPatients().subscribe(response => {
      this.tableSource.data = response;
    });
  }
  ngAfterViewInit() {
    this.tableSource.paginator = this.paginator;
    this.tableSource.sort = this.sort;

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    console.log(filterValue);
    this.tableSource.filter = filterValue.trim().toLowerCase();
  }

  openPatientDetails($event:any) {
    console.log($event.mobileNo)
   // window.location.href="menu/patient/diagnosis/"+$event.mobileNo;
    this.router.navigate(["menu/patient/diagnosis/"+$event.mobileNo]);
  }
}
