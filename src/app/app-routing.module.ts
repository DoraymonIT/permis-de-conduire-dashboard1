import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardBoardComponent } from './components/dashboard/dashboard-board/dashboard-board.component';
import { ListCandidatsComponent } from './components/dashboard/list-candidats/list-candidats.component';
import { ListReservationsComponent } from './components/dashboard/list-reservations/list-reservations.component';
import { MyExamDetailsComponent } from './components/dashboard/my-exam-details/my-exam-details.component';

const routes: Routes = [
    {
        path: '',
        component: LoginComponent,
    
        children: [
          {
            path: '',
            pathMatch: 'full',
            redirectTo: 'login',
          },
          { path: 'login', component: LoginComponent },
        ],
      },
  
      {
        path: 'dashboard',
        component: DashboardComponent,
        children: [
          // { path: 'etape/:id', component: TestTestComponent },
          {
            path: '',
            component: DashboardBoardComponent,
          },
          {
            path: 'me',
            component: DashboardBoardComponent,
          },
          {
            path: 'list-candidats',
            component: ListCandidatsComponent,
          },
          {
            path: 'list-reservations',
            component: ListReservationsComponent,
          },
          {
            path: 'my-exam',
            component: MyExamDetailsComponent,
          },

        ],
      },
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
