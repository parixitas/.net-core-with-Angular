using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Web.Angular.Employee.Models;

namespace Web.Angular.Employee.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : Controller
    {
        private readonly Employee_DbContext _db;
        private static readonly IEmployeeInterface employeeInterface = new IEmployeeclass();
        public EmployeeController(Employee_DbContext _DbContext)
        {
            _db = _DbContext;
        }

        [HttpPost]
        [Route("Login")]
        public int Login([FromBody] EmployeeDetails user)
        {
            int resp = employeeInterface.Login(user.Email, user.Pass);
            return resp;
        }

        [HttpGet("[action]")]
        public IEnumerable<EmployeeDetails> GetEmployees()
        {
            var model = _db.employeeDetails.ToList();
            return model;
        }

        [HttpPost]
        [Route("createemployee")]
        public int createemployee([FromBody]EmployeeDetails employee)
        {
            int i = employeeInterface.SaveEmployee(employee);
            return i;
        }

        [HttpGet]
        [Route("GetemployeeById/{empcode}")]
        public EmployeeDetails GetemployeeById(int empcode)
        {
            EmployeeDetails employee;
            employee= _db.employeeDetails.SingleOrDefault(e => e.Empcode == empcode);
            return employee;
        }

        [HttpPut]
        [Route("updateEmployee/{empcode}")]
        public int updateEmployee([FromBody] EmployeeDetails employee,int empcode)
        {
            int i= employeeInterface.updateSaveemployee(employee,empcode);
            return i;
        }

        [HttpDelete]
        [Route("delete/{empcode}")]
        public int delete(int empcode)
        {
            int i = employeeInterface.delete(empcode);
            return i;
        }
    }
}