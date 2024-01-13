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
    public class LabController : ControllerBase
    {
        private readonly LabContext _labContext;

        public LabController(LabContext labContext)
        {
            _labContext = labContext;
        }

        [HttpGet]

        public async Task<ActionResult<IEnumerable<Lab>>> GetLabTests()
        {
            if (_labContext.Labtest == null)
            {
                return NotFound();
            }
            return await _labContext.Labtest.ToListAsync();

        }

        [HttpGet("{id}")]

        public async Task<ActionResult<Lab>> GetLabTest(int id)
        {
            if (_labContext.Labtest == null)
            {
                return NotFound();
            }
            var employee = await _labContext.Labtest.FindAsync(id);
            if (employee == null)
            {
                return NotFound();
            }
            return employee;
        }

        [HttpPost]

        public async Task<ActionResult<Lab>> PostLabTest(Lab lb)
        {
            _labContext.Labtest.Add(lb);
            await _labContext.SaveChangesAsync();

            return CreatedAtAction(nameof(GetLabTest), new { id = lb.ID }, lb);
        }

        [HttpDelete("{id}")]

        public async Task<ActionResult> DeleteLabTest(int id)
        {
            if (_labContext.Labtest == null)
            {
                return NotFound();
            }
            var employee = await _labContext.Labtest.FindAsync(id);
            if (employee == null)
            {
                return NotFound();
            }
            _labContext.Labtest.Remove(employee);
            await _labContext.SaveChangesAsync();

            return Ok();
        }
    }

}
