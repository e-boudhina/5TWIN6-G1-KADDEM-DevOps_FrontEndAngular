import { Component, OnInit } from '@angular/core';
import { ItemService } from '../service/item.service'; // Assurez-vous d'importer le service
import { Item } from '../Models/item'; // Assurez-vous d'importer le modèle Item

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  items: Item[] = [];
  selectedItem?: Item;
  isAdding: boolean = false;
  isEditing: boolean = false;
  newItem: Item = new Item();
  editedItem: Item = new Item();

  constructor(private itemService: ItemService) {}

  ngOnInit() {
    this.loadItems();
  }

  loadItems() {
    this.itemService.getAllItems().subscribe((data) => {
      this.items = data;
    });
  }

  selectItem(item: Item) {
    this.selectedItem = item;
  }

  addNewItem() {
    this.isAdding = true;
  }

  editItem(item: Item) {
    this.isEditing = true;
    this.editedItem = { ...item }; // Copy the item to avoid changing it directly in the list
  }

  saveNewItem() {
    this.itemService.addItem(this.newItem).subscribe(() => {
      this.loadItems();
      this.isAdding = false;
      this.newItem = new Item(); // Reset the form
    });
  }

  saveEditedItem() {
    this.itemService.updateItem(this.editedItem.id, this.editedItem).subscribe(() => {
      this.loadItems();
      this.isEditing = false;
    });
  }

  cancelAdd() {
    this.isAdding = false;
    this.newItem = new Item(); // Reset the form
  }

  cancelEdit() {
    this.isEditing = false;
    this.editedItem = new Item(); // Reset the form
  }

  deleteItem(id: number): void {
    this.itemService.deleteItem(id).subscribe(
      () => {
        // Suppression réussie, mettez en œuvre votre logique ici
        console.log("Item supprimé avec succès");

        // Après la suppression, actualisez la liste
        this.refreshItemList();
      },
      (error) => {
        // Erreur lors de la suppression
        if (error.error && error.error.message) {
          // Affichez le message renvoyé par le serveur
          console.error("Erreur: " + error.error.message);
        } else {
          // Gérez l'erreur de manière appropriée
          console.error("Erreur inattendue lors de la suppression de l'item");
        }
      }
    );
  }

  refreshItemList(): void {
    // Appelez la méthode pour récupérer la liste des éléments
    this.itemService.getAllItems().subscribe(
      (data) => {
        // Mettez à jour la liste d'éléments dans votre composant
        this.items = data;
      },
      (error) => {
        console.error("Erreur lors de la récupération de la liste d'items après la suppression");
      }
    );
  }





}
