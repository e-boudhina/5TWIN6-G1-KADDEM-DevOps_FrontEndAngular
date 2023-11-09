// universite-list.component.ts
import { Component, OnInit } from '@angular/core';
import {Universite} from "../Models/universite";
import {UniversiteService} from "../Service/Universite/universite.service";

@Component({
  selector: 'app-universite-list',
  templateUrl: './universite-list.component.html',
  styleUrls: ['./universite-list.component.css']
})
export class UniversiteListComponent implements OnInit {
  universites: Universite[];

  constructor(private universiteService: UniversiteService) {}

  ngOnInit() {
    this.universiteService.getUniversites().subscribe(data => {
      this.universites = data;
    });
  }

  editUniversite(universite: Universite) {
    // Mettez en œuvre la logique pour l'édition de l'université ici
    console.log('Édition de l\'université :', universite);
  }

  deleteUniversite(universite: Universite) {
    // Mettez en œuvre la logique pour la suppression de l'université ici
    console.log('Suppression de l\'université :', universite);
  }
}
