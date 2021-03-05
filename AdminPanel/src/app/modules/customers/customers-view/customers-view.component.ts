import { async } from '@angular/core/testing';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomersService } from '../../../services/customers.service';

@Component({
  selector: 'app-customers-view',
  templateUrl: './customers-view.component.html',
  styleUrls: ['./customers-view.component.scss']
})
export class CustomersViewComponent implements OnInit {

  customers: any = [];

  constructor(private router: Router,
    private customerService: CustomersService) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers() {
    this.customerService.getUser()
      .subscribe(
        (async (data: any) => {
          console.log("data: ", data);
          this.customers = (data && data.data) ? data.data : [];
        })
      );
  }

  deleteCustomers(customer) {
    if (customer._id) {
      var customerId = customer._id;
      this.customerService.deleteUserById(customerId)
        .subscribe(
          (async (data: any) => {
            console.log("data deleted successfully!");
            this.getAllUsers();
          })
        )
    }
  }

}
