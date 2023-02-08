//get DetailSummary
var DetailSummary = function () {
    var dt;
    let initialTable = true;

    var initDatatable = function () {
        dt = $("#TbDetailSummary").DataTable({
            searchDelay: 500,
            processing: true,
            searching: true,
            ajax: {
                url: "../DetailSummary/GetDetailSummary",
                type: "POST",
                data: "",
                dataSrc: "",
              
            },
            columns: [
                { data: 'id' },
                { data: 'date' },
                { data: 'invoice_no' },
                { data: 'shipping_mode_name' },
                { data: 'export_direction' },
                { data: 'cont_no' },
                { data: 'cont_expected_time' },
                { data: 'external_warehouse' },
                { data: 'nameKdtvnWarehouse' },
                { data: 'invoice_time' },
                { data: 'carries' },
                { data: 'note' },
                { data: 'lift_floor' },
                { data: '_6th' },
                { data: 'plr' },
                { data: 'ricoh' },
                { data: 'libraMfp' },
                { data: 'libraPrt' },
                { data: 'mebius' },
                { data: 'toner' },
                { data: 'rps' },
                { data: '_6thA3A3S' },
                { data: 'pictorPrt' },
                { data: 'pictorMfp' },
                { data: 'iris' },
                { data: 'time_cont_arrived_a' },
                { data: 'time_take_place_a' },
                { data: 'port_a' },
                { data: 'time_finish_a' },
                { data: 'time_cont_arrived_b' },
                { data: 'time_take_place_b' },
                { data: 'port_b' },
                { data: 'time_finish_b' },
                { data: 'time_cont_arrived_c' },
                { data: 'time_take_place_c' },
                { data: 'port_c' },
                { data: 'time_finish_c' },
                { data: 'status' },
                { data: 'duration_finish_a' },
                { data: 'duration_finish_b' },
                { data: 'duration_finish_ab' },
                { data: 'duration_finish_in_minute_a' },
                { data: 'duration_finish_in_minute_b' },
                { data: 'duration_finish_in_minute_ab' },
                { data: 'goal_compare' },
                { data: 'cont_status' },
                { data: 'cont_status_time' },

             /*   { data: 'name_docking_warehouse' },*/





                {
                    data: {
                        ID:"id",
                        Data: "date",
                        InvoiceNo: "invoiceNo",
                        Shipping_Mode_Name:"shipping_mode_name",
                        ExportDirection: "exportDirection",
                        nameDockingWarehouse: "nameDockingWarehouse",
                        ContNo: "contNo",
                        cont_expected_time: "cont_expected_time",
                        external_warehouse: "external_warehouse",
                        NameKdtvnWarehouse: "nameKdtvnWarehouse",
                        invoiceTime: "invoiceTime",
                        carries: "carries",
                        note: "note",
                        lift_floor: "lift_floor",
                        _6th: "_6th",
                        plr: "plr",
                        ricoh: "ricoh",
                        libraMfp: "libraMfp",
                        libraPrt: "libraPrt",
                        mebius: "mebius",
                        toner: "toner",
                        rps: "rps",
                        _6thA3A3S: "_6thA3A3S",
                        pictorPrt: "pictorPrt",
                        pictorMfp: "pictorMfp",
                        iris: "iris",
                        time_cont_arrived_a: "time_cont_arrived_a",
                        time_take_place_a: "time_take_place_a",
                        port_a: "port_a",
                        time_finish_a: "time_finish_a",
                        time_cont_arrived_b: "time_cont_arrived_b",
                        time_take_place_b: "time_take_place_b",
                        port_b: "port_b",
                        time_finish_b: "time_finish_b",
                        time_cont_arrived_c: "time_cont_arrived_c",
                        time_take_place_c: "time_take_place_c",
                        port_c: "port_c",
                        time_finish_c: "time_finish_c",
                        status: "status",
                        duration_finish_a: "duration_finish_a",
                        duration_finish_b: "duration_finish_b",
                        duration_finish_ab: "duration_finish_ab",
                        duration_finish_in_minute_a: "duration_finish_in_minute_a",
                        duration_finish_in_minute_b: "duration_finish_in_minute_b",
                        duration_finish_in_minute_ab: "duration_finish_in_minute_ab",
                        goal_compare: "goal_compare",
                        cont_status: "cont_status",
                        cont_status_time: "cont_status_time"
                    }
                }

            ],

            footerCallback: function (row, data, start, end, display) {
                var api = this.api();

                // Remove the formatting to get integer data for summation
                var intVal = function (i) {
                    return typeof i === 'string' ? i.replace(/[\$,]/g, '') * 1 : typeof i === 'number' ? i : 0;
                };



                // Total over this page

                var Totalpa = api
                    .column(1, { page: 'current' })
                    .data()
                    .reduce(function (a, b) {
                        var getRowTotal = $('#TbDetailSummary').DataTable().column({ page: 'current' }).data().count()

                        return getRowTotal;
                    }, 0);

                var _6th = api
                    .column(13, { page: 'current' })
                    .data()
                    .reduce(function (a, b) {
                        return intVal(a) + intVal(b);
                    }, 0);

                var Plr = api
                    .column(14, { page: 'current' })
                    .data()
                    .reduce(function (a, b) {
                        return intVal(a) + intVal(b);
                    }, 0);
                var Ricoh = api
                    .column(15, { page: 'current' })
                    .data()
                    .reduce(function (a, b) {
                        return intVal(a) + intVal(b);
                    }, 0);
                var Libramfp = api
                    .column(16, { page: 'current' })
                    .data()
                    .reduce(function (a, b) {
                        return intVal(a) + intVal(b);
                    }, 0);
                var Libraprt = api
                    .column(17, { page: 'current' })
                    .data()
                    .reduce(function (a, b) {
                        return intVal(a) + intVal(b);
                    }, 0);
                var Mebius = api
                    .column(18, { page: 'current' })
                    .data()
                    .reduce(function (a, b) {
                        return intVal(a) + intVal(b);
                    }, 0);
                var Toner = api
                    .column(19, { page: 'current' })
                    .data()
                    .reduce(function (a, b) {
                        return intVal(a) + intVal(b);
                    }, 0);
                var Rps = api
                    .column(20, { page: 'current' })
                    .data()
                    .reduce(function (a, b) {
                        return intVal(a) + intVal(b);
                    }, 0);
                var _6thA3A3S = api
                    .column(21, { page: 'current' })
                    .data()
                    .reduce(function (a, b) {
                        return intVal(a) + intVal(b);
                    }, 0);
                var PictorPrt = api
                    .column(22, { page: 'current' })
                    .data()
                    .reduce(function (a, b) {
                        return intVal(a) + intVal(b);
                    }, 0);
                var PictorMfp = api
                    .column(23, { page: 'current' })
                    .data()
                    .reduce(function (a, b) {
                        return intVal(a) + intVal(b);
                    }, 0);
                var Iris = api
                    .column(24, { page: 'current' })
                    .data()
                    .reduce(function (a, b) {
                        return intVal(a) + intVal(b);
                    }, 0);
                // Update footer
                $(api.column(1).footer()).html('Tổng hồ sơ :');
                $(api.column(2).footer()).html(Totalpa);
                $(api.column(13).footer()).html(_6th);
                $(api.column(14).footer()).html(Plr);
                $(api.column(15).footer()).html(Ricoh);
                $(api.column(16).footer()).html(Libramfp);
                $(api.column(17).footer()).html(Libraprt);
                $(api.column(18).footer()).html(Mebius);
                $(api.column(19).footer()).html(Toner);
                $(api.column(20).footer()).html(Rps);
                $(api.column(21).footer()).html(_6thA3A3S);
                $(api.column(22).footer()).html(PictorPrt);
                $(api.column(23).footer()).html(PictorMfp);
                $(api.column(24).footer()).html(Iris);
            },

            columnDefs: [
                { "defaultContent": "-", "targets": "_all" },
              
                {
                    targets: -1,
                    visible: false,
                },
                {
                    targets: [9,36,34,33,32,30,29,28,26,25],
                    render: function (data) {
                        if (data == null)
                            return "";
                        return moment(data).format('YYYY-MM-DD HH:mm:ss');
                    }
                },
                {
                    targets: [6],
                    render: function (data) {
                        if (data == null)
                            return "";
                        return moment(data).format('HH:mm:ss');
                    }
                },

                {
                    targets: [1],
                    render: function (data) {
                        if (data == null)
                            return "";
                        return moment(data).format('YYYY-MM-DD');
                    }
                },

              
                {
                    targets: -1,
                    orderable: false,
                    className: 'text-end',
                    render: function (data, type, row) {
                        console.log(data);
                        return `
                            <button onclick="ShowModalEdit('${data.id
                            }','${data.date
                            }','${data.invoiceNo
                            }','${data.shipping_mode_name
                            }','${data.exportDirection
                            }','${data.contNo
                            }','${data.cont_expected_time
                            }','${data.external_warehouse
                            }','${data.nameKdtvnWarehouse
                            }','${data.invoiceTime
                            }','${data.carries
                            }','${data.note
                            }','${data.lift_floor
                            }','${data._6th
                            }','${data.plr
                            }','${data.ricoh
                            }','${data.LibraMfp
                            }','${data.LibraPrt
                            }','${data.Mebius
                            }','${data.Toner
                            }','${data.Rps
                            }','${data._6thA3A3S
                            }','${data.PictorPrt
                            }','${data.PictorMfp
                            }','${data.iris
                            }','${data.time_cont_arrived_a
                            }','${data.time_take_place_a
                            }','${data.port_a
                            }','${data.time_finish_a
                            }','${data.time_cont_arrived_b
                            }','${data.time_take_place_b
                            }','${data.port_b
                            }','${data.time_finish_b
                            }','${data.time_cont_arrived_c
                            }','${data.time_take_place_c
                            }','${data.port_c
                            }','${data.time_finish_c
                            }','${data.status
                            }','${data.duration_finish_a
                            }','${data.duration_finish_b
                            }','${data.duration_finish_ab
                            }','${data.duration_finish_in_minute_a
                            }','${data.duration_finish_in_minute_b
                            }','${data.duration_finish_in_minute_ab
                            }','${data.goal_compare
                            }','${data.cont_status
                            }','${data.cont_status_time
                         
                            }');"

                                title="Cập nhật"
                                class="btn btn-icon btn-active-light-danger btn-sm">
                                <span class="svg-icon svg-icon-muted svg-icon-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M2 4.63158C2 3.1782 3.1782 2 4.63158 2H13.47C14.0155 2 14.278 2.66919 13.8778 3.04006L12.4556 4.35821C11.9009 4.87228 11.1726 5.15789 10.4163 5.15789H7.1579C6.05333 5.15789 5.15789 6.05333 5.15789 7.1579V16.8421C5.15789 17.9467 6.05333 18.8421 7.1579 18.8421H16.8421C17.9467 18.8421 18.8421 17.9467 18.8421 16.8421V13.7518C18.8421 12.927 19.1817 12.1387 19.7809 11.572L20.9878 10.4308C21.3703 10.0691 22 10.3403 22 10.8668V19.3684C22 20.8218 20.8218 22 19.3684 22H4.63158C3.1782 22 2 20.8218 2 19.3684V4.63158Z" fill="black"></path>
                                <path d="M10.9256 11.1882C10.5351 10.7977 10.5351 10.1645 10.9256 9.77397L18.0669 2.6327C18.8479 1.85165 20.1143 1.85165 20.8953 2.6327L21.3665 3.10391C22.1476 3.88496 22.1476 5.15129 21.3665 5.93234L14.2252 13.0736C13.8347 13.4641 13.2016 13.4641 12.811 13.0736L10.9256 11.1882Z" fill="black"></path><path d="M8.82343 12.0064L8.08852 14.3348C7.8655 15.0414 8.46151 15.7366 9.19388 15.6242L11.8974 15.2092C12.4642 15.1222 12.6916 14.4278 12.2861 14.0223L9.98595 11.7221C9.61452 11.3507 8.98154 11.5055 8.82343 12.0064Z" fill="black"></path>
                                </svg></span>
                            </button>
                            <a href="javascript:;" onclick='removeItem("${data.id}");' class="btn btn-icon btn-active-light-danger btn-sm"><span class="svg-icon svg-icon-1"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M5 9C5 8.44772 5.44772 8 6 8H18C18.5523 8 19 8.44772 19 9V18C19 19.6569 17.6569 21 16 21H8C6.34315 21 5 19.6569 5 18V9Z" fill="black"/>
                            <path opacity="0.5" d="M5 5C5 4.44772 5.44772 4 6 4H18C18.5523 4 19 4.44772 19 5V5C19 5.55228 18.5523 6 18 6H6C5.44772 6 5 5.55228 5 5V5Z" fill="black"/>
                            <path opacity="0.5" d="M9 4C9 3.44772 9.44772 3 10 3H14C14.5523 3 15 3.44772 15 4V4H9V4Z" fill="black"/>
                            </svg></span>
                            </a>`;
                    }
                }
            ],

            lengthMenu: [[10, 20, 50, -1], [10, 20, 50, "All"]],
            buttons: ["copy", "excel", "pdf"],
            initComplete: function () {
                $('#TbDetailSummary').DataTable().buttons().container().appendTo("#dt_tools_detail");
            }
        });
    }

    var HandleSearchDatatable = function () {
        $('#input_search_detail').keyup(function (e) {
            $('#TbDetailSummary').DataTable().search(e.target.value).draw();
        });
    };

    return {
        init: function () {
            initDatatable();
            HandleSearchDatatable();
        }
    }

}();

