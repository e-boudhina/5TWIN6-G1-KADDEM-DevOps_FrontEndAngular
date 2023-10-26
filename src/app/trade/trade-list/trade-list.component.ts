import { Component, OnInit } from '@angular/core';
import {Trade} from "../../Models/trade";
import {TradeService} from "../../service/trade.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-trade-list',
  templateUrl: './trade-list.component.html',
  styleUrls: ['./trade-list.component.css']
})
export class TradeListComponent implements OnInit {
  trades: Trade[] = [];
  id:any
  constructor(private tradeService: TradeService , private router: Router) {} // Inject the TradeService or your service

  ngOnInit(): void {
    this.getAllTrades();

  }

  getAllTrades(): void {
    this.tradeService.getAllTrades()
      .subscribe(
        data => {
          this.trades = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  deleteTrade(id: any): void {
    this.tradeService.deleteTrade(id).subscribe(
      () => {
        // Success handling, if needed
        // For example, you can display a success message
        console.log('Trade deleted successfully');

        // Find the index of the trade in the local array and remove it
        const index = this.trades.findIndex((trade) => trade.id === id);
        if (index !== -1) {
          this.trades.splice(index, 1);
        }

        // Navigate to the trades list or any other page as needed
        this.router.navigate(['/trades']);
      },
      (error) => {
        console.error('Error:', error);
        // Handle the error here, e.g., show an error message to the user
        // You can also log the error for debugging
        console.error('Error deleting trade:', error);
      }
    );
  }

}
