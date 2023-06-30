import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { branchCreateDTO } from '../branch';
import { BranchService } from '../branch.service';


@Component({
  selector: 'app-branchs-create',
  templateUrl: './branchs-create.component.html',
  styleUrls: ['./branchs-create.component.css']
})
export class BranchsCreateComponent implements OnInit {
  constructor(private router:Router,private branchService:BranchService){}
  ngOnInit(): void {
  }
  saveChanges(branchDTO :branchCreateDTO) {
    this.branchService.create(branchDTO).subscribe(()=>{
      this.router.navigate(['/branchs']);
    },error => console.error(error));
   
  }

}
