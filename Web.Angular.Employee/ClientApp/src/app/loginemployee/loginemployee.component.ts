import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { NgForm, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Route, Router, ActivatedRoute } from '@angular/router';
import { EmployeeServices } from '../../Services/empservices.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'loginemployee',
  templateUrl: 'loginemployee.component.html',
  styleUrls: ['./loginemployee.component.css']
})
export class LoginEmployeeComponent implements OnInit {

  isLoggedIn$: boolean = false ;
  loginemp: FormGroup;
  title: string = "Login";
  errorMessage: any;
  returnUrl: string;
  
  isRequesting: boolean;

  constructor(private _fb: FormBuilder, private readonly _router: Router, private empservices: EmployeeServices, private _acroute: ActivatedRoute) {
    this.loginemp = this._fb.group({
      Email: ['', [Validators.required]],
      Pass: ['', [Validators.required]]
    })
  }
 
  ngOnInit() {
    
  }

   save() {
    this.isLoggedIn$= true;
   
    if (this.title == "Login") {
      ////console.log(this.username);
      //console.log(this.loginemp.value);
      this.empservices.login(this.loginemp.value)
        //.finally(() => this.isRequesting = false)
        .subscribe((data) => {
          if (data) {
            this._router.navigate(['/fetch-employee']);
          } 
        }, error => this.errorMessage = error)
    }
  }
  onLogout() {
    this.empservices.logout();
  }
  cancel() {
    this.loginemp.reset();
    this._router.navigate(['/login']);
  }  
 
  get username() {
    return this.loginemp.get('Email');
  }
  get pass() { return this.loginemp.get('Pass'); }
}
