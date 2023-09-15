import { Component } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { candidate } from 'src/app/models/candidate.model';
import { CandidatService } from 'src/app/services/candidat.service';
import { ExamService } from 'src/app/services/exam.service';

@Component({
  selector: 'app-dashboard-board',
  templateUrl: './dashboard-board.component.html',
  styleUrls: ['./dashboard-board.component.css'],
})
export class DashboardBoardComponent {
  allCandidateParPermis: candidate[] = [];
  candidateParPermis: candidate[] = [];
  constructor(
    private candidateService: CandidatService,
    private examService: ExamService
  ) {}
  ngOnInit(): void {
    initFlowbite();
    this.getCandidatesParPermis();
  }
  //  Par Permis - Par Sexe - Par MoisDateExam - Paye/NonPaye
  getAllCandidates(permisType: string) {
    this.candidateParPermis = this.candidateParPermis.filter(
      (item) => (item.permisDemandee = permisType)
    );
  }
  getCandidatesParPermis() {
    this.candidateService.getCandidates().subscribe((data) => {
      this.allCandidateParPermis = data as candidate[];
    });
  }
  getCandidatesParSexe() {}
  getCandidatesParerJourExam() {}
  getCandidatesParerMoisExam() {}
  getCandidatesParPaymentStatus() {}
}
