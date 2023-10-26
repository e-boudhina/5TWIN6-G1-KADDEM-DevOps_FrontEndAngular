import { Component, OnInit } from '@angular/core';
import { ItemService } from '../service/item.service';
import { Item } from '../Models/item';
import { filter } from 'rxjs/operators';
import {User} from "../Models/user.model";

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  items: Item[] = [];
  users: User[] = [];
  selectedItem: Item = new Item(); // Vous pouvez initialiser selectedItem ici

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.loadItems();
    this.loaduser();
  }

  loadItems() {
    this.itemService.getAllItems().subscribe((items: Item[]) => {
      this.items = items;
    });
  }
  loaduser() {
    this.itemService.getAllUsers().subscribe((user: User[]) => {
      this.users = user;
    });
  }
  editItem(item: Item) {
    this.selectedItem = item;
  }

  saveItem() {
    if (this.selectedItem.id) {
      this.itemService.updateItem(this.selectedItem.id, this.selectedItem).subscribe(() => {
        this.selectedItem = new Item();
        this.loadItems();
      });
    } else {
      this.itemService.addItem(this.selectedItem).subscribe(() => {
        this.selectedItem = new Item();
        this.loadItems();
      });
    }
  }


  cancelEdit() {
    this.selectedItem = new Item(); // Annule l'édition en réinitialisant selectedItem
  }

  deleteItem(item: Item) {
    this.itemService.deleteItem(item.id).subscribe(() => {
      // Après la suppression, supprimez l'élément de la liste côté client
      this.items = this.items.filter((i) => i !== item);
    });
  }

}
