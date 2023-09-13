import { Component } from '@angular/core';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-list-candidats',
  templateUrl: './list-candidats.component.html',
  styleUrls: ['./list-candidats.component.css']
})
export class ListCandidatsComponent {
  ngOnInit(): void {
    initFlowbite();
  }
}
