import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonService } from '../../../services/common.service';
import { GroceryService } from '../../../services/grocery.service';

@Component({
  selector: 'app-grocery',
  templateUrl: './grocery.component.html',
  styleUrls: ['./grocery.component.css']
})
export class GroceryComponent implements OnInit {

  Groceries: any = [];
  selectedGrocery: any = {};
  groceryId: String;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private commonService: CommonService,
    private groceryService: GroceryService) {
    this.getGroceryByName();
  }

  ngOnInit(): void {
  }

  // GET ALL GROCERY BY NAME:
  getGroceryByName() {
    this.groceryService.getProductByName()
      .subscribe(
        (async (data: any) => {
          console.log("Get All Grocery: ", data);
          this.Groceries = (data.data && data) ? data.data : [];
        })
      );
  }

}
