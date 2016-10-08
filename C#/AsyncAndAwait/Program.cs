using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace AsyncAndAwait
{
    class Program
    {
        #region[Async And Await]

        //static void Main(string[] args)
        //{
        //    Example();

        //    string result = Console.ReadLine();
        //    Console.WriteLine("You typed: " + result);
        //    Console.ReadLine();
        //}
        
        //private static async void Example()
        //{
        //    // This method runs asynchronously.
        //    int t = await Task.Run(() => Allocate());
        //    Console.WriteLine("Compute: " + t);            
        //}

        //static int Allocate()
        //{
        //    // Compute total count of digits in strings.
        //    Thread.Sleep(10000);
        //    return 10;
        //}

        #endregion

        #region [Task]

        static void Main(string[] args)
        {
            // Calls to TaskOfTResult_MethodAsync     
            example();

            string Result = Console.ReadLine();
            Console.WriteLine("You entered : {0}", Result);
            Console.ReadLine();
        }

        static async void example()
        {
            Task<int> task = Allocate();

            int x = await task;
            Console.WriteLine("Async call to Task :{0}", x);
        }
        static async Task<int> Allocate()
        {
            // Compute total count of digits in strings.
            int returnResult = 15;
            await Task.Delay(10000);
            return returnResult;      
        }        
        #endregion
    }
}
