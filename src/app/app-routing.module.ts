import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import {MenuComponent} from "./menu/menu.component";
import {PatientComponent} from "./patient/patient.component";
import {AddpatientComponent} from "./patient/addpatient/addpatient.component";
import {EditpatientComponent} from "./patient/editpatient/editpatient.component";
import {EditdoctorComponent} from "./doctor/editdoctor/editdoctor.component";
import {DoctorComponent} from "./doctor/doctor.component";
import {AdddoctorComponent} from "./doctor/adddoctor/adddoctor.component";
import {InventoryComponent} from "./inventory/inventory.component";
import {PharmacyComponent} from "./pharmacy/pharmacy.component";
import {AddpharmacyComponent} from "./pharmacy/addpharmacy/addpharmacy.component";
import {EditpharmacyComponent} from "./pharmacy/editpharmacy/editpharmacy.component";
import {AddinventoryComponent} from "./inventory/addinventory/addinventory.component";
import {EditinventoryComponent} from "./inventory/editinventory/editinventory.component";
import {SearchpatientComponent} from "./patient/searchpatient/searchpatient.component";
import {SearchdoctorComponent} from "./doctor/searchdoctor/searchdoctor.component";
import {SearchpharmacyComponent} from "./pharmacy/searchpharmacy/searchpharmacy.component";
import {SearchinventoryComponent} from "./inventory/searchinventory/searchinventory.component";
import {AppointmentComponent} from "./doctor/appointment/appointment.component";
import {AvailabilityComponent} from "./doctor/availability/availability.component";
import {PatientappointmentComponent} from "./patient/patientappointment/patientappointment.component";
import {PatientviewComponent} from "./patient/patientview/patientview.component";
import {DiagnosisComponent} from "./patient/diagnosis/diagnosis.component";


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  {
    path:'menu',
    component:MenuComponent,
children:[
  {
    path: 'patient',
    component: PatientComponent,

    children: [
      {
        path: 'add',
        component: AddpatientComponent
      },
      {
        path: 'edit',
        component: EditpatientComponent

      },
      {
        path: 'appointment',
        component: PatientappointmentComponent

      },
      {
        path: 'view',
        component: PatientviewComponent

      },
      {
        path: 'diagnosis/:mobileNo',
        component: DiagnosisComponent

      },
      {
        path: 'search',
        component: SearchpatientComponent

      }


    ]
  },

  {
    path: 'doctor',
    component: DoctorComponent,

    children: [
      {
        path: 'add',
        component: AdddoctorComponent

      },
      {
        path: 'edit',
        component: EditdoctorComponent

      },
      {
        path: 'appointment',
        component: AppointmentComponent

      },
      {
        path: 'availability',
        component: AvailabilityComponent

      },
      {
        path: 'search',
        component: SearchdoctorComponent

      }


    ]
  },

  {
    path: 'pharmacy',
    component: PharmacyComponent,

    children: [
      {
        path: 'add',
        component: AddpharmacyComponent

      },
      {
        path: 'edit',
        component: EditpharmacyComponent

      },
      {
        path: 'search',
        component: SearchpharmacyComponent

      }


    ]
  },

  {
    path: 'inventory',
    component: InventoryComponent,

    children: [
      {
        path: 'add',
        component: AddinventoryComponent

      },
      {
        path: 'edit',
        component: EditinventoryComponent

      },
      {
        path: 'search',
        component: SearchinventoryComponent

      }


    ]
  }
  ]
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
