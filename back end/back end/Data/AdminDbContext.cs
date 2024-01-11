using back_end.Models;
using Microsoft.EntityFrameworkCore;

namespace back_end.Data
{
    public class AdminDbContext : DbContext
    {
        public AdminDbContext()
        {
        }
        public AdminDbContext(DbContextOptions<AdminDbContext> options) : base(options)
        {
        }
        public DbSet<Admin_Data> admin_Datas { get; set; }

    }
}
