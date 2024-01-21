using back_end.Models;
using Microsoft.EntityFrameworkCore;

namespace back_end.Data
{
    public class PharmacyDBContext : DbContext
    {
        public PharmacyDBContext(DbContextOptions<PharmacyDBContext> options) : base(options)
        {

        }
        public DbSet<Doctor> patients { get; set; }

    }
}
