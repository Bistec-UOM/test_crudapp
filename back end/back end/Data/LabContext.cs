using back_end.Models;
using Microsoft.EntityFrameworkCore;

namespace back_end.Data
{
    public class LabContext : DbContext
    {
        public LabContext(DbContextOptions<LabContext> options) : base(options)
        {

        }
        public DbSet<Lab> Labtest { get; set; }
    }

}
