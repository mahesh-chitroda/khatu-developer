using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Runtime.CompilerServices;

namespace CallerInfo
{
    class SampleCallerInfo
    {
        internal void tracemessage(string message,
            [CallerMemberName] string memberName = "", [CallerFilePath] string FilePath = "", [CallerLineNumber] int LineNumber = 0)
        {
            Console.WriteLine("Message : {0}", message);
            Console.WriteLine("Caller's Name : {0}", memberName);
            Console.WriteLine("Caller's Path : {0}", FilePath);
            Console.WriteLine("Call at Line number : {0}", LineNumber);
        }
    }

    class Program
    {
        static void Main(string[] args)
        {
            SampleCallerInfo Obj = new SampleCallerInfo();
            Obj.tracemessage("Hi! I am Ankush.");
            Console.ReadLine();
        }
    }
}
