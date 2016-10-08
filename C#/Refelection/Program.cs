using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Reflection;
using System.Threading;

namespace Refelection
{
    class Program 
    {
        #region [Load Assembly and find Type inside it]
        //static void Main(string[] args)
        //{
        //    string AssemblyPath = @"D:\Ankush\Study\OverridingDemo\Assembly1\bin\Debug\Assembly1.dll"; 

        //    LoadAssemAndShowPublicTypes(AssemblyPath);

        //    Console.ReadLine();
        //}

        //public static void LoadAssemAndShowPublicTypes(string AssemblyPath)
        //{
        //    try
        //    {
        //        // Explicitly load an assembly in to this AppDomain
        //        Assembly Obj = Assembly.LoadFrom(AssemblyPath);

        //        // Execute this loop once for each Type
        //        // publicly-exported from the loaded assembly
        //        foreach (Type t in Obj.ExportedTypes)
        //        {
        //            // Display the full name of the type
        //            Console.WriteLine(t.FullName);
        //        }
        //    }
        //    catch (Exception ex)
        //    {                                
        //    }
        //}
        #endregion

        #region [Execute Function of another Assembly]

        static void Main(string[] args)
        {
            string AssemblyPath = @"D:\Ankush\Study\OverridingDemo\Assembly1\bin\Debug\Assembly1.dll";

            LoadAssemAndExecuteMethod(AssemblyPath);

            Console.ReadLine();
        }

        private static void LoadAssemAndExecuteMethod(string AssemblyPath)
        {
            try
            {
                //Explicitly load an assembly in to this AppDomain
                Assembly Obj = Assembly.LoadFrom(AssemblyPath);
                var type = Obj.GetType("Assembly1.SampleDemo");
                var MethodInfo = type.GetMethod("Show");

                if (MethodInfo != null)
                {
                    ParameterInfo[] parameters = MethodInfo.GetParameters();
                    var Class_Obj = Activator.CreateInstance(type);

                    if (parameters.Length == 0)
                    {
                        MethodInfo.Invoke(Class_Obj, null);
                    }
                    else
                    {
                        object[] parameter = new object[] { "Hi I was called using Reflection." };
                        MethodInfo.Invoke(Class_Obj, parameter);
                    }
                }
            }
            catch (Exception ex)
            {                                
            }          
            
        }

        #endregion
    }
}
