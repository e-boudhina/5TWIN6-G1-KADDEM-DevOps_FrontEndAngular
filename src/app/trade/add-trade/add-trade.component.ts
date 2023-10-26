import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { Item } from "../../Models/item";
import { Trade } from "../../Models/trade";
import { User } from "../../Models/user";
import { TradeService } from "../../service/trade.service";

@Component({
  selector: 'app-add-trade',
  templateUrl: './add-trade.component.html',
  styleUrls: ['./add-trade.component.css']
})
export class AddTradeComponent implements OnInit {
  trade: Trade = new Trade();
  items: Item[];
  users: User[];

  TradeForm: FormGroup;

  constructor(
    private tradeService: TradeService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.TradeForm = this.formBuilder.group({
      tradeStartDate: [null],
      tradeEndDate: [null],
      status: ['PENDING'],
      offeredItem: [{
        "id": 6,
        "title": "Hamza",
        "description": "Is",
        "category": "eit",
        "state": "good"
      }],
      requestedItem: [],
      user: []
    });
  }

  ngOnInit(): void {
    this.getAllItems();
    this.getAllUsers();
  }

  getAllItems(): void {
    this.tradeService.getAllItems().subscribe(
      (data: Item[]) => {
        this.items = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getAllUsers(): void {
    this.tradeService.getAllUsers().subscribe(
      (data: User[]) => {
        this.users = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  addTrade() {

      this.tradeService.addTrade(this.TradeForm.value).subscribe(
        (res) => {
          console.log(this.TradeForm.value);
          this.router.navigate(["/trades"]);
        },
        (error) => {
          console.log(error);
        });
    }

}
