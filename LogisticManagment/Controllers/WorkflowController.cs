using Microsoft.AspNetCore.Mvc;

namespace LogisticManagment.Controllers
{
    public class WorkflowController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
