using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SolidPrinciple.DependencyInversion
{
    class EmailLogger : ILogger
    {
        public void Handle(Exception error)
        {
            // Logic to Log Email Error
        }
    }
}
