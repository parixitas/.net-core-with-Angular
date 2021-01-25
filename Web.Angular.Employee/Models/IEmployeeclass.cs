using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Web.Angular.Employee.Models
{
    public class IEmployeeclass : IEmployeeInterface
    {
        private readonly Employee_DbContext _db = new Employee_DbContext();
        
        int IEmployeeInterface.Login(string username,string pass)
        {
            int Obj = (from lg in _db.employeeDetails where lg.Email == username && lg.Pass == pass select lg).Count();
            if ( Obj.ToString() =="0")
                return 0 ;//return new Response { Status = "Invalid", Message = "Invalid User." };
            if (Obj.ToString() == "-1")
                return -1;//new Response { Status = "Inactive", Message = "User Inactive." };
            else
                return 1;//new Response { Status = "Success", Message = empdetials.Name };
        }


        public int SaveEmployee(EmployeeDetails employee)
        {
            int empcode = (from emp in _db.employeeDetails select emp.Empcode).Max()+1;
            employee.Empcode = empcode;
            _db.employeeDetails.Add(employee);
            _db.SaveChanges();
            return 1;
        }

        public int updateSaveemployee(EmployeeDetails employee,int empcode)
        {
            EmployeeDetails emp = _db.employeeDetails.SingleOrDefault(e => e.Empcode == empcode);
            emp.Name = employee.Name;
            emp.Email = employee.Email;
            emp.Dept = employee.Dept;
            emp.City = employee.City;
            emp.Pass = employee.Pass;
            //_db.employeeDetails.Add(emp);
            _db.SaveChanges();
            return 1;
        }

        public int delete(int empcode)
        {
            EmployeeDetails employee = _db.employeeDetails.SingleOrDefault(e => e.Empcode == empcode);
            _db.employeeDetails.Remove(employee);
            _db.SaveChanges();
            return 1;
        }
    }
}
