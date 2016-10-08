using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Assembly1
{
    public class Singleton
    {
        private static Singleton instance;

        private Singleton() { }

        public static Singleton Instance
        {
            get
            {
                if (instance == null)
                    instance = new Singleton();
                return instance;
            }
        }

        public int add(int a, int b)
        {
            return a + b;
        }
    }

    public class SampleDemo
    {
        public void Show(string message)
        {
            Console.WriteLine(message);
        }
    }
}
