import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardUserComponent } from './board-user/board-user.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {authInterceptorProviders} from "./_helpers/auth.interceptor";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MenuComponent } from './menu/menu.component';
import {PanelMenuModule} from 'primeng/panelmenu';
import {MenuItem} from 'primeng/api';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {VgCoreModule} from "@videogular/ngx-videogular/core";
import {VgControlsModule} from "@videogular/ngx-videogular/controls";
import {VgOverlayPlayModule} from "@videogular/ngx-videogular/overlay-play";
import {VgBufferingModule} from "@videogular/ngx-videogular/buffering";
import {MenubarModule} from "primeng/menubar";
import { PatientComponent } from './patient/patient.component';
import { DoctorComponent } from './doctor/doctor.component';
import { PharmacyComponent } from './pharmacy/pharmacy.component';
import { InventoryComponent } from './inventory/inventory.component';
import { AddinventoryComponent } from './inventory/addinventory/addinventory.component';
import { EditinventoryComponent } from './inventory/editinventory/editinventory.component';
import { AddpharmacyComponent } from './pharmacy/addpharmacy/addpharmacy.component';
import { EditpharmacyComponent } from './pharmacy/editpharmacy/editpharmacy.component';
import { AdddoctorComponent } from './doctor/adddoctor/adddoctor.component';
import { EditdoctorComponent } from './doctor/editdoctor/editdoctor.component';
import { AddpatientComponent } from './patient/addpatient/addpatient.component';
import { EditpatientComponent } from './patient/editpatient/editpatient.component';
import { SearchpatientComponent } from './patient/searchpatient/searchpatient.component';
import { SearchdoctorComponent } from './doctor/searchdoctor/searchdoctor.component';
import { SearchpharmacyComponent } from './pharmacy/searchpharmacy/searchpharmacy.component';
import { SearchinventoryComponent } from './inventory/searchinventory/searchinventory.component';
import {BsDatepickerModule} from "ngx-bootstrap/datepicker";
import {MatStepperModule} from "@angular/material/stepper";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {AppointmentComponent} from "./doctor/appointment/appointment.component";
import {MatIconModule} from "@angular/material/icon";
import {MatSelectModule} from "@angular/material/select";
import {MatOptionModule} from "@angular/material/core";
import { AvailabilityComponent } from './doctor/availability/availability.component';
import {DialogModule} from "primeng/dialog";
import {FullCalendarModule} from "@fullcalendar/angular";
import {InputTextModule} from "primeng/inputtext";
import {CalendarModule} from "primeng/calendar";
import {CheckboxModule} from "primeng/checkbox";
import {ButtonModule} from "primeng/button";
import {TabViewModule} from "primeng/tabview";
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import {TableModule} from "primeng/table";
import { PatientappointmentComponent } from './patient/patientappointment/patientappointment.component';
import {OverlayPanelModule} from "primeng/overlaypanel";
import { PatientdialogappointmentComponent } from './patient/patientdialogappointment/patientdialogappointment.component';
import {MatDialogModule} from "@angular/material/dialog";
import { SearchPipe } from './patient/search.pipe';
import { PatientviewComponent } from './patient/patientview/patientview.component';
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import { DiagnosisComponent } from './patient/diagnosis/diagnosis.component';
import {MatTabsModule} from "@angular/material/tabs";
import {MatGridListModule} from "@angular/material/grid-list";
import { DiagnosisSearchPipe } from './patient/diagnosis/diagnosis-search.pipe';
import { DiagnosisdialogComponent } from './patient/diagnosis/diagnosisdialog/diagnosisdialog.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";

import {ChartsModule} from "ng2-charts";
import { BarChartComponent } from './charts/bar-chart/bar-chart.component';
import { LineChartComponent } from './charts/line-chart/line-chart.component';
import {NgxSpinnerModule} from "ngx-spinner";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {ToastrModule} from "ngx-toastr";
FullCalendarModule.registerPlugins([
  dayGridPlugin,
  timeGridPlugin,
  interactionPlugin
]);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent,
    MenuComponent,
    PatientComponent,
    DoctorComponent,
    PharmacyComponent,
    InventoryComponent,
    AddinventoryComponent,
    EditinventoryComponent,
    AddpharmacyComponent,
    EditpharmacyComponent,
    AdddoctorComponent,
    EditdoctorComponent,
    AddpatientComponent,
    EditpatientComponent,
    SearchpatientComponent,
    SearchdoctorComponent,
    SearchpharmacyComponent,
    SearchinventoryComponent,
    AppointmentComponent,
    AvailabilityComponent,
    PatientappointmentComponent,
    PatientdialogappointmentComponent,
    SearchPipe,
    PatientviewComponent,
    DiagnosisComponent,
    DiagnosisSearchPipe,
    DiagnosisdialogComponent,

    BarChartComponent,
     LineChartComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    PanelMenuModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    MenubarModule,
    BsDatepickerModule.forRoot(),
    MatStepperModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatOptionModule,
    FullCalendarModule,
    DialogModule,
    InputTextModule,
    CalendarModule,
    CheckboxModule,
    ButtonModule,
    TabViewModule,
    TableModule,
    OverlayPanelModule,
    MatDialogModule,
    MatTableModule,
    MatPaginatorModule,
    MatTabsModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    ChartsModule,
    NgxSpinnerModule,
    MatProgressBarModule,
    ToastrModule.forRoot()
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
