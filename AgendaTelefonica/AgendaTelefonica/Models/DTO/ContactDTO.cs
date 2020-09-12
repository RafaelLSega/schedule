using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AgendaTelefonica.Models.DTO
{
    public class ContactDTO
    {
        public string name { get; set; }
        public string phone { get; set; }

        public string street { get; set; }
        public string district { get; set; }
        public string number { get; set; }
        public string city { get; set; }
        public string zipCode { get; set; }
    }
}
