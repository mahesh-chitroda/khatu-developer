using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace stringFundas
{
    class Program
    {

        static void Main(string[] args)
        {
            string a = "xyz";
            String b = "pqr";

            b = "qqq";

            Console.WriteLine(a + " " + b);
            Console.ReadLine();

            // No difference in stirng and String both are reffer to same class System.String
        }
    }
}
