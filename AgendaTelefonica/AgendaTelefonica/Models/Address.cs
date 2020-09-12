using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace AgendaTelefonica.Models
{
    public class Address
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int id { get; set; }  

        [Required(ErrorMessage = "Este campo é obrigatório")]
        [MaxLength(60, ErrorMessage = "Este campo deve conter entre 3 e 60 caracteres")]
        [MinLength(3, ErrorMessage = "Este campo deve conter entre 3 e 60 caracteres")]
        public string street { get; set; }

        [Required(ErrorMessage = "Este campo é obrigatório")]
        [MaxLength(60, ErrorMessage = "Este campo deve conter entre 3 e 60 caracteres")]
        [MinLength(3, ErrorMessage = "Este campo deve conter entre 3 e 60 caracteres")]
        public string district { get; set; }

        [Required(ErrorMessage = "Este campo é obrigatório")]
        [MaxLength(8, ErrorMessage = "Este campo deve conter entre 1 e 8 caracteres")]
        [MinLength(1, ErrorMessage = "Este campo deve conter entre 1 e 8 caracteres")]
        public string number { get; set; }

        [Required(ErrorMessage = "Este campo é obrigatório")]
        [MaxLength(30, ErrorMessage = "Este campo deve conter entre 3 e 30 caracteres")]
        [MinLength(3, ErrorMessage = "Este campo deve conter entre 3 e 30 caracteres")]
        public string city { get; set; }

        [Required(ErrorMessage = "Este campo é obrigatório")]
        [StringLength(8, ErrorMessage = "Este campo deve conter 8 caracteres")]
        public string zipCode { get; set; }
    }
}
