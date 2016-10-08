using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace SameMethodInInheritance
{
    public class A
    {
        public int Add(int a, int b)
        {
            return a + b;
        }
    }
    public class B : A 
    {
        public int Add(int a, int b)
        {
            return a + b;
        }
    }
    class Program
    {
        static void Main(string[] args)
        {
            B obj = new B();
            obj.Add(1,2);
        }
    }
}
