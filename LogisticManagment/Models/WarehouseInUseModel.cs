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
    public class WarehouseInUseModel
    {
        public int? WarehouseInUseID { get; set; }

        public string MasterID { get; set; }
        public string NameKdtvnWarehouse { get; set; }
        public int? kdtvnWarehouseInUseID { get; set; }

        public bool Status { get; set; }

        public DateTime? TimeContArrived { get; set; }
        public DateTime? TimeTakePlace { get; set; }
        public string Port { get; set; }
        public DateTime? TimeFinish { get; set; }
        public string Description { get; set; }
        public DateTime CreateAt { get; set; }
        public string CreateBy { get; set; }

        //INSERT
        public QueryResult InsertWarehouseInUse(WarehouseInUseModel warehouseinuse)
        {
            QueryResult qr = new QueryResult();

            DynamicParameters dParam = new();

            dParam.Add("@id_master", warehouseinuse.MasterID);
            dParam.Add("@name_warehouse", warehouseinuse.NameKdtvnWarehouse);
            dParam.Add("@status", warehouseinuse.Status);
            dParam.Add("@time_cont_arrived", warehouseinuse.TimeContArrived);
            dParam.Add("@time_take_place", warehouseinuse.TimeTakePlace);
            dParam.Add("@port", warehouseinuse.Port);
            dParam.Add("@time_finish", warehouseinuse.TimeFinish);
            dParam.Add("@description", warehouseinuse.Description);
            dParam.Add("@createby", warehouseinuse.CreateBy);
          



            qr = new SQLHelper(DBConnection.KDTVN_LOGISTIC_MGMT).ExecProcedureDataQueryResult("[dbo].[InsertWarehouseInUse]", dParam);

            return qr;
        }


    }
}


