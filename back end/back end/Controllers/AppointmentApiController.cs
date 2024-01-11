
using back_end.Data;
using back_end.Models;
using Microsoft.AspNetCore.Mvc;

namespace back_end.Controllers
{
    [Route("api/appointmentapi")]

    [ApiController]
    public class AppointmentApiController:ControllerBase
    {
        private readonly AppointmentDbContext _db;
        public AppointmentApiController(AppointmentDbContext db)
        {
            _db = db;
        }
        [HttpGet]
        public ActionResult<IEnumerable<Appointment>> GetAppointments()
        {
            return Ok(_db.appointments.ToList());
        }
        [HttpPost]

        public ActionResult<Appointment> CreateAppointment([FromBody] Appointment appointment) { 
            if(appointment == null)
            {
                return BadRequest("Invalid appointment details.pleasee provide valid appointment information");
            }
            _db.Add(appointment);
            _db.SaveChanges();
            return Ok(appointment);



        }

        
    }
}
