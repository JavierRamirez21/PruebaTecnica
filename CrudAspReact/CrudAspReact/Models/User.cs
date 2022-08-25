using System;
using System.Collections.Generic;

namespace CrudAspReact.Models
{
    public partial class User
    {
        public int Id { get; set; }
        public string Nombre { get; set; } 
        public string Apellido { get; set; } 
        public string Profesion { get; set; } 
        public int Dui { get; set; }
    }
}
