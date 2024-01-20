using back_end.Data;
using back_end.Models.Dto;
using back_end.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace back_end.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DoctorController : ControllerBase
    {
        private readonly PharmacyDBContext _DoctorContext;

        public DoctorController(PharmacyDBContext DoctorContext)
        {
            _DoctorContext = DoctorContext;
        }

        [HttpGet]

        public async Task<ActionResult<IEnumerable<Doctor>>> Getpatients()
        {
            if (_DoctorContext.patients == null)
            {
                return NotFound();
            }
            return await _DoctorContext.patients.ToListAsync();

        }

        [HttpGet("{id}")]

        public async Task<ActionResult<Doctor>> Getpatient(int id)
        {
            if (_DoctorContext.patients == null)
            {
                return NotFound();
            }
            var employee = await _DoctorContext.patients.FindAsync(id);
            if (employee == null)
            {
                return NotFound();
            }
            return employee;
        }

        [HttpPost]

        public async Task<ActionResult<Doctor>> Postpatient(Doctor x)
        {
            _DoctorContext.patients.Add(x);
            await _DoctorContext.SaveChangesAsync();

            return CreatedAtAction(nameof(Getpatient), new { id = x.ID }, x);
        }

        [HttpDelete("{id}")]

        public async Task<ActionResult> Deletepatient(int id)
        {
            if (_DoctorContext.patients == null)
            {
                return NotFound();
            }
            var employee = await _DoctorContext.patients.FindAsync(id);
            if (employee == null)
            {
                return NotFound();
            }
            _DoctorContext.patients.Remove(employee);
            await _DoctorContext.SaveChangesAsync();

            return Ok();
        }
       

        }
}