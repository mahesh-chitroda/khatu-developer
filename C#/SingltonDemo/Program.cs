using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace SingltonDemo
{
    #region [Normal Singlton]
    //public class Singleton
    //{
    //    private static Singleton instance;        

    //    private Singleton() { Console.WriteLine("Hi ! I am Constructor.")}

    //    public static Singleton Instance
    //    {
    //        get
    //        {                
    //            if (instance == null)
    //            {
    //                instance = new Singleton();
    //            }
    //            return instance;                
    //        }
    //    }
    //}

    //class Program
    //{
    //    static void Main(string[] args)
    //    {
    //        var a = Singleton.Instance;
    //        var b = Singleton.Instance;
    //        Console.ReadLine();
    //    }
    //}
    #endregion

    #region [Thread Safe Singlton]

    public class Singleton
    {
        private static Singleton instance;
        private static readonly object LockObj = new object();

        private Singleton() { Console.WriteLine("Hi ! I am Constructor."); }

        public static Singleton Instance
        {
            get
            {
                lock (LockObj)
                {
                    if (instance == null)
                    {
                        instance = new Singleton();
                    }
                    return instance;
                }
            }
        }
    }

    class Program
    {
        static void Main(string[] args)
        {
            var a = Singleton.Instance;
            var b = Singleton.Instance;
            Console.ReadLine();
        }
    }

    #endregion
}
