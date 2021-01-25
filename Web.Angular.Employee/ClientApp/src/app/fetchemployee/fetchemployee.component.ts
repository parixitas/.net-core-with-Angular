import { Component, Inject, enableProdMode } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeServices } from '../../Services/empservices.service';
//import { error } from 'util';
enableProdMode();

@Component({
  selector: 'fetchemployee',
  templateUrl: './fetchemployee.component.html'
})

export class FetchEmployeeComponent {
  public emplist: EmployeeData[] 

  constructor(private _empservices: EmployeeServices) {
    this.getemployeedetails();
  }

  getemployeedetails() {
    this._empservices.getEmployee().subscribe(data => this.emplist = data)
  }

  delete(empcode) {
    var ans = confirm("Are you sure delete this record! employee code is " + empcode)
    if (ans) {
      this._empservices.delete(empcode).subscribe((data) => { this.getemployeedetails(); }, error => console.error(error))
    }
  }
}
interface EmployeeData {
  Empcode: number;
  Name: string;
  City: string;
  Pass: string;
  Email: string;
  Dept: string
}
