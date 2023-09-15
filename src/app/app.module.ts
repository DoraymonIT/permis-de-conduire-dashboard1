import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { ListReservationsComponent } from './components/dashboard/list-reservations/list-reservations.component';
import { ListCandidatsComponent } from './components/dashboard/list-candidats/list-candidats.component';
import { MyExamDetailsComponent } from './components/dashboard/my-exam-details/my-exam-details.component';
import { DashboardBoardComponent } from './components/dashboard/dashboard-board/dashboard-board.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PayTheExamComponent } from './components/dashboard/my-exam-details/pay-the-exam/pay-the-exam.component';
import { ScheduleExamComponent } from './components/dashboard/my-exam-details/schedule-exam/schedule-exam.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    ListReservationsComponent,
    ListCandidatsComponent,
    MyExamDetailsComponent,
    DashboardBoardComponent,
    ScheduleExamComponent,
    PayTheExamComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
