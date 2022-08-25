using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using CrudAspReact.Models;
using Microsoft.EntityFrameworkCore;

namespace CrudAspReact.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly TestContext _dbcontext;
        public UsersController(TestContext dbcontext)
        {
            this._dbcontext = dbcontext;
        }

        [HttpGet]
        [Route("Lista")]
        public async Task<IActionResult> Lista()
        {
            List<User> lista = await _dbcontext.Users.OrderByDescending(c => c.Id).ToListAsync();

            return StatusCode(StatusCodes.Status200OK, lista);
        }
        [HttpPost]
        [Route("Guardar")]
        public async Task<IActionResult> Guardar([FromBody] User request)
        {
             await _dbcontext.Users.AddAsync(request);
             await _dbcontext.SaveChangesAsync();

            return StatusCode(StatusCodes.Status200OK, "ok");
        }
        [HttpPut]
        [Route("Editar")]
        public async Task<IActionResult> Editar([FromBody] User request)
        {
             _dbcontext.Users.Update(request);
            await _dbcontext.SaveChangesAsync();

            return StatusCode(StatusCodes.Status200OK, "ok");
        }

        [HttpDelete]
        [Route("Eliminar/{id:int}")]
        public async Task<IActionResult> Eliminar(int id)
        {
            User user=_dbcontext.Users.Find(id);
            _dbcontext.Users.Remove(user);
            await _dbcontext.SaveChangesAsync();
            return StatusCode(StatusCodes.Status200OK, "ok");
        }


    }
}
