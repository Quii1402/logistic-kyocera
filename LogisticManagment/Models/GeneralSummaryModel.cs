using Dapper;
using KDTVN_Shared.Helper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Data;
using System.Data.SqlClient;
using LogisticManagment.Models;


namespace LogisticManagment.Models
{
    public class GeneralSummaryModel
    {
        public DateTime? cont_expected_time { get; set; }
        public string? invoice_no { get; set; }
        public string? NameDockingWarehouse { get; set; }
        public string? ExportDirection { get; set; }
        public string? cont_no { get; set; }
        public int? Status { get; set; }
        public DateTime? date { get; set; }
        public string? plan { get; set; }
        public int? actual_ok { get; set; }
        public int? actual_ng { get; set; }
        public int? actual_total { get; set; }
        public int? cont_stock { get; set; }



        //Get GeneralSummary

        public List<GeneralSummaryModel> GetGeneralSummary(GeneralSummaryModel generalsummary)
        {
            List<GeneralSummaryModel> result = new List<GeneralSummaryModel>();

            DynamicParameters dParam = new DynamicParameters();
            //dataGet
            dParam.Add("@cont_expected_time", generalsummary.cont_expected_time);
            dParam.Add("@invoice_no", generalsummary.invoice_no);
            dParam.Add("@name_docking_warehouse", generalsummary.NameDockingWarehouse);
            dParam.Add("@export_direction", generalsummary.ExportDirection);
            dParam.Add("@cont_no", generalsummary.cont_no);
            dParam.Add("@master_status", generalsummary.Status);


            result = new SQLHelper(DBConnection.KDTVN_LOGISTIC_MGMT).ExecProcedureData<GeneralSummaryModel>("[dbo].[SpGetGeneralSummary]", dParam).ToList();

            return result;
        }




    }
}


