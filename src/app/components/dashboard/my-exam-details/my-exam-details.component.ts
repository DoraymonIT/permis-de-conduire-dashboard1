import { Component, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-my-exam-details',
  templateUrl: './my-exam-details.component.html',
  styleUrls: ['./my-exam-details.component.css'],
})
export class MyExamDetailsComponent implements OnInit {
  onConfirmReschedule() {
    this.Ispayed = true;
    console.log('Go to Paye');
    this.reSchedule = false;
  }
  onPaye() {
    this.reSchedule = false;
    console.log('Paye');
    this.Ispayed = false;
  }
  Ispayed: boolean = false;
  reSchedule: boolean = false;
  dateExam: Date = new Date();
  dateTime: any;
  onReschedule() {
    this.reSchedule = !this.reSchedule;
    // if ((this.reSchedule = false)) {
    console.log(this.dateExam + ' : ' + this.dateTime);
    // }
  }
  ngOnInit() {
    initFlowbite();
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
