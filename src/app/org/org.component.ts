import { Component, OnInit } from '@angular/core';
import { OrgService } from '../service/org.service';
import { Org } from '../Models/org';

@Component({
  selector: 'app-org',
  templateUrl: './org.component.html',
  styleUrls: ['./org.component.css']
})
export class OrgComponent implements OnInit {
  orgs: Org[] = [];
  selectedOrg: Org = new Org(); 

  constructor(private orgService: OrgService) { }

  ngOnInit(): void {
    this.loadOrgs();
  }

  loadOrgs() {
    this.orgService.getAllOrgs().subscribe((orgs: Org[]) => {
      this.orgs = orgs; 
    });
  }
  


  editOrg(org: Org) {
    this.selectedOrg = org;
  }

  saveOrg() {
    if (this.selectedOrg.id) {
      this.orgService.updateOrg(this.selectedOrg.id, this.selectedOrg).subscribe(() => {
        this.selectedOrg = new Org();
        this.loadOrgs();
      });
    } else {
      this.orgService.addOrg(this.selectedOrg).subscribe(() => {
        this.selectedOrg = new Org();
        this.loadOrgs();
      });
    }
  }


  cancelEdit() {
    this.selectedOrg = new Org(); 
  }

  deleteOrg(org: Org) {
    this.orgService.deleteOrg(org.id).subscribe(() => {
      this.orgs = this.orgs.filter((i) => i !== org);
    });
  }
  
}
