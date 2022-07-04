using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BKproyecto2.Models
{
    public class IngresoAprendices
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Documento { get; set; }
        [Required]
        public string Nombres { get; set; }
        [Required]
        public string Apellidos { get; set; }
        [Required]
        public string Email { get; set; }
        [Required]
        public string Celular { get; set; }
        [Required]
        public string Programa { get; set; }
        [Required]
        public string Jornada { get; set; }
    }
}
