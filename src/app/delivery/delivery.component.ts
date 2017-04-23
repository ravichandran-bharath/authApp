import { Component, OnInit } from '@angular/core';
import { DeliveryService } from './delivery.service';


@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css'],
  providers: [ DeliveryService ]
})
export class DeliveryComponent implements OnInit {
  deliveryboy: any;

   foods = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

  constructor(private dbService:DeliveryService)  { }

  ngOnInit() {
    this.dbService.getDb().subscribe(deliveryboy => {
      console.log(deliveryboy);
      this.deliveryboy = deliveryboy;
    })
  }
  
  }