using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SolidPrinciple.DependencyInversion
{
    class FileLogger : ILogger
    {
        public void Handle(Exception error)
        {
            // Logic to log File Error
        }
    }
}
