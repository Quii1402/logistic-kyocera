using LogisticManagment.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using Newtonsoft.Json;
using KDTVN_Shared.Helper;
using KDTVN_Shared.Models;
using System.Data;
using OfficeOpenXml;

namespace LogisticManagment.Controllers
{
    public class MasterdataController : BaseController<MasterdataController>
    {
        private readonly ILogger<MasterdataController> _logger;

        public MasterdataController(ILogger<MasterdataController> logger)
        {
            _logger = logger;
        }

        MasterData md = new MasterData();


        public IActionResult Index()
        {

            return View();
        }
        public IActionResult Create()
        {

            return View();
        }


        //lấy dữ liệu MasterData
        [HttpPost]
        public IActionResult GetList(MasterData masterData)
        {
            var result = md.GetMasterData(masterData);
            return Json(result);
        }

        //lấy dữ liệu WarehouseWarehouseInUse
        [HttpPost]
        public IActionResult GetWarehouseByID(string[] stockName, int? masterId)
        {
            List<MasterData> result = new List<MasterData>();
            for (int i = 0; i < stockName.Length; i++)
            {
                var temp = md.GetWarehouseWarehouseByID(stockName[i], masterId);
                if (temp.Count > 0)
                {
                    temp[0].NameKdtvnWarehouse = stockName[i];
                    result.Add(temp[0]);
                }

            }


            return Json(result);
        }



        //thêm dữ liệu  MasterData
        [HttpPost]
        public IActionResult InsertQLHS(MasterData masterData)
        {
            masterData.CreateBy = SignInAccount.username;
            var response = new MasterData().InsertMasterData(masterData);
            return new ObjectResult(new { type = response.Code == 1 ? "success" : "error", message = response.Msg });
        }


        //thêm dữ liệu  WarehouseInUse
        [HttpPost]
        public IActionResult InsertWHIU(WarehouseInUseModel warehouseinuse)
        {
            warehouseinuse.CreateBy = SignInAccount.username;
            var response = new WarehouseInUseModel().InsertWarehouseInUse(warehouseinuse);
            return new ObjectResult(new { type = response.Code == 1 ? "success" : "error", message = response.Msg });
        }

        //Update dữ liệu  MasterData
        [HttpPut]
        public IActionResult UpdateQLHS(MasterData masterData)
        {
            masterData.CreateBy = SignInAccount.username;
            masterData.Status = 1;

            var response = new MasterData().UpdateMasterData(masterData);
            return new ObjectResult(new { type = response.Code == 1 ? "success" : "error", message = response.Msg });
        }

        //Khóa dữ liệu  MasterData
        [HttpPut]
        public IActionResult btnLock(MasterData masterData)
        {
            masterData.Status = 2;
            masterData.CreateBy = SignInAccount.username;
            var response = new MasterData().ChangeStatusMasterData(masterData);
            return new ObjectResult(new { type = response.Code == 1 ? "success" : "error", message = response.Msg });

        }
        // Bỏ khóa masterdata
        public IActionResult btnUnLock(MasterData masterData)
        {
            masterData.Status = 1;
            masterData.CreateBy = SignInAccount.username;
            var response = new MasterData().ChangeStatusMasterData(masterData);
            return new ObjectResult(new { type = response.Code == 1 ? "success" : "error", message = response.Msg });

        }


