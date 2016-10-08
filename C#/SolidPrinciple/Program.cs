using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
#region [Implementation of Dependency Inversion]
//using SolidPrinciple.DependencyInversion;
#endregion

#region [Implementation of Interface Segregation]

using SolidPrinciple.InterfaceSegregation;

#endregion

namespace SolidPrinciple
{
    class Program
    {
        static void Main(string[] args)
        {
            #region [Implementation of Dependency Inversion]
            
            //IDatabaseV1 Obj = new Customer(new EmailLogger());
            //Obj.add();

            #endregion

            #region [Implementation of Interface Segregation]

            //IDatabase IObj = new Customer();
            //IObj.add();

            //IDatabaseRead I2Obj = new CustomerWithRead();
            //I2Obj.read();

            #endregion
            
            
        }
    }
}
