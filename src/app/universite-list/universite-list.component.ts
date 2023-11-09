// universite-list.component.ts
import { Component, OnInit } from '@angular/core';
import { Universite } from "../Models/universite";
import { UniversiteService } from "../Service/Universite/universite.service";

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

  deleteUniversiteById(universiteId: number) {
    this.universiteService.deleteUniversite(universiteId).subscribe(() => {
      // Mettez à jour la liste des universités après la suppression
      this.universites = this.universites.filter(u => u.idUniversite !== universiteId);
      console.log('Suppression de l\'université avec l\'ID :', universiteId);
    });
  }
}
