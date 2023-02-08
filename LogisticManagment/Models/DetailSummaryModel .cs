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
    public class DetailSummaryModel
    {
        public DateTime? cont_expected_time { get; set; }
        public string? invoice_no { get; set; }
        public string? name_docking_warehouse { get; set; }
        public string? export_direction { get; set; }
        public string? cont_no { get; set; }
        public int? master_status { get; set; }


        public string? Status { get; set; }

        public int? ID { get; set; }
        public DateTime? date { get; set; }
        public string? shipping_mode_name { get; set; }
        public string? external_warehouse { get; set; }
        public string? NameKdtvnWarehouse { get; set; }
        public DateTime? invoice_time { get; set; }
        public string? Carries { get; set; }
        public string? Note { get; set; }
        public string? lift_floor { get; set; }
        public int? _6th { get; set; }
        public int? plr { get; set; }
        public int? ricoh { get; set; }
        public int? LibraMfp { get; set; }
        public int? LibraPrt { get; set; }
        public int? Mebius { get; set; }
        public int? Toner { get; set; }
        public int? Rps { get; set; }
        public int? _6thA3A3S { get; set; }
        public int? PictorPrt { get; set; }
        public int? PictorMfp { get; set; }
        public int? iris { get; set; }
        public DateTime? time_cont_arrived_a { get; set; }
        public DateTime? time_take_place_a { get; set; }
        public string? port_a { get; set; }
        public DateTime? time_finish_a { get; set; }
        public DateTime? time_cont_arrived_b { get; set; }
        public DateTime? time_take_place_b { get; set; }
        public string? port_b { get; set; }
        public DateTime? time_finish_b { get; set; }
        public DateTime? time_cont_arrived_c { get; set; }
        public DateTime? time_take_place_c { get; set; }
        public string? port_c { get; set; }
        public DateTime? time_finish_c { get; set; }
        public object? duration_finish_a { get; set; }
        public object? duration_finish_b { get; set; }
        public object? duration_finish_ab { get; set; }
        public Int32? duration_finish_in_minute_a { get; set; }
        public Int32? duration_finish_in_minute_b { get; set; }
        public Int32? duration_finish_in_minute_ab { get; set; }
        public string? goal_compare { get; set; }
        public string? cont_status { get; set; }
        public string? cont_status_time { get; set; }


        //Get GeneralSummary

        public List<DetailSummaryModel> GetDetailSummaryModel(DetailSummaryModel detailsummary)
        {
            List<DetailSummaryModel> result = new List<DetailSummaryModel>();

            DynamicParameters dParam = new DynamicParameters();
            //dataGet
            dParam.Add("@cont_expected_time", detailsummary.cont_expected_time);
            dParam.Add("@invoice_no", detailsummary.invoice_no);
            dParam.Add("@name_docking_warehouse", detailsummary.name_docking_warehouse);
            dParam.Add("@export_direction", detailsummary.export_direction);
            dParam.Add("@cont_no", detailsummary.cont_no);
            dParam.Add("@master_status", detailsummary.master_status);


            result = new SQLHelper(DBConnection.KDTVN_LOGISTIC_MGMT).ExecProcedureData<DetailSummaryModel>("[dbo].[SpGetDetailSummary]", dParam).ToList();

            return result;
        }


    }

}


