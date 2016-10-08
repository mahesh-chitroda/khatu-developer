using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CircularRef
{
    class A :B
    { 
    
    }
    class B : A
    { 
        //Circula base class dependancy.
    }

    class Program 
    {
        static void Main(string[] args)
        {
        }
    }
}
