using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace SealedDemo
{
    #region [Sealed Class]
    //sealed class SampleA
    //{
    //    public void Show()
    //    {
    //        Console.WriteLine("Sample A Test Method");
    //    }
    //}
    //class SampleB : SampleA
    //{
    //    public void Show()
    //    {
    //        Console.WriteLine("Sample B Test Method");
    //    }
    //}
    //class Program
    //{
    //    static void Main(string[] args)
    //    {
    //        SampleA a = new SampleA();
    //        SampleB b = new SampleB();
    //        a.Show();
    //        b.Show();
    //        Console.ReadLine();
    //    }
    //}
    #endregion

    #region [Sealed Method]

    public class BaseClass
    {
        public virtual void Display()
        {
            Console.WriteLine("Virtual method");
        }
    }

    public class DerivedClass : BaseClass
    {
        // Now the display method have been sealed and can;t be overridden
        public override sealed void Display()
        {
            Console.WriteLine("Sealed method");
        }
    }
    //public class DerivedLevel2 : DerivedClass
    //{
    //    public override void Display()
    //    {
    //        Console.WriteLine("Sealed method");
    //    }
    //}
    public class program
    {
        static void Main(string[] args)
        {

            BaseClass obj1 = new BaseClass();
            DerivedClass obj2 = new DerivedClass();
            obj1.Display();
            obj2.Display();
            obj1 = new DerivedClass();
            obj1.Display();
            Console.ReadLine();
        }
    }

    #endregion
}
