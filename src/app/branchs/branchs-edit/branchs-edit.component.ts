import { Component, OnInit } from '@angular/core';
import { BranchService } from '../branch.service';
import { ActivatedRoute, Router } from '@angular/router';
import { branchCreateDTO, branchDTO } from '../branch';

@Component({
  selector: 'app-branchs-edit',
  templateUrl: './branchs-edit.component.html',
  styleUrls: ['./branchs-edit.component.css'],
})
export class BranchsEditComponent implements OnInit {
  model: branchDTO;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private branchService: BranchService
  ) {}
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.branchService.getById(params.id).subscribe(
        (branch) => {
          this.model = branch;
        },
        () => this.router.navigate(['/branchs'])
      );
    }); 
  }
  saveChanges(branchDTO: branchCreateDTO) {
    this.branchService.edit(this.model.codeBranch, branchDTO).subscribe(() => {
      this.router.navigate(['/branchs']);
    },error => console.log(error));
  }
}