        //Xoa du lieu  MasterData
        [HttpDelete]
        public IActionResult DeleteQLHS([FromForm] MasterData masterData)
        {
            var response = new MasterData().DeleteMasterData(masterData);
            return new ObjectResult(new { type = response.Code == 1 ? "success" : "error", message = response.Msg });
        }

        

//        [HttpPost]
//        public string ExportExcel(int id)
//        {

//            _logger.LogInformation("ExportExcel");

//            string res = string.Empty;
//            var fileTemplatePath = string.Empty;
//#if DEBUG
//            fileTemplatePath = @$"\wwwroot\templates\tmp.xlsm";
//            var filePath = Path.Combine(Directory.GetCurrentDirectory() + fileTemplatePath);
//#else
//            fileTemplatePath = @$"\wwwroot\templates\tmp.xlsm";
//            var filePath = Path.Combine(Directory.GetCurrentDirectory() + fileTemplatePath);
//#endif
//            MemoryStream memoryStream = new MemoryStream();
//            ExcelPackage.LicenseContext = OfficeOpenXml.LicenseContext.NonCommercial;
//            using (ExcelPackage pck = new ExcelPackage(filePath))
//            {
//                pck.SaveAs(memoryStream);
//            }

//            ExcelPackage.LicenseContext = OfficeOpenXml.LicenseContext.NonCommercial;
//            using (ExcelPackage pck = new ExcelPackage(memoryStream))
//            {
//                var workSheet = pck.Workbook.Worksheets["Đóng ghép KDTVN-Nittsu- hồng"];
//                WarehouseInUseModel whm = new SQLHelper(DBConnection.KDTVN_LOGISTIC_MGMT).ExecQueryData<WarehouseInUseModel>(@$"select * from KDTVNWarehouseInUse where MasterID = {id}").FirstOrDefault();
//                //WarehouseInUseModel whm = new WarehouseInUseModel();
//                workSheet.Cells["A2"].Value = "Cửa " + whm.Port;
//                workSheet.Cells["A2"].Style.HorizontalAlignment = OfficeOpenXml.Style.ExcelHorizontalAlignment.Center;
//                workSheet.Cells["A2"].Style.VerticalAlignment = OfficeOpenXml.Style.ExcelVerticalAlignment.Center;

//                MasterData md = new SQLHelper(DBConnection.KDTVN_LOGISTIC_MGMT).ExecQueryData<MasterData>(@$"select * from Masterdata where ID = {id}").FirstOrDefault();
//                //string[] cont_no = md.ContNo.ToString().Split('/');

//                string[] cont_no = md.ContNo.ToString().Split('/');
//                if (cont_no.Length > 0)
//                {
//                    workSheet.Cells["C5"].Value = cont_no[0];
//                    workSheet.Cells["C5"].Style.HorizontalAlignment = OfficeOpenXml.Style.ExcelHorizontalAlignment.Center;
//                    workSheet.Cells["C5"].Style.VerticalAlignment = OfficeOpenXml.Style.ExcelVerticalAlignment.Center;
//                }

//                if (cont_no.Length > 1)
//                {
//                    workSheet.Cells["C19"].Value = cont_no[1];
//                    workSheet.Cells["C19"].Style.HorizontalAlignment = OfficeOpenXml.Style.ExcelHorizontalAlignment.Center;
//                    workSheet.Cells["C19"].Style.VerticalAlignment = OfficeOpenXml.Style.ExcelVerticalAlignment.Center;
//                }
//                workSheet.Cells["C6"].Value = md.InvoiceNo;
//                workSheet.Cells["C6"].Style.HorizontalAlignment = OfficeOpenXml.Style.ExcelHorizontalAlignment.Center;
//                workSheet.Cells["C6"].Style.VerticalAlignment = OfficeOpenXml.Style.ExcelVerticalAlignment.Center;

//                workSheet.Cells["F5"].Value = "Vậntải: " + md.Carries;
//                workSheet.Cells["F5"].Style.HorizontalAlignment = OfficeOpenXml.Style.ExcelHorizontalAlignment.Center;
//                workSheet.Cells["F5"].Style.VerticalAlignment = OfficeOpenXml.Style.ExcelVerticalAlignment.Center;


//                workSheet.Cells["F6"].Value = md.ExportDirection;
//                workSheet.Cells["F6"].Style.HorizontalAlignment = OfficeOpenXml.Style.ExcelHorizontalAlignment.Center;
//                workSheet.Cells["F6"].Style.VerticalAlignment = OfficeOpenXml.Style.ExcelVerticalAlignment.Center;

//                workSheet.Cells["F7"].Value = md.Note;
//                workSheet.Cells["F7"].Style.HorizontalAlignment = OfficeOpenXml.Style.ExcelHorizontalAlignment.Left;
//                workSheet.Cells["F7"].Style.VerticalAlignment = OfficeOpenXml.Style.ExcelVerticalAlignment.Top;


//                if (md.PackingTime != null)
//                {
//                    workSheet.Cells["F1"].Value = md.PackingTime.Value.Date;
//                    workSheet.Cells["F1"].Style.HorizontalAlignment = OfficeOpenXml.Style.ExcelHorizontalAlignment.Left;
//                    workSheet.Cells["F1"].Style.VerticalAlignment = OfficeOpenXml.Style.ExcelVerticalAlignment.Bottom;
//                }

//                if (whm.TimeContArrived != null)
//                {
//                    //DateTime timeContArrived = md.TimeContArrived.ToString().Split('');
//                    //DateTime timeContArrived = (DateTime)dtp_TimeContArrived.SelectedDateTime;
//                    workSheet.Cells["C10"].Value = whm.TimeContArrived.Value.Date;
//                    workSheet.Cells["C10"].Style.HorizontalAlignment = OfficeOpenXml.Style.ExcelHorizontalAlignment.Center;
//                    workSheet.Cells["C10"].Style.VerticalAlignment = OfficeOpenXml.Style.ExcelVerticalAlignment.Center;

//                    workSheet.Cells["D10"].Value = whm.TimeContArrived.Value.ToString("hh:mm:ss");
//                    workSheet.Cells["D10"].Style.HorizontalAlignment = OfficeOpenXml.Style.ExcelHorizontalAlignment.Center;
//                    workSheet.Cells["D10"].Style.VerticalAlignment = OfficeOpenXml.Style.ExcelVerticalAlignment.Center;
//                }



//                if (md.CutTime != null)
//                {
//                    //DateTime cutTime = (DateTime)CombineDateAndTime(dtp_CutTime_Date.SelectedDate, dtp_CutTime_Time.SelectedTime);
//                    workSheet.Cells["C8"].Value = md.CutTime.Value.Date;
//                    workSheet.Cells["C8"].Style.HorizontalAlignment = OfficeOpenXml.Style.ExcelHorizontalAlignment.Center;
//                    workSheet.Cells["C8"].Style.VerticalAlignment = OfficeOpenXml.Style.ExcelVerticalAlignment.Center;

//                    workSheet.Cells["D8"].Value = md.CutTime.Value.ToString("hh:mm:ss");
//                    workSheet.Cells["D8"].Style.HorizontalAlignment = OfficeOpenXml.Style.ExcelHorizontalAlignment.Center;
//                    workSheet.Cells["D8"].Style.VerticalAlignment = OfficeOpenXml.Style.ExcelVerticalAlignment.Center;
//                }



//                if (md.InvoiceTime != null)
//                {
//                    //DateTime invoiceTime = (DateTime)CombineDateAndTime(dtp_Invoice_Date.SelectedDate, dtp_Invoice_Time.SelectedTime);
//                    workSheet.Cells["C9"].Value = md.InvoiceTime.Value.Date;
//                    workSheet.Cells["C9"].Style.HorizontalAlignment = OfficeOpenXml.Style.ExcelHorizontalAlignment.Center;
//                    workSheet.Cells["C9"].Style.VerticalAlignment = OfficeOpenXml.Style.ExcelVerticalAlignment.Center;

//                    workSheet.Cells["D9"].Value = md.InvoiceTime.Value.ToString("hh:mm:ss");
//                    workSheet.Cells["D9"].Style.HorizontalAlignment = OfficeOpenXml.Style.ExcelHorizontalAlignment.Center;
//                    workSheet.Cells["D9"].Style.VerticalAlignment = OfficeOpenXml.Style.ExcelVerticalAlignment.Center;

//                }



//                switch (md.NameKdtvnWarehouse)
//                {
//                    case "A": md.NameKdtvnWarehouse = "KDTVN A"; break;
//                    case "B": md.NameKdtvnWarehouse = "KDTVN B"; break;
//                    case "AB": md.NameKdtvnWarehouse = "KDTVN AB"; break;
//                    default: md.NameKdtvnWarehouse = ""; break;
//                }
//                workSheet.Cells["C13"].Value = md.NameKdtvnWarehouse;
//                workSheet.Cells["C13"].Style.HorizontalAlignment = OfficeOpenXml.Style.ExcelHorizontalAlignment.Center;
//                workSheet.Cells["C13"].Style.VerticalAlignment = OfficeOpenXml.Style.ExcelVerticalAlignment.Center;

//                byte[] bytes = pck.GetAsByteArray();
//                res = JsonConvert.SerializeObject(bytes).ToString();
//            }
//            return res;
//        }

//IMPORT EXCEL

