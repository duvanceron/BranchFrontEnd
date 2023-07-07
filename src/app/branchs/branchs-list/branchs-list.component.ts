import { Component, Input, OnInit } from '@angular/core';
import { branchDTO } from '../branch';
import { BranchService } from '../branch.service';

@Component({
  selector: 'app-branchs-list',
  templateUrl: './branchs-list.component.html',
  styleUrls: ['./branchs-list.component.css'],
})
export class BranchsListComponent implements OnInit {
  constructor(private branchService: BranchService) {}
  branchs: branchDTO[];

  displayedColumns: string[] = [
    'codeBranch',
    'descriptionBranch',
    'adressBranch',
    'identificationBranch',
    'dateBranch',
    'fkMoneyBranch',
    'options',
  ];
  ngOnInit(): void {
    this.branchService.getAll().subscribe(
      (branch) => {
        this.branchs = branch;
      },
      (error) => console.log(error)
    );
  }
  deleteBranch(id: number) {
    this.branchService.delete(id).subscribe(() => {});
  }
}
