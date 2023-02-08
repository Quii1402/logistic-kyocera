using LogisticManagment.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace LogisticManagment.Controllers
{
    public class DetailSummaryController : BaseController<DetailSummaryController>
    {
        private readonly ILogger<DetailSummaryController> _logger;

        public DetailSummaryController(ILogger<DetailSummaryController> logger)
        {
            _logger = logger;
        }
        DetailSummaryModel dt = new DetailSummaryModel();

        public IActionResult Index()
        {
            return View();
        }
//lấy dữ liệu DetailSummaryModel
        [HttpPost]
        public IActionResult GetDetailSummary(DetailSummaryModel detailsummary)
        {
            var result = dt.GetDetailSummaryModel(detailsummary);
            return Json(result);
        }
        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}