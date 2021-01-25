using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Web.Angular.Employee.Models
{
    interface IEmployeeInterface
    {
        //int Login(EmployeeDetails employeeDetails);
        int Login(string username,string pass);
        int SaveEmployee(EmployeeDetails employee);

        int updateSaveemployee(EmployeeDetails employee,int empcode);

        int delete(int empcode);
    }
}
