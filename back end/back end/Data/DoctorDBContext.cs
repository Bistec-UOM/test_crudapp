using back_end.Models;
using Microsoft.EntityFrameworkCore;

namespace back_end.Data
{
    public class DoctorDBContext : DbContext
    {
        public DoctorDBContext(DbContextOptions<DoctorDBContext> options) : base(options)
        {

        }
        public DbSet<Doctor> patients { get; set; }

    }
}
