import { Component, OnInit } from '@angular/core';
import { OrdersService } from './orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
  providers: [ OrdersService ]
})
export class OrdersComponent implements OnInit {
  orders: any;


  foods = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

  constructor(private ordersService: OrdersService) { }

  ngOnInit() {
    this.ordersService.getOrders().subscribe(orders => {
      console.log(orders);
      this.orders = orders;
    })
  }

}
