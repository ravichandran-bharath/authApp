import { Component, OnInit } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Customer } from './../customers';
import { CustomersService } from './../customers.service'

@Component({
selector: 'app-api',
template: ` 
<ul class="">
<li *ngFor="let customer of customers">
<span class=""> 
{{customer.Id}} </span> {{customer.Name}}
</li>
</ul>`,
    }) 

    export class CustomerComponent implements OnInit{
    api: string;
    public customers: Customer[];

    constructor(private customerService: CustomersService) {
    this.api = "API Customers"; 
}

ngOnInit() {
    this.customerService.getCustomers()
        .subscribe(
        customers =>
        {
            console.log(this.customers);
            this.customers = customers;
        },
        error => alert("error"));
}}