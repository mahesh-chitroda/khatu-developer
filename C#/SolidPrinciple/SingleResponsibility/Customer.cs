using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SolidPrinciple.SingleResponsibility
{
    class Customer
    {
        #region [Implementation of SRP]

        private FileLogger obj_ErrorLog = new FileLogger();
        
        #endregion

        void add()
        {
            try
            {
                // Database code goes here
            }
            catch (Exception ex)
            {
                #region [Voilation of SRP]
                //System.IO.File.WriteAllText(@"c:\Error.txt", ex.ToString());

                /* Responsibility of add method of class Customer is to Add the record in DB and not to log error in Error.txt
                This voilates the Single Responsibility Principle of SOLID.
                To avoid this create another class wich is responsible to log the error.*/
                #endregion

                #region [Implementation of SRP]

                obj_ErrorLog.Handle(ex.ToString());
                
                #endregion
            }
        }

        
    }
}
