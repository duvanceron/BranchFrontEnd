import { Component } from '@angular/core';
import { coinDTO } from '../coin';
import { CoinService } from '../coin.service';

@Component({
  selector: 'app-coins-list',
  templateUrl: './coins-list.component.html',
  styleUrls: ['./coins-list.component.css']
})
export class CoinsListComponent {
  constructor(private coinService: CoinService) {}
  coins: coinDTO[];
  displayedColumns: string[] = ['idCoin','nameCoin','descriptionCoin','options'];
  ngOnInit(): void {
    this.coinService.getAll().subscribe(
      (coin) => {
        
        this.coins = coin;
        console.log(this.coins )

      },
      (error) => console.log(error)
    );
  }


}
