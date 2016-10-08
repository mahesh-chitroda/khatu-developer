using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace SubstringInString
{
    class Program
    {
        string str = "abcderfbcdhgjdcsbhfgbcd";
        string search = "bcd";
        int count = 0;
        static void Main(string[] args)
        {
            bool flag = false;
            Program Obj = new Program();

            for (int i = 0; i <= Obj.str.Length - Obj.search.Length; i++)
            {
                for (int j = i; j < i + Obj.search.Length; j++)
                {
                    flag = true;

                    if (Obj.str[j] != Obj.search[j - i])
                    {
                        flag = false;
                        break;
                    }
                }

                if (flag == true)
                {
                    Obj.count++;
                }
            }
            Console.WriteLine("Count is {0}", Obj.count);
            Console.ReadLine();
        }
    }
}
