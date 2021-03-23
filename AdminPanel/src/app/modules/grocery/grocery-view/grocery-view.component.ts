import { async } from '@angular/core/testing';
import { Component, OnInit } from '@angular/core';
import { GroceryService } from '../../../services/grocery.service';

@Component({
  selector: 'app-grocery-view',
  templateUrl: './grocery-view.component.html',
  styleUrls: ['./grocery-view.component.scss']
})
export class GroceryViewComponent implements OnInit {

  groceries: any = [];

  constructor(private groceryService: GroceryService) {
    this.getAllGrocery();
  }

  ngOnInit(): void {
  }

  // GET All GROCERY:
  getAllGrocery() {
    this.groceryService.getAllGrocery()
      .subscribe(
        (async (data: any) => {
          console.log("Get All Grocery: ", data);
          this.groceries = (data.data && data) ? data.data : [];
          console.log("Grocery: ", this.groceries);
        })
      )
  }

  // DELETE GROCERY BY ID:
  deleteGrocery(grocery) {
    if (grocery._id) {
      var groceryId = grocery._id;
      this.groceryService.deleteGroceryById(groceryId)
        .subscribe(
          (async (data: any) => {
            console.log("Grocery deleted successfully!!!");
            this.getAllGrocery();
          })
        );
    }
  }

}
