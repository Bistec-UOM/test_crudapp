using back_end.Models;
using Microsoft.EntityFrameworkCore;

namespace back_end.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext()
        {
        }
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }
        public DbSet<Admin_Data> admin_Datas { get; set; }

    }
}
