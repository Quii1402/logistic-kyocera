using LogisticManagment.Models;
using KDTVN_Shared.Models;
using Microsoft.AspNetCore.Mvc;
using NuGet.Packaging.Licenses;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LogisticManagment.ViewComponents
{
    [ViewComponent(Name = "Warehouse")]
    public class WarehouseViewComponent : ViewComponent
    {
        public async Task<IViewComponentResult> InvokeAsync(string id)
        {

            var Warehouses = new KdtvnWarehouseModel().GetALl();
            ViewBag.Id = id;
            return View("Index",Warehouses);
        }
    }
}
