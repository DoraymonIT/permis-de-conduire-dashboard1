import { Component } from '@angular/core';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-dashboard-board',
  templateUrl: './dashboard-board.component.html',
  styleUrls: ['./dashboard-board.component.css']
})
export class DashboardBoardComponent {
  ngOnInit(): void {
    initFlowbite();
  }
}
