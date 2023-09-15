import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { candidate } from '../models/candidate.model';

@Injectable({
  providedIn: 'root',
})
export class CandidatService {
  url: string = '/assets/candidates.json';
  constructor(private http: HttpClient) {}

  getCandidates() {
    return this.http.get(this.url);
  }
  
}
