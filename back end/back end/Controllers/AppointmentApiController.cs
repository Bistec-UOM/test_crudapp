
using back_end.Data;
using back_end.Models;
using Microsoft.AspNetCore.Mvc;

namespace back_end.Controllers
{
    [Route("api/appointmentapi")]

    [ApiController]
    public class AppointmentApiController : ControllerBase
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

        public ActionResult<Appointment> CreateAppointment([FromBody] Appointment appointment)
        {
            if (appointment == null)
            {
                return BadRequest("Invalid appointment details.pleasee provide valid appointment information");
            }
            _db.Add(appointment);
            _db.SaveChanges();
            return Ok(appointment);



        }
        [HttpDelete("{id}")]
        public ActionResult DeleteAppointment(int id)
        {
            Appointment model=_db.appointments.FirstOrDefault(x => x.Id == id);
            if(model == null)
            {
                return BadRequest();
            }
            _db.appointments.Remove(model);
            _db.SaveChanges();
            return NoContent();
        }

        [HttpPut("{id}")]
        public ActionResult<Appointment> UpdateAppointment(int id, [FromBody] Appointment appointment)
        {
            if(appointment == null)
            {
                return BadRequest("Invalid data.please provide valid appointment details");
            }
            Appointment upappointment = new();
            {
                upappointment.Id = id;
                upappointment.name = appointment.name;
                upappointment.nic=appointment.nic;
                upappointment.address= appointment.address;
                upappointment.time= appointment.time;
            }

            _db.appointments.Update(upappointment);
            _db.SaveChanges();
            return Ok(upappointment) ;



        }


    }
}
