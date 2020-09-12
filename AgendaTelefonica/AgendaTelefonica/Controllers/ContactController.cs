using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AgendaTelefonica.Data;
using AgendaTelefonica.Models;
using AgendaTelefonica.Models.DTO;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace AgendaTelefonica.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContactController : ControllerBase
    {
        private DataContext dataContext;
        public ContactController([FromServices] DataContext context)
        {
            this.dataContext = context;
        }

        // GET: api/<ContactController>
        [HttpGet]
        public async Task<ActionResult<List<Contact>>> FindAll()
        {
            return await dataContext.Contacts.Include(x => x.address).ToListAsync();
        }

        // GET api/<ContactController>/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Contact>> FindById(int id)
        {
            return await dataContext.Contacts.Include(x => x.address).FirstOrDefaultAsync(x => x.id == id);
        }

        // POST api/<ContactController>
        [HttpPost]
        public async Task<ActionResult<Contact>> Save([FromBody] ContactDTO contact)
        {
            if (!ModelState.IsValid) return BadRequest(ModelState);

            var address = dataContext.Addresses.Add(new Address
            {
                street = contact.street,
                district = contact.district,
                number = contact.number,
                city = contact.city,
                zipCode = contact.zipCode
            });

            var newContact = dataContext.Contacts.Add(new Contact { 
                name = contact.name,
                phone = contact.phone,
                addressId = address.Entity.id
            });
            await dataContext.SaveChangesAsync();
            return newContact.Entity;
        }

        // PUT api/<ContactController>/5
        [HttpPut("{id}")]
        public async Task<ActionResult<Contact>> Put(int id, [FromBody] ContactDTO contact)
        {
            var currentContact = await dataContext.Contacts.Include(x => x.address).FirstOrDefaultAsync(x => x.id == id);
            if (currentContact == null) {
                return BadRequest(ModelState);
            }
            
            currentContact.address.street = contact.street;
            currentContact.address.district = contact.district;
            currentContact.address.number = contact.number;
            currentContact.address.city = contact.city;
            currentContact.address.zipCode = contact.zipCode;

            dataContext.Addresses.Update(currentContact.address);

            currentContact.name = contact.name;
            currentContact.phone = contact.phone;

             dataContext.Contacts.Update(currentContact);
             await dataContext.SaveChangesAsync();
             return currentContact;
            
        }

        // DELETE api/<ContactController>/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Contact>> Delete(int id)
        {
            dataContext.Contacts.Remove(dataContext.Contacts.FirstOrDefault(contact => contact.id == id));
            await dataContext.SaveChangesAsync();
            return Ok();
        }
    }
}
