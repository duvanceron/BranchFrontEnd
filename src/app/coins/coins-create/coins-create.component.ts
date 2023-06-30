import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoinService } from '../coin.service';
import { coinCreateDTO } from '../coin';

@Component({
  selector: 'app-coins-create',
  templateUrl: './coins-create.component.html',
  styleUrls: ['./coins-create.component.css']
})
export class CoinsCreateComponent implements OnInit {
  errors : string[]=[];
  constructor(private router: Router, private coinService: CoinService) {}
 
  saveChanges(coinDTO :coinCreateDTO) {
    this.coinService.create(coinDTO).subscribe(()=>{
      this.router.navigate(['/branchs']);
    },error => console.error(error));
   
  }
  
  ngOnInit(): void {
  }

}
