import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedule-exam',
  templateUrl: './schedule-exam.component.html',
  styleUrls: ['./schedule-exam.component.css'],
})
export class ScheduleExamComponent implements OnInit {
  reSchedule: boolean = false;
  dateExam: Date = new Date();
  dateTime: any;
  onReschedule() {
    this.reSchedule = !this.reSchedule;
    // if ((this.reSchedule = false)) {
    console.log(this.dateExam + ' : ' + this.dateTime);
    // }
  }

  constructor() {}
  ngOnInit(): void {
    // Create a new Date object for the current time
    const now = new Date();

    // Extract hours and minutes from the Date object
    const hours = now.getHours();
    const minutes = now.getMinutes();

    // Format the time as 'HH:mm'
    this.dateTime = `${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}`;
  }

  parseTime(timeString: any): Date {
    const [hours, minutes] = timeString.split(':').map(Number);
    const date = new Date();
    date.setHours(hours);
    date.setMinutes(minutes);
    return date;
  }
}
