using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace ConditionalOperator
{
    class Program
    {
        private static bool Method1()
        {
            Console.WriteLine("Method 1");
            return false;
        }

        private static bool Method2()
        {
            Console.WriteLine("Method 2");
            return true;
        }

        static void Main(string[] args)
        {
            int a = 0;
            int b = 1;
            if (Method1() & Method2())
            {

            }
            //if (Method1() && Method2())
            //{

            //}
            Console.ReadLine();
        }

    }
}
