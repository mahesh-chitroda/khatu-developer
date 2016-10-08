using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace FiltersInMVC.CustomAttribute
{
    public class CustAuthFilter : AuthorizeAttribute
    {
        public override void OnAuthorization(AuthorizationContext filterContext)
        {
            filterContext.Controller.ViewBag.AutherizationMessage = "Custom Authorization: Message from OnAuthorization method.";
        }
        protected override void HandleUnauthorizedRequest(AuthorizationContext filterContext)
        {
            filterContext.Controller.ViewBag.AutherizationMessage = "Custom Authorization: Message from OnAuthorization method.";
        }
    }
}