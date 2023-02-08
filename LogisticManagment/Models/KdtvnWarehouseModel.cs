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
    public class KdtvnWarehouseModel
    {
        public int? ID { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public bool Status { get; set; }


        public List<KdtvnWarehouseModel> GetALl()
        {
            var result = new SQLHelper(DBConnection.KDTVN_LOGISTIC_MGMT)
                .ExecProcedureData<KdtvnWarehouseModel>("[dbo].[sp_get_building]").ToList();

            return result;
        }

    }
}


