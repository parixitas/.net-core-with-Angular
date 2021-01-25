import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Route, Router } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class EmployeeServices {
  myAppUrl: string = "";
  constructor(private _http: Http, private _router: Router, @Inject("BASE_URL") baseUrl: string) {
    this.myAppUrl = baseUrl;
    //this.myAppUrl = this.myAppUrl + 'api/Employee/Login';  
  }
  //login(username,pass) {
  //  return this._http.post(this.myAppUrl + 'api/Employee/Login' ,emp)
  //    .map((resposnse: Response) => resposnse.json())
  //    .catch(this.errorHandler)
  //}
  getEmployee() {
    return this._http.get(this.myAppUrl + 'api/Employee/GetEmployees')
      .map((response: Response) => response.json())
      .catch(this.errorHandler)
  }

  //login(username: string, password: string)
  login(logindata)
  {
    return this._http.post(this.myAppUrl + 'api/Employee/Login', logindata)
      .map((resposnse: Response) => resposnse.json())
      .catch(this.errorHandler)
  }

  logout() {
    this._router.navigate(['/login']);
  }

  GetemployeeById(empcode: number) {
    return this._http.get(this.myAppUrl + 'api/Employee/GetemployeeById/'+ empcode)
      .map((response: Response) => response.json())
      .catch(this.errorHandler)
  }

  saveemployee(emp) {
    return this._http.post(this.myAppUrl + 'api/Employee/createemployee', emp)
      .map((response: Response) => response.json())
      .catch(this.errorHandler)
  }

  updateEmployee(emp, empcode) {
    return this._http.put(this.myAppUrl + 'api/Employee/updateEmployee/' + empcode, emp)
      .map((response: Response) => response.json())
      .catch(this.errorHandler)

  }

  delete(empcode) {
    return this._http.delete(this.myAppUrl + 'api/Employee/delete/' + empcode)
      .map((response: Response) => response.json())
      .catch(this.errorHandler)
  }
  errorHandler(error: Response) {
    console.log(error)
    return Observable.throw(error);
    }


}
