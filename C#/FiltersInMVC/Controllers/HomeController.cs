using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using FiltersInMVC.CustomAttribute;

namespace FiltersInMVC.Controllers
{
    [CustAuthFilter]
    public class HomeController : Controller
    {
        //
        // GET: /Home/                
        [CustomActionFilter]
        [CustExceptionFilter]
        public ActionResult Index()
        {            
            return View();
        }

        [OutputCache(Duration = 10)]
        public ActionResult OutPutTest()
        {
            ViewBag.Date = DateTime.Now.ToString("T");
            return View();
        }

    }
}