//On document loaded
KTUtil.onDOMContentLoaded(function () {  
    DetailSummary.init();

})


//SEARCH

//search 
$(document).ready(function () {
    var table = $('#TbDetailSummary').DataTable();
    $('#search-btn-detail').click(function () {
        table.columns(1).search($("#inp-datexuat").val()).draw();
        table.columns(2).search($("#inp-invoice-detail").val()).draw();
        table.columns(4).search($("#inp-exportdirection-detail").val()).draw();
        table.columns(5).search($("#inp-cont-detail").val()).draw();
        table.columns(7).search($("#inp-external_warehouse-detail").val()).draw();
        table.columns(37).search($("#inp-status-detail").val()).draw();
      
    });

    //date
    $("#inp-datexuat").keypress(function (e) {
        // You can use $(this) here, since this once again refers to your text input            
        if (e.which === 1) {
            e.preventDefault(); // Prevent form submit
            table.search($(this).val()).draw();
        }
    });
    //invocie.truck
    $("#inp-invoice-detail").keypress(function (e) {
        // You can use $(this) here, since this once again refers to your text input            
        if (e.which === 1) {
            e.preventDefault(); // Prevent form submit
            table.search($(this).val()).draw();
        }
    });

    //hướng xuất
    $("#inp-exportdirection-detail").keypress(function (e) {
        // You can use $(this) here, since this once again refers to your text input            
        if (e.which === 1) {
            e.preventDefault(); // Prevent form submit
            table.search($(this).val()).draw();
        }
    });
    //Cont
    $("#inp-cont-detail").keypress(function (e) {
        // You can use $(this) here, since this once again refers to your text input            
        if (e.which === 1) {
            e.preventDefault(); // Prevent form submit
            table.search($(this).val()).draw();
        }
    });
    //Kho đóng hàng
    $("#inp-external_warehouse-detail").keypress(function (e) {
        // You can use $(this) here, since this once again refers to your text input            
        if (e.which === 1) {
            e.preventDefault(); // Prevent form submit
            table.search($(this).val()).draw();
        }
    });
    //Trạng thái
    $("#inp-status-detail").keypress(function (e) {
        // You can use $(this) here, since this once again refers to your text input            
        if (e.which === 1) {
            e.preventDefault(); // Prevent form submit
            table.search($(this).val()).draw();
        }
    });
});