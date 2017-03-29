import { Component, OnInit } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Customer } from './../customers';
import { CustomersService } from './../customers.service'

@Component({
selector: 'app-api',
template: ` 
<ul class="">

</ul>`,
    }) 

    export class CustomerComponent implements OnInit{
    api: string;
    public customers: Customer[];

    constructor(private customerService: CustomersService) {
    this.api = "API Customers"; 
}

ngOnInit() {
    this.customerService.findAllusersInfo()
        .subscribe(
        customers =>
        {
            console.log(this.customers);
            this.customers = customers;
        },
        error => alert("error"));
}}