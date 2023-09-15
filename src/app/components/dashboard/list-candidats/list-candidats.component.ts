import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { initFlowbite } from 'flowbite';
import { candidate } from 'src/app/models/candidate.model';
import { CandidatService } from 'src/app/services/candidat.service';

@Component({
  selector: 'app-list-candidats',
  templateUrl: './list-candidats.component.html',
  styleUrls: ['./list-candidats.component.css'],
})
export class ListCandidatsComponent {
  constructor(private candidateService: CandidatService) {}

  cneFilter: string = '';
  candidateData: candidate[] = [];
  filteredData: any[] = [];

  addCandidate = new FormGroup({
    nomComplet: new FormControl('', [Validators.required]),
    cne: new FormControl('', [Validators.required]),
    permisDemandee: new FormControl('', [Validators.required]),
  });
  getCandidates() {
    this.candidateService.getCandidates().subscribe((response) => {
      this.candidateData = response as candidate[];
      console.log(response);
    });
  }

  applyFilters() {
    this.filteredData = this.candidateData.filter((item) => {
      const cneMatch = item.cne?.includes(this.cneFilter);

      return cneMatch;
    });
    if (this.filteredData.length === 0) {
      this.filteredData = ['empty'];
    }
  }
  ngOnInit(): void {
    this.getCandidates();
    initFlowbite();
  }

  onSubmit() {
    if (this.addCandidate.valid) {
      const formData = this.addCandidate.value;
      const newCandidate = {
        nomComplet: formData.nomComplet || '',
        cne: formData.cne || '',
        permisDemandee: formData.permisDemandee || '',
      };
      this.candidateData.push(newCandidate);
      this.addCandidate.reset();
      console.log('Candidate added:', newCandidate);
    } else {
      console.log(this.addCandidate.value);
      alert('please , fill all infos or you cannot create a candidate');
    }
  }
  deleteCandidate(index: number) {
    if (index >= 0 && index < this.candidateData.length) {
      this.candidateData.splice(index, 1);
      console.log('Candidate deleted at index', index);
    } else {
      console.error('Invalid index for deleting candidate');
    }
  }
}
