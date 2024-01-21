using back_end.Models;
using Microsoft.EntityFrameworkCore;

namespace back_end.Data
{
    public class PharmacyDbContext : DbContext
    {
        
        public PharmacyDbContext(DbContextOptions<PharmacyDbContext> options) : base(options)
        {
        }
        public DbSet<Pharmacy> Pharmacy_table { get; set; }

    }
}

