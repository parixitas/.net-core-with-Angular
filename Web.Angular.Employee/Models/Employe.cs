using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Web.Angular.Employee.Models
{
    public class EmployeeDetails
    {
        [Key]
        public int Empcode { get;  set; }
        public string Name { get; set; }
        public string City { get; set; }
        public string Pass { get; set; }
        public string Email { get; set; }
        public string Dept { get; set; }
    }
}
