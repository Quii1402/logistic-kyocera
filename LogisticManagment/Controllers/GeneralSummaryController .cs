using LogisticManagment.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace LogisticManagment.Controllers
{
    public class GeneralSummaryController : BaseController<GeneralSummaryController>
    {
        private readonly ILogger<GeneralSummaryController> _logger;

        public GeneralSummaryController(ILogger<GeneralSummaryController> logger)
        {
            _logger = logger;
        }
        GeneralSummaryModel dt = new GeneralSummaryModel();

        public IActionResult Index()
        {
            return View();
        }
        //lấy dữ liệu GeneralSummaryModel
        [HttpPost]
        public IActionResult GetListGSM(GeneralSummaryModel generalsummary)
        {
            var result = dt.GetGeneralSummary(generalsummary);
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