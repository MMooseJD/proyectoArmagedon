using Microsoft.AspNetCore.Mvc;
using System;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BKproyecto2.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace BKproyecto2.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AprendizController : ControllerBase
    {

        private readonly AplicationDBContext _context;
        public AprendizController(AplicationDBContext context) {

            _context = context;
        }

            
        // GET: api/<AprendizController>
        [HttpGet]
        public async Task<ActionResult> Get()
        {
            try
            {
                var listAprendices = await _context.IngresoAprendices.ToListAsync();
                return Ok(listAprendices);
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }
        }

        // GET api/<AprendizController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<AprendizController>
        [HttpPost]
        public async Task<ActionResult> Post([FromBody] IngresoAprendices aprendices)
        {
            try
            {
                _context.Add(aprendices);
                await _context.SaveChangesAsync();
                return Ok(aprendices);
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }

        }

        // PUT api/<AprendizController>/5
        [HttpPut("{id}")]
        public async Task<ActionResult> Put(int id, [FromBody] IngresoAprendices aprendices)
        {
            try
            {
                if (id!= aprendices.Id){

                    return NotFound();
                
                }

                _context.Update(aprendices);
                await _context.SaveChangesAsync();
                return Ok(new { message = "el aprendiz fue actualizado correctamente" });
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }
        }

        // DELETE api/<AprendizController>/5
        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(int id)
        {
            try
            {
                var aprendiz = await _context.IngresoAprendices.FindAsync(id);
                if(aprendiz == null)
                {
                    return NotFound();
                }

                _context.IngresoAprendices.Remove(aprendiz);
                await _context.SaveChangesAsync();
                return Ok(new { message = "La tarjeta fue eliminada correctamente" });
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }
        }
    }
}
