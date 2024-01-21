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
    public class PharmacyController : ControllerBase
    {
        private readonly PharmacyDbContext _PharmacyContext;
        public PharmacyController(PharmacyDbContext PharmacyContext)
        {
            _PharmacyContext = PharmacyContext;
        }
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Pharmacy>>> GetMedicineList()
        {
            if (_PharmacyContext.Pharmacy_table == null)
            {
                return NotFound();
            }
            return await _PharmacyContext.Pharmacy_table.ToListAsync();

        }
        [HttpPost]
        public async Task<ActionResult<Pharmacy>> Postmedicine(Pharmacy p1)
        {
            _PharmacyContext.Pharmacy_table.Add(p1);
            await _PharmacyContext.SaveChangesAsync();

            return CreatedAtAction(nameof(GetMedicine), new { id = p1.Id }, p1);
        }
        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteMedicine(int id)
        {
            if (_PharmacyContext.Pharmacy_table == null)
            {
                return NotFound();
            }
            var x = await _PharmacyContext.Pharmacy_table.FindAsync(id);
            if (x == null)
            {
                return NotFound();
            }
            _PharmacyContext.Pharmacy_table.Remove(x);
            await _PharmacyContext.SaveChangesAsync();

            return Ok();
        }
        [HttpGet("{id}")]

        public async Task<ActionResult<Pharmacy>> GetMedicine(int id)
        {
            if (_PharmacyContext.Pharmacy_table == null)
            {
                return NotFound();
            }
            var y = await _PharmacyContext.Pharmacy_table.FindAsync(id);
            if (y == null)
            {
                return NotFound();
            }
            return y;
        }



    }
}
