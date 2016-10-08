using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SolidPrinciple.DependencyInversion
{
    class Customer :  IDatabaseV1 //IDatabase
    {
        #region [Voilation of Dependancy Inversion]

        //private ILogger IObj;        

        //public void add(int Exhandle)
        //{
        //    try
        //    {
        //        // Database code goes here
        //    }
        //    catch (Exception ex)
        //    {                
        //        if (Exhandle == 1)
        //        {
        //            IObj = new FileLogger();
        //        }
        //        else if (Exhandle == 1)
        //        {
        //            IObj = new EmailLogger();
        //        }
        //        else
        //        {
        //            IObj = new EventViewerLogger();
        //        }
        //        IObj.Handle(ex);                
        //    }
        //}

        #endregion

        #region [Implementation Of Dependency Inversion]

        private ILogger IObj;     

        public Customer(ILogger i)
        {
            IObj = i;
        }

        public void add()
        {

            try
            {

            }
            catch (Exception ex)
            {
                IObj.Handle(ex);
            }
        }

        #endregion
        
    }
}
