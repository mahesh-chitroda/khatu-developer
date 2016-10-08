using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Alais = Assembly1.InternalToOtherAssembly;

namespace ClassAlias
{    
    class Program 
    {
        static void Main(string[] args)
        {
            Alais Obj = new Alais();
            try
            {                                
                Console.WriteLine("Multiplication is :{0}",Obj.multiply(2, 3));
                Console.ReadLine();
            }
            catch (Exception)
            {
            }
            finally
            {
                Obj.Dispose();
            }
        }        
    }
}