        [HttpPost]
        public IActionResult UploadMasterData(IFormFile file)
        {
            try
            {
                if (file == null || file.Length <= 0)
                    return BadRequest("File is empty");

                // ReSharper disable once PossibleNullReferenceException
                if (!Path.GetExtension(file.FileName).Equals(".xlsx", StringComparison.OrdinalIgnoreCase))
                    return new ObjectResult(new { type = "error", message = "File extension is not supported" });

                var memoryStream = new MemoryStream();

                //file.CopyToAsync(memoryStream);
                file.CopyTo(memoryStream);

                using var package = new ExcelPackage(memoryStream);
                ExcelWorksheet inputSheet = package.Workbook.Worksheets["Input"];

                //convert to datatable
                DataTable dt = new DataTable();

                //thêm header
                //inputSheet.Dimension.End.Column = 4
                foreach (var firstRowCell in inputSheet.Cells[1, 1, 1, 27])
                {
                    dt.Columns.Add(firstRowCell.Text);
                }
                string[] additionalColHeader = { "Status", "LastModifyAt", "LastModifyBy", "CreateAT", "Createby","KDTVNWarehouseInUseID","LiftFloor","Total","LabelCheck","ID" };
                foreach (var item in additionalColHeader)
                {
                    dt.Columns.Add(item);
                }


                ////thêm content
                // Đọc tất cả data bắt đầu từ row thứ 3

                for (var rowNumber = 3; rowNumber <= inputSheet.Dimension.End.Row; rowNumber++)
                {

                    // Lấy 1 row trong excel để truy vấn
                    var row = inputSheet.Cells[rowNumber, 1, rowNumber, 27];
                    // tạo 1 row trong data table
                    var newRow = dt.NewRow();
                    foreach (var cell in row)
                    {
                        newRow[cell.Start.Column - 1] = cell.Text;
                    }

                    //status
                    newRow["Status"] = 1;

                    //last_modify_by
                    newRow["LastModifyBy"] = SignInAccount.username;

                    //last_modify_at
                    newRow["LastModifyAt"] = DateTime.Now;

                    newRow["Createby"] = SignInAccount.username;
                    newRow["CreateAT"] = DateTime.Now;

                    newRow["KDTVNWarehouseInUseID"] = null;


                    newRow["LiftFloor"] = null;

                    newRow["Total"] = null;

                    newRow["LabelCheck"] = null;


                    dt.Rows.Add(newRow);
                }
                dt.Columns["ID"].SetOrdinal(0);
                dt.Columns["Total"].SetOrdinal(19);
                dt.Columns["LabelCheck"].SetOrdinal(20);
                dt.Columns["CreateAT"].SetOrdinal(22);
                dt.Columns["Createby"].SetOrdinal(23);
                dt.Columns["LastModifyAt"].SetOrdinal(24);
                dt.Columns["LastModifyBy"].SetOrdinal(25);
                dt.Columns["Status"].SetOrdinal(26);
                dt.Columns["LiftFloor"].SetOrdinal(29);
                dt.Columns["KDTVNWarehouseInUseID"].SetOrdinal(30);



                /*
                Xử lý thêm location mới
                1. Truncate bảng product_schedule
                */
                //new SQLHelper(DBConnection.KDTVN_FACT_B_BACHIRETA).ExecQueryNonData("truncate table [dbo].[product_schedule]");

                /*
                2. Bulk insert dữ liệu vào bảng 
                */
                //thêm product_schedule mới
                QueryResult res = new SQLHelper(DBConnection.KDTVN_LOGISTIC_MGMT).BulkCopy(dt, "[dbo].[MasterData]");
                if (res.Code == -1)
                {
                    if (res.Msg.Contains("Violation of PRIMARY KEY"))
                    {
                        int start = res.Msg.IndexOf('(');
                        int stop = res.Msg.IndexOf(')');
                        string duplicate = res.Msg.Substring(start + 1, stop - start - 1);
                        return new ObjectResult(new { type = "error", message = "Có mã giá bị lặp nhiều lần thông tin trong danh sách " + duplicate });
                    }
                    return new ObjectResult(new { type = "error", message = res.Msg });
                }
                else
                {
                    return new ObjectResult(new { type = res.Code == 1 ? "success" : "error", message = res.Msg });
                }

            }
            catch (Exception ex)
            {
                return new ObjectResult(new { type = "error", message = ex.Message });
            }


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