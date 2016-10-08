using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StringPalindrom
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Please enter string to check palindreom");
            var str = Console.ReadLine();

            Palindrom(str);
        }

        private static void Palindrom(string str)
        {
            bool flag = true;

            for (int i = 0, j = str.Length - 1; i <= j; i++, j--)
            {
                if (str[i] != str[j])
                {
                    flag = false;
                    break;
                }
            }
            if (flag == true)
                Console.WriteLine("{0} is palindrom.",str);
            else
                Console.WriteLine("{0} is not palindrom.",str);
            Console.ReadLine();
        }
    }
}
