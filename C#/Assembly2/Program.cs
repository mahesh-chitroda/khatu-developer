using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Assembly1;

namespace Assembly2
{    
    class Program
    {
        static void Main(string[] args)
        {            
            var a = Singleton.Instance;
            Console.WriteLine("Sum is : {0}", a.add(3, 4));
            Console.ReadLine();

            var b = new InternalToOtherAssembly();
            Console.WriteLine("Multiplication is : {0}", b.multiply(6, 2));
            Console.ReadLine();
        }
    }
}
