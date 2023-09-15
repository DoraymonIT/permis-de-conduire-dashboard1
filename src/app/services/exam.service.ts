import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExamService {
  url: string = '/assets/exam-dates.json';
  constructor(private http: HttpClient) {}

  getReservations() {
    return this.http.get(this.url);
  }
}
