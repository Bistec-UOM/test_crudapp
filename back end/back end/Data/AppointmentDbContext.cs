using back_end.Models;
using Microsoft.EntityFrameworkCore;
using System.Net;

namespace back_end.Data
{
    public class AppointmentDbContext:DbContext
    {
        public AppointmentDbContext(DbContextOptions option):base(option)
        {

            
        }
        public DbSet<Appointment> appointments {  get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Appointment>().HasData(
                new Appointment()
                
                    {
                        Id=1,
                        name="chathura",
                        address="colombo",
                        nic="2100143433",
                        time=DateTime.Parse("2024-01-10T14:30:00")
                    },
                 new Appointment()

                 {
                     Id = 2,
                     name = "kamal",
                     address = "kandy",
                     nic = "987655242",
                     time = DateTime.Parse("2024-01-10T16:30:00")
                 },
                  new Appointment()

                  {
                      Id = 3,
                      name = "amal",
                      address = "jaffna",
                      nic = "99671234",
                      time = DateTime.Parse("2024-01-10T15:30:00")
                  }

                );
        }

    }
}
