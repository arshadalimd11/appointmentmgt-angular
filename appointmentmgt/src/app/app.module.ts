import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MakeAppointmentComponent } from './make-appointment/make-appointment.component';
import { GetAppointmentComponent } from './get-appointment/get-appointment.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppointmentService } from './service/service';
import { ApproveAppointmentComponent } from './approve-appointment/approve-appointment.component';

@NgModule({
  declarations: [
    AppComponent,
    MakeAppointmentComponent,
    GetAppointmentComponent,
    ApproveAppointmentComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AppointmentService,HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
