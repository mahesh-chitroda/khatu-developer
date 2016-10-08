using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace VarVsDynamic
{
    class Program
    {
        static void Main(string[] args)
        {
            var i = Program.Add(5, 6, "String");
        }

         public static dynamic Add(int a,int b,string dataType)
        {
            if (dataType=="String")
            {
                return "Mahesh";
             }
            else
            {
                return a + b;
            }
           
        }
    }
}
