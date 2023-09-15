import { Component } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { examDate } from 'src/app/models/exam-date.model';
import { ExamService } from 'src/app/services/exam.service';

@Component({
  selector: 'app-list-reservations',
  templateUrl: './list-reservations.component.html',
  styleUrls: ['./list-reservations.component.css'],
})
export class ListReservationsComponent {
  constructor(private examService: ExamService) {}
  cneFilter: string = '';
  ngOnInit(): void {
    this.getReservations();
    initFlowbite();
  }
  filteredData: any[] = [];
  examData: examDate[] = [];
  applyFilters() {
    this.filteredData = this.examData.filter((item) => {
      const cneMatch = item.cne.includes(this.cneFilter);

      return cneMatch;
    });
    if (this.filteredData.length === 0) {
      this.filteredData = ['empty'];
    }
  }
  getReservations() {
    this.examService.getReservations().subscribe((response) => {
      this.examData = response as examDate[];
      console.log(response);
    });
  }
}
