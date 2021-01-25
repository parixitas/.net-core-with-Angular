using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Web.Angular.Employee.Models
{
    public class Employee_DbContext : DbContext
    {
        public Employee_DbContext()
        {
        }
        public Employee_DbContext(DbContextOptions<Employee_DbContext> dbContext) : base(dbContext)
        {
        }

        public DbSet<EmployeeDetails> employeeDetails { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
        }
        protected override void OnConfiguring(DbContextOptionsBuilder builder)
        {
            builder.UseSqlServer("Server=VED\\SQLEXPRESS;Database=AngularJS_mvc_Demo;Trusted_Connection=True;MultipleActiveResultSets=True;");
            base.OnConfiguring(builder);
        }
    }
}
