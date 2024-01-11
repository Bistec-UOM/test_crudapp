using back_end.Data;
using back_end.Models.Dto;
using back_end.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace back_end.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdminController : ControllerBase
    {
       

          private readonly ApplicationDbContext _db;
        //for admin things
    
        public AdminController(ApplicationDbContext db)
            {
                _db = db;
            }

            [HttpGet]
            public ActionResult<IEnumerable<Admin_DataDto>> GetData()
            {
                return Ok(_db.admin_Datas);
            }
            [HttpPost]
            public ActionResult<Admin_DataDto> CreateAdmin([FromBody] Admin_DataDto NDTO)
            {
                //to create DTo after thing
                Admin_Data model = new()
                {
                    Id = NDTO.Id,
                    firstName = NDTO.firstName,
                    lastName = NDTO.lastName,
                    email = NDTO.email,
                    phnNumber = NDTO.phnNumber,
                    dateOfBirth = NDTO.dateOfBirth,
                    password = NDTO.password
                };
                _db.admin_Datas.Add(model);
                _db.SaveChanges();

                return Ok(NDTO);
            }
            [HttpDelete("{id:int}")]
            public IActionResult DeleteAdmin(int id)
            {

                var dts = _db.admin_Datas.FirstOrDefault(u => u.Id == id);

                if (dts != null)
                {
                    _db.admin_Datas.Remove(dts);
                    _db.SaveChanges();
                    return NoContent();
                    _db.admin_Datas.Remove(dts);
                }
                else
                {
                }
                _db.SaveChanges();
                return NoContent();
            }
        

    }
}


