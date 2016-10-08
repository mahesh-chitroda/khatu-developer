using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NamedAndOptionalParam
{
    #region [Named Parameter]
    //class A
    //{
    //    internal int Add(int Num1, int Num2)
    //    {
    //        return Num1 + Num2;
    //    }
    //}

    //class Program
    //{
    //    static void Main(string[] args)
    //    {
    //        A Obj = new A();
    //        int sum = Obj.Add(Num2: 4, Num1: 6);
    //        Console.WriteLine("Sum is : {0}", sum);
    //        Console.ReadLine();
    //    }
    //}
    #endregion

    #region [Optional Parameter]

    class A
    {
        internal int Add(int Num1, int Num2=1)
        {
            return Num1 + Num2;
        }
    }

    class Program
    {
        static void Main(string[] args)
        {
            A Obj = new A();
            int sum = Obj.Add(4);
            Console.WriteLine("Sum is : {0}", sum);
            Console.ReadLine();
        }
    
    }
    #endregion
}
