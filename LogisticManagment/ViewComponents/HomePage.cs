using Microsoft.AspNetCore.Mvc;
using NuGet.Packaging.Licenses;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LogisticManagment.ViewComponents
{
    [ViewComponent(Name = "HomePage")]
    public class QuanLyhosoPageComponent : ViewComponent
    {
        public async Task<IViewComponentResult> InvokeAsync()
        {
           
            return View("Index");
        }
    }
}
