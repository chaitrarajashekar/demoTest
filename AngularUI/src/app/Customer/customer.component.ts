import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { HttpClient, HttpRequest, HttpEvent, HttpEventType, HttpResponse } from '@angular/common/http';
import { HttpErrorResponse, HttpParams } from '@angular/common/http';
import { FormBuilder, Validators, NgForm } from '@angular/forms';
import { formatDate } from '@angular/common';
import { customer } from '../model/Customer';
import { CustomerService } from '../services/Customer.service';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
})
export class customerComponent {
  constructor(private formbulider: FormBuilder, private http: HttpClient,
              private CustomerService: CustomerService, private router: Router) { }
  public dataSource: MatTableDataSource<customer>;
  public displayedColumns = ['id', 'firstname', 'lastname', 'dateofbirth', 'premiumEdited', 'addressEdited'];
  @ViewChild('TablePaginator', { static: false }) tablePaginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sortTable: MatSort;

  public responsecode: number;
  public today = new Date();

  ngOnInit() {
      this.getCustomer();
      if (this.dataSource != null && this.dataSource != undefined) {
        this.dataSource.paginator = this.tablePaginator;
        this.dataSource.sort = this.sortTable;
      }
    }
  

  ngAfterViewInit() {
    this.getCustomer();
    if (this.dataSource != null && this.dataSource != undefined) {
      this.dataSource.paginator = this.tablePaginator;
      this.sortTable.sortChange.subscribe(() => this.tablePaginator.pageIndex = 0);
    }
  }

  getCustomer() {
    this.CustomerService.getCustomerDetails()
      .subscribe((data: customer[]) => {
        for (let item of data) {
          let appendVal = '';
          for (let address of item.addresses) {
            if (appendVal!='')
              appendVal = appendVal + address.street + ' ' + address.city + ' ' + address.postCode + ' ';
            else
              appendVal = address.street + ' ' + address.city + ' ' + address.postCode + ' ';
          }
          item.addressEdited = appendVal;
          if (item.isPremiumCustomer)
            item.premiumEdited = "Yes"
          else
            item.premiumEdited = "No"
        }
        
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.data = data;
        this.dataSource.sort = this.sortTable;
        this.dataSource.paginator = this.tablePaginator;
      });
  }

}
