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
    public class DeclarationformModel
    {
        public int? ID { get; set; }

        public string Name { get; set; }

        public string code { get; set; }

        public bool Status { get; set; }


        public List<DeclarationformModel> GetALl()
        {
            var result = new SQLHelper(DBConnection.KDTVN_LOGISTIC_MGMT)
                .ExecProcedureData<DeclarationformModel>("[dbo].[sp_get_declaration_form]").ToList();

            return result;
        }

    }
}


