import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { FetchEmployeeComponent } from '../fetchemployee/fetchemployee.component';
import { EmployeeServices } from '../../Services/empservices.service';
@Component({
  selector: 'createemployee',
  templateUrl: './createemployee.component.html'
})
export class createemployee implements OnInit {
  employeeForm: FormGroup;
  title: string = "Create";
  empcode: number ;

  errorMessage: any;
  constructor(private _fb: FormBuilder, private _avRoute: ActivatedRoute,
    private _employeeService: EmployeeServices, private _router: Router) {
    if (this._avRoute.snapshot.params["empcode"]) {
      this.empcode = this._avRoute.snapshot.params["empcode"];
      console.log(this.empcode);
    }
    this.employeeForm = this._fb.group({
      empcode: 0,
      name: ['', [Validators.required]],
      pass: ['', [Validators.required]],
      dept: ['', [Validators.required]],
      city: ['', [Validators.required]],
      email: ['', [Validators.required]]
    })
  }
  ngOnInit() {
    if (this.empcode > 0) {
      this.title = "Edit";
      this._employeeService.GetemployeeById(this.empcode)
        .subscribe(resp => this.employeeForm.setValue(resp)
          //this.employeeForm.patchValue({
            //Name: resp.Name,
            //pass: resp.pass,
            //Dept: resp.Dept,
            //city: resp.city,
            //Email:resp.Email
          //})
       // )//this.employeeForm.setValue(resp)
          , error => this.errorMessage = error);
     
     
    }
  }
  save() {
    if (!this.employeeForm.valid) {
      return;
    }
    if (this.title == "Create") {
      this._employeeService.saveemployee(this.employeeForm.value)
        .subscribe((data) => {
          this._router.navigate(['/fetch-employee']);
        }, error => this.errorMessage = error)
    }
    else if (this.title == "Edit") {
      this._employeeService.updateEmployee(this.employeeForm.value, this.empcode)
        .subscribe((data) => {
          this._router.navigate(['/fetch-employee']);
        }, error => this.errorMessage = error)
    }
  }
  cancel() {
    this._router.navigate(['/fetch-employee']);
  }

  get Name() { return this.employeeForm.get('name'); }
  get pass() { return this.employeeForm.get('pass'); }
  get Dept() { return this.employeeForm.get('dept'); }
  get city() { return this.employeeForm.get('city'); }
  get Email() { return this.employeeForm.get('email'); }
}
