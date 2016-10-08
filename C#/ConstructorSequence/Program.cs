using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace ConstructorSequence
{
    public class MyBase
    {
        public MyBase()
        {
            Console.WriteLine("MyBase");
        }

      }

    public class MyDerived : MyBase
    {
        public MyDerived() 
        {
            Console.WriteLine("MyDerived");
        }
    }

    class Program
    {
        static void Main(string[] args)
        {
            Console.Clear();
            //MyBase ObjBase = new MyBase();
            MyDerived ObjDrv = new MyDerived();
            Console.ReadLine();
            // what if my constructor is parameterized
        }
    }
}
