import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApproveAppointmentComponent } from './approve-appointment/approve-appointment.component';
import { GetAppointmentComponent } from './get-appointment/get-appointment.component';
import { MakeAppointmentComponent } from './make-appointment/make-appointment.component';

const routes: Routes = [
  {
    path:'make-appointment',component:MakeAppointmentComponent
  },
  {
    path:'get-appointment',component:GetAppointmentComponent
  },
  {
    path:'approve-appointment',component:ApproveAppointmentComponent
  },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
