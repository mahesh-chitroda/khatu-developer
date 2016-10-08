using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FibonasisSeries
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Please enter last number for series.\n");
            var a = Console.ReadLine();

            Console.WriteLine("Iterative Series is :\n");
            IterativeFibSeries(Convert.ToInt32(a));

            Console.ReadLine();

            Console.WriteLine("Recursive Series is :\n");
            RecursiveFibSeries(0, 1, 1, Convert.ToInt32(a));

            Console.ReadLine();
        }

        private static void RecursiveFibSeries(int prev, int current, int result, int len)
        {
            if (result <= len)
            {
                Console.Write("{0}\n", prev);
                RecursiveFibSeries(current, prev + current, result + 1, len);
            }
        }        

        private static void IterativeFibSeries(int len)
        {
            int prev = 0, current = 1, result = 0;            
            Console.WriteLine("{0}\n{1}\n",prev, current);

            for (int i = 2; i < len; i++)
            {
                result = prev + current;

                if (result <= len)                
                    Console.WriteLine(result + "\n");                
                else
                    break;

                prev = current;
                current = result;
            }            
        }
    }
}
