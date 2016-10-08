using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StringToIntWithoutExc
{
    class Program
    {
        static void Main(string[] args)
        {
            string str = "Hello";
            int x = 0;
            var a = int.TryParse(str, out x);
            if(a)
                Console.WriteLine("Output : {0}", x);
            else
                Console.WriteLine("Output : {0}", x);
            Console.ReadLine();
        }
    }
}
