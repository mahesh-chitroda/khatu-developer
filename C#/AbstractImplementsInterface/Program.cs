using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AbstractImplementsInterface
{
    public interface IInterface
    {
        void CommonMethod();
        void SpecificMethod();
    }

    public abstract class CommonImpl : IInterface
    {
        public void CommonMethod() // note: it isn't even virtual here!
        {
            Console.WriteLine("CommonImpl.CommonMethod()");
        }
        public abstract void SpecificMethod();
    }

    class Concrete : CommonImpl
    {
        public override void SpecificMethod()
        {
            Console.WriteLine("Implementing abstract method");
        }
    }

    class Program
    {        
        static void Main(string[] args)
        {
            Concrete Obj = new Concrete();
            Obj.SpecificMethod();
            Console.ReadLine();
        }
    }
}
