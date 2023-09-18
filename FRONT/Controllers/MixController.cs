using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Front.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MixController : ControllerBase
    {
        [Route("validProduct")]
        [HttpPost]
        public string validProduct(string product)
        {
            string flag = "Invalid Prod TP";
            if (product != null && !string.IsNullOrEmpty(product))
            {
                switch (product)
                {
                    case "1": flag = "Milk";
                        break;
                    case "2": flag = "Orange";
                        break;
                    default:
                        flag = "Invalid Prod TP";
                        break;
                }

            }

            return flag;
        }
    }
}
