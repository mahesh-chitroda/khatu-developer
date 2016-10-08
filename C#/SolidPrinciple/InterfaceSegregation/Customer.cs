using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SolidPrinciple.InterfaceSegregation
{
    class Customer : IDatabase
    {

        public void add()
        {
            
        }
    }

    class CustomerWithRead : IDatabase, IDatabaseRead
    {

        public void add()
        {
            
        }

        public void read()
        {
            
        }
    }
}
