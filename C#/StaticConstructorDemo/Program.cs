using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace StaticConstructorDemo
{
    #region [Non static Class and static Constructor]

    //class Sample
    //{
    //    public string param1, param2;

    //    static Sample()
    //    {
    //        Console.WriteLine("Static Constructor");
    //    }
    //    public Sample()
    //    {
    //        param1 = "Sample";
    //        param2 = "Instance Constructor";
    //    }
    //}

    //class Program
    //{
    //    static void Main(string[] args)
    //    {
    //        // Here Both Static and instance constructors are invoked for first instance
    //        Sample obj = new Sample();
    //        Console.WriteLine(obj.param1 + " " + obj.param2);
    //        // Here only instance constructor will be invoked
    //        Sample obj1 = new Sample();
    //        Console.WriteLine(obj1.param1 + " " + obj1.param2);
    //        Console.ReadLine();
    //    }
    //}

    #endregion

    #region [static class and static constructor]

    static class Sample
    {
        public static string param1, param2;
        static Sample()
        {
            Console.WriteLine("Static Constructor");
        }
    }
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine(Sample.param1 + " " + Sample.param2);
            Console.ReadLine();
        }
    }

    #endregion
}
