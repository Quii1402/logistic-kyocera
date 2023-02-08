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
    public class MasterData
    {
        public int ID { get; set; }

        public string InvoiceNo { get; set; }

        public string ContNo { get; set; }

        public string ExportDirection { get; set; }

        public string Pic { get; set; }

        //public int? ShippingModeID { get; set; }

        //public int? DockingWarehouseID { get; set; }

        public int? kdtvnWarehouseInUseID { get; set; }

        public string Carries { get; set; }

        public DateTime? PackingTime { get; set; }

        public int? _6th { get; set; }

        public int? Plr { get; set; }

        public int? Ricoh { get; set; }

        public int? LibraMfp { get; set; }

        public int? LibraPrt { get; set; }

        public int? Mebius { get; set; }

        public int? Toner { get; set; }

        public int? Rps { get; set; }

        public int? _6thA3A3S { get; set; }

        public int? PictorPrt { get; set; }

        public int? PictorMfp { get; set; }

        public int? Iris { get; set; }

        public string Note { get; set; }

        public bool? Total { get; set; }

        public bool? LiftFloor { get; set; }

        public bool? LabelCheck { get; set; }

        public string DeclarationForm { get; set; }

        public DateTime? CreateAt { get; set; }

        public string CreateBy { get; set; }

        public DateTime? LastModifyAt { get; set; }

        public string LastModifyBy { get; set; }

        public int Status { get; set; }

        public DateTime? packing_time_from { get; set; }

        public DateTime? packing_time_to { get; set; }

 
        public int? DeclarationFormID { get; set; }

        public DateTime? CutTime { get; set; }

        public DateTime? InvoiceTime { get; set; }

        public string total_str { get; set; }

        public string color_cut_time { get; set; }

        public string color_lift_floor { get; set; }

        public string total_bool { get; set; }

        public string Booking { get; set; }

        public int? ContTypeID { get; set; }

        public string NameDeclarationForm { get; set; }
        public string NameContType { get; set; }
     
        public int? MasterID { get; set; }
        public DateTime? TimeContArrived { get; set; }
        public DateTime? TimeTakePlace { get; set; }
        public DateTime? TimeFinish { get; set; }
        public string Port { get; set; }
        public string Description { get; set; }

        public string? date_range { get; set; }


        //fix ID => Name

        public string NameShippingMode { get; set; }
        public string NameDockingWarehouse { get; set; }
        public string NameKdtvnWarehouse { get; set; }


        public List<MasterData> GetAll()
        {
            var tsql = "select invoice_no,cont_no,export_direction,pic,name_shipping_mode,name_docking_warehouse,name_kdtvn_warehouse,carries,packing_time,6th,plr,ricoh,libra_mfp,libra_prt,mebius,toner,rps,note,total,label_check,name_declaration_form,create_by,packing_time_from,packing_time_to,cut_time,invoice_time,lift_floor,booking,name_cont_type,status,6th_a3_a3_s,pictor_prt,pictor_mfp,iris " +
                "  from MasterData";
            var result = new SQLHelper(DBConnection.KDTVN_LOGISTIC_MGMT)
                .ExecQueryData<MasterData>(tsql)
                .ToList();
            return result;
        }

       

        //Get Masterdata
        public List<MasterData> GetMasterData(MasterData masterData)
        {
            List<MasterData> result = new List<MasterData>();

            DynamicParameters dParam = new DynamicParameters();
            //dataMasterData
            dParam.Add("@invoice_no", masterData.InvoiceNo);
            dParam.Add("@cont_no", masterData.ContNo);
            dParam.Add("@export_direction", masterData.ExportDirection);
            dParam.Add("@pic", masterData.Pic);         
            dParam.Add("@name_shipping_mode", masterData.NameShippingMode);
            dParam.Add("@name_docking_warehouse", masterData.NameDockingWarehouse);
            dParam.Add("@name_kdtvn_warehouse", masterData.NameKdtvnWarehouse);
            dParam.Add("@carries", masterData.Carries);
            dParam.Add("@packing_time", masterData.PackingTime);
            dParam.Add("@6th", masterData._6th);
            dParam.Add("@plr", masterData.Plr);
            dParam.Add("@ricoh", masterData.Ricoh);
            dParam.Add("@libra_mfp", masterData.LibraMfp);
            dParam.Add("@libra_prt", masterData.LibraPrt);
            dParam.Add("@mebius", masterData.Mebius);
            dParam.Add("@toner", masterData.Toner);
            dParam.Add("@rps", masterData.Rps);
            dParam.Add("@note", masterData.Note);
            dParam.Add("@total", masterData.Total.Equals('1') ? true : false); ;
            dParam.Add("@label_check", masterData.LabelCheck);        
            dParam.Add("@name_declaration_form", masterData.NameDeclarationForm);
            dParam.Add("@create_by", masterData.CreateBy);
            dParam.Add("@packing_time_from", masterData.packing_time_from);
            dParam.Add("@packing_time_to", masterData.packing_time_to);
            dParam.Add("@cut_time", masterData.CutTime);
            dParam.Add("@invoice_time", masterData.InvoiceTime);
            dParam.Add("@lift_floor", masterData.LiftFloor);
            dParam.Add("@booking", masterData.Booking);
            dParam.Add("@name_cont_type", masterData.NameContType);
            dParam.Add("@status", masterData.Status);
            dParam.Add("@6th_a3_a3_s", masterData._6thA3A3S);
            dParam.Add("@pictor_prt", masterData.PictorPrt);
            dParam.Add("@pictor_mfp", masterData.PictorMfp);
            dParam.Add("@iris", masterData.Iris);
            //dParam.Add("@date_range", masterData.date_range);

            result = new SQLHelper(DBConnection.KDTVN_LOGISTIC_MGMT).ExecProcedureData<MasterData>("[dbo].[GetMasterdata1]", dParam).ToList();

            return result;
        }

//Get WarehouseByid
        public List<MasterData> GetWarehouseWarehouseByID(string stockName,int? masterId)
        {
            List<MasterData> result = new List<MasterData>();

            DynamicParameters dParam = new DynamicParameters();
            //data
            dParam.Add("@stockName", stockName);
            dParam.Add("@masterId", masterId);



            result = new SQLHelper(DBConnection.KDTVN_LOGISTIC_MGMT).ExecProcedureData<MasterData>("[dbo].[GetWarehouseWarehoseByID]", dParam).ToList();

            return result;
        }


       


        //INSERT
        public QueryResult InsertMasterData(MasterData masterData)
        {
            QueryResult qr = new QueryResult();

            DynamicParameters dParam = new();

            dParam.Add("@invoice_no", masterData.InvoiceNo);
            dParam.Add("@cont_no", masterData.ContNo);
            dParam.Add("@export_direction", masterData.ExportDirection);
            dParam.Add("@pic", masterData.Pic);
            dParam.Add("@name_shipping_mode", masterData.NameShippingMode);
            dParam.Add("@name_docking_warehouse", masterData.NameDockingWarehouse);
            dParam.Add("@name_kdtvn_warehouse", masterData.NameKdtvnWarehouse);
            dParam.Add("@carries", masterData.Carries);
            dParam.Add("@packing_time", masterData.PackingTime);
            dParam.Add("@6th", masterData._6th);
            dParam.Add("@plr", masterData.Plr);
            dParam.Add("@ricoh", masterData.Ricoh);
            dParam.Add("@libra_mfp", masterData.LibraMfp);
            dParam.Add("@libra_prt", masterData.LibraPrt);
            dParam.Add("@mebius", masterData.Mebius);
            dParam.Add("@toner", masterData.Toner);
            dParam.Add("@rps", masterData.Rps);
            dParam.Add("@note", masterData.Note);
            dParam.Add("@total", masterData.Total);
            dParam.Add("@label_check", masterData.LabelCheck);
            dParam.Add("@name_declaration_form", masterData.NameDeclarationForm);

            dParam.Add("@create_at", masterData.CreateAt);

            dParam.Add("@create_by", masterData.CreateBy);

            dParam.Add("@lastmodify_at", masterData.LastModifyAt);
            dParam.Add("@lastmodify_by", masterData.LastModifyBy);
            dParam.Add("@status", masterData.Status);


            dParam.Add("@cut_time", masterData.CutTime);
            dParam.Add("@invoice_time", masterData.InvoiceTime);

            dParam.Add("@lift_floor", masterData.LiftFloor);
            dParam.Add("@kdtvn_warehouse_in_use_id", masterData.kdtvnWarehouseInUseID);



            dParam.Add("@booking", masterData.Booking);
            dParam.Add("@name_cont_type", masterData.NameContType);
            dParam.Add("@6th_a3_a3_s", masterData._6thA3A3S);
            dParam.Add("@pictor_prt", masterData.PictorPrt);
            dParam.Add("@pictor_mfp", masterData.PictorMfp);
            dParam.Add("@iris", masterData.Iris);

            qr = new SQLHelper(DBConnection.KDTVN_LOGISTIC_MGMT).ExecProcedureDataQueryResult("[dbo].[InsertMasterData]", dParam);

            return qr;
        }
 //Delete Master Data

        public QueryResult DeleteMasterData(MasterData masterData)
        {
            QueryResult qr = new QueryResult();

            DynamicParameters dParam = new();

            dParam.Add("@Id", masterData.ID);
           
            qr = new SQLHelper(DBConnection.KDTVN_LOGISTIC_MGMT).ExecProcedureDataQueryResult("[dbo].[DeleteMasterData]", dParam);

            return qr;
        }

 

//GetMasterDataById
        public List<MasterData> GetMasterDataById(MasterData masterData)
        {
            List<MasterData> result = new List<MasterData>();

            DynamicParameters dParam = new DynamicParameters();

            dParam.Add("@id", masterData.ID);
          

            result = new SQLHelper(DBConnection.KDTVN_LOGISTIC_MGMT).ExecProcedureData<MasterData>("[dbo].[sp_get_master_data_by_id]", dParam).ToList();

            return result;
        }



 //UPDATE MASTER DATA
        public QueryResult UpdateMasterData(MasterData masterData)
        {
          

            QueryResult qr = new QueryResult();

            DynamicParameters dParam = new DynamicParameters();

            dParam.Add("@invoice_no", masterData.InvoiceNo);
            dParam.Add("@cont_no", masterData.ContNo);
            dParam.Add("@export_direction", masterData.ExportDirection);
            dParam.Add("@pic", masterData.Pic);
            dParam.Add("@name_shipping_mode", masterData.NameShippingMode);
            dParam.Add("@name_docking_warehouse", masterData.NameDockingWarehouse);
            dParam.Add("@name_kdtvn_warehouse", masterData.NameKdtvnWarehouse);
            dParam.Add("@carries", masterData.Carries);
            dParam.Add("@packing_time", masterData.PackingTime);
            dParam.Add("@6th", masterData._6th);
            dParam.Add("@plr", masterData.Plr);
            dParam.Add("@ricoh", masterData.Ricoh);
            dParam.Add("@libra_mfp", masterData.LibraMfp);
            dParam.Add("@libra_prt", masterData.LibraPrt);
            dParam.Add("@mebius", masterData.Mebius);
            dParam.Add("@toner", masterData.Toner);
            dParam.Add("@rps", masterData.Rps);
            dParam.Add("@note", masterData.Note);
            dParam.Add("@total", masterData.Total);
            dParam.Add("@label_check", masterData.LabelCheck);
            dParam.Add("@name_declaration_form", masterData.NameDeclarationForm);
            dParam.Add("@create_by", masterData.CreateBy);
            dParam.Add("@id", masterData.ID);
            dParam.Add("@status", masterData.Status);
            dParam.Add("@cut_time", masterData.CutTime);
            dParam.Add("@invoice_time", masterData.InvoiceTime);
            dParam.Add("@lift_floor", masterData.LiftFloor);
            dParam.Add("@booking", masterData.Booking);
            dParam.Add("@name_cont_type", masterData.NameContType);
            dParam.Add("@6th_a3_a3_s", masterData._6thA3A3S);
            dParam.Add("@pictor_prt", masterData.PictorPrt);
            dParam.Add("@pictor_mfp", masterData.PictorMfp);
            dParam.Add("@iris", masterData.Iris);


            qr = new SQLHelper(DBConnection.KDTVN_LOGISTIC_MGMT).ExecProcedureDataQueryResult("[dbo].[UpdateMasterData]", dParam);


            return qr;
        }


 //CHANGE STATUS MASTER DATA
        public QueryResult ChangeStatusMasterData(MasterData masterData)
        {
            QueryResult qr = new QueryResult();

            DynamicParameters dParam = new DynamicParameters();
            dParam.Add("@id", masterData.ID);
            dParam.Add("@status", masterData.Status);
          


            qr = new SQLHelper(DBConnection.KDTVN_LOGISTIC_MGMT).ExecProcedureDataQueryResult("[dbo].[SpChangeStatusMdById]", dParam);


            return qr;
        }

//CHANGE STATUS MASTER DATA
        public QueryResult ChangeTotalMasterData(MasterData masterData)
        {
            QueryResult qr = new QueryResult();

            DynamicParameters dParam = new DynamicParameters();
            dParam.Add("@id", masterData.ID);
            dParam.Add("@total", masterData.Total);

            qr = new SQLHelper(DBConnection.KDTVN_LOGISTIC_MGMT).ExecProcedureDataQueryResult("[dbo].[SpChangeTotal]", dParam);

            return qr;
        }
//GET DETAILS SUMMARY
        public List<MasterData> GetDetailsSummary(DateTime? contExpectedTime, string invoiceNo, int? idDockingWarehouse, string exportDirection, string contNo, int? masterStatus)
        {
            List<MasterData> result = new List<MasterData>();

            DynamicParameters dParam = new DynamicParameters();
            dParam.Add("@cont_expected_time", contExpectedTime);
            dParam.Add("@invoice_no", invoiceNo);
            dParam.Add("@id_docking_warehouse", idDockingWarehouse);
            dParam.Add("@export_direction", exportDirection);
            dParam.Add("@cont_no", contNo);
            dParam.Add("@master_status", masterStatus);
            


            result = new SQLHelper(DBConnection.KDTVN_LOGISTIC_MGMT).ExecProcedureData<MasterData>("[dbo].[sp_get_detail_summary]", dParam).ToList();


            return result;
        }
//GET GENERAL SUMMARY
        public List<MasterData> GetGeneralSummary(DateTime? contExpectedTime, string invoiceNo, int? idDockingWarehouse, string exportDirection, string contNo, int? masterStatus)
        {
            List<MasterData> result = new List<MasterData>();

            DynamicParameters dParam = new DynamicParameters();
            dParam.Add("@cont_expected_time", contExpectedTime);
            dParam.Add("@invoice_no", invoiceNo);
            dParam.Add("@id_docking_warehouse", idDockingWarehouse);
            dParam.Add("@export_direction", exportDirection);
            dParam.Add("@cont_no", contNo);
            dParam.Add("@master_status", masterStatus);



            result = new SQLHelper(DBConnection.KDTVN_LOGISTIC_MGMT).ExecProcedureData<MasterData>("[dbo].[sp_get_general_summary]", dParam).ToList();


            return result;
        }


     



    }

}






