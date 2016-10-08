using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DiffInterfaceSameMethod
{
    public interface IInt1
    {
        void Add();
    }
    public interface IInt2
    {
        void Add();
    }

    class Sample : IInt1, IInt2
    {
        void IInt1.Add()
        {
            Console.WriteLine("From IInt1 Add");
        }
        void IInt2.Add()
        {
            Console.WriteLine("From IInt2 Add");
        }
    }
    class Program
    {
        static void Main(string[] args)
        {            
            IInt1 Ref1 = new Sample();
            IInt2 Ref2 = new Sample();
            
            Ref1.Add();
            Ref2.Add();
            Console.ReadLine();
        }
    }
}
