using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BKproyecto2.Models;
using Microsoft.EntityFrameworkCore;
namespace BKproyecto2
{
    public class AplicationDBContext : DbContext
    {
        public AplicationDBContext(DbContextOptions<AplicationDBContext> options) : base(options) { 
        
        
        }

        public DbSet<IngresoAprendices> IngresoAprendices { get; set; }


    }
}
