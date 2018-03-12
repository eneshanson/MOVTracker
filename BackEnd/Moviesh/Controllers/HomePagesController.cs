using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Moviesh.Model;

namespace Moviesh.Controllers
{
    [Produces("application/json")]
    [Route("api/HomePages")]
    public class HomePagesController : Controller
    {
        private readonly MovieContext _context;

        public HomePagesController(MovieContext context)
        {
            _context = context;
        }

        // GET: api/HomePages
        [HttpGet]
        public IEnumerable<HomePage> GetHomePage()
        {
            return _context.HomePage.ToList();
        }

        // GET: api/HomePages/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetHomePage([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var homePage = await _context.HomePage.SingleOrDefaultAsync(m => m.Id == id);

            if (homePage == null)
            {
                return NotFound();
            }

            return Ok(homePage);
        }

        // PUT: api/HomePages/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutHomePage([FromRoute] int id, [FromBody] HomePage homePage)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != homePage.Id)
            {
                return BadRequest();
            }

            _context.Entry(homePage).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!HomePageExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/HomePages
        [HttpPost]
        public async Task<IActionResult> PostHomePage([FromBody] HomePage homePage)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.HomePage.Add(homePage);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (HomePageExists(homePage.Id))
                {
                    return new StatusCodeResult(StatusCodes.Status409Conflict);
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetHomePage", new { id = homePage.Id }, homePage);
        }

        // DELETE: api/HomePages/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteHomePage([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var homePage = await _context.HomePage.SingleOrDefaultAsync(m => m.Id == id);
            if (homePage == null)
            {
                return NotFound();
            }

            _context.HomePage.Remove(homePage);
            await _context.SaveChangesAsync();

            return Ok(homePage);
        }

        private bool HomePageExists(int id)
        {
            return _context.HomePage.Any(e => e.Id == id);
        }
    }
}