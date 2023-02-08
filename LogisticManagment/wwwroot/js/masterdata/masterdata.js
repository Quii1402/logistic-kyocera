
//get Masterdata
var DataTable = function () {
    var dt;
    let intialTable = true;

    var initDatatable = function () {
        dt = $("#tbQLHS").DataTable({
            searchDelay: 500,
            processing: true,
            searching: true,
            order: [[3, 'asc']],
            ajax: null, 
            
            columns: [
                { data: 'total' },
                {
                    data: 'color_cut_time',
                     render: function (data, type, row) {

                         if (row.color_cut_time == "Red") {
                             return '<button class ="btn btn-danger p-2"></button>';
                        }
                        else {
                            return "";
                        }

                    }
                },
                {
                    data: 'color_lift_floor',
                    render: function (data, type, row) {

                        if (row.color_lift_floor == "Green") {
                            return '<button class ="btn btn-success p-2"></button>';
                        }
                        else {
                            return "";
                        }

                    }

                },             
                { data: 'id' },
                { data: 'packingTime' },
                { data: 'invoiceNo' },
                { data: 'contNo' },
                { data: 'exportDirection' },
                { data: 'pic' },
                { data: 'nameShippingMode' },
                { data: 'nameDockingWarehouse' },
                { data: 'nameKdtvnWarehouse' },
                { data: 'carries' },
                { data: 'booking' },
                { data: 'nameContType' },
                { data: 'packingTime' },
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
                { data: 'note' },

                { 
                    data: 'liftFloor',
                     render: function (data, type, row) {

                         if (row.liftFloor == false) {
                             return "O";
                         }                        
                         else {
                             return "";
                         }
                        
                    }

                },


                //{ data: 'labelCheck' },
                { data: 'createBy' },
               // { data: 'cutTime' },
               /* { data: 'invoiceTime' },*/
                { data: 'status' },
                { data: 'nameDeclarationForm' },


                {
                    data: {
                        Total: "total",
                        Color_cut_time: "color_cut_time",
                        color_lift_floor:"color_lift_floor", 
                        ID: "id",
                        invoiceNo: "invoiceNo",
                        ContNo: "contNo",
                        ExportDirection: "exportDirection",
                        Pic: "pic",
                        NameKdtvnWarehouse: "nameKdtvnWarehouse",
                        NameShippingMode: "nameShippingMode",
                        Namedeclarationform: "nameDeclarationForm",
                        NameContType: "nameContType",
                        NameDockingWarehouse: "nameDockingWarehouse",
                        Carries: "carries",
                        Booking: "booking",
                        PackingTime: "packingTime",
                        _6TH: "_6th",
                        PLR: "plr",
                        RiCoh: "ricoh",
                        LibraMfp: "libraMfp",
                        LibraPrt: "libraPrt",
                        Mebius: "mebius",
                        Toner: "toner",
                        Rps: "rps",
                        _6THA3A3S: "_6thA3A3S",
                        PictorPrt: "pictorPrt",
                        PictorMfp: "pictorMfp",
                        Iris: "iris",
                        Note: "note",
                        LabelCheck: "labelCheck",
                        CreateBy: "createBy",
                        CutTime: "cutTime",
                        InvoiceTime: "invoiceTime",
                        LiftFloor: "liftfloor",
                        Status: "status"
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
                        var getRowTotal = table.column({ page: 'current' }).data().count()

                        return getRowTotal;
                    }, 0);

                var _6th = api
                    .column(16, { page: 'current' })
                    .data()
                    .reduce(function (a, b) {
                        return intVal(a) + intVal(b);
                    }, 0);

                var Plr = api
                    .column(17, { page: 'current' })
                    .data()
                    .reduce(function (a, b) {
                        return intVal(a) + intVal(b);
                    }, 0);
                var Ricoh = api
                    .column(18, { page: 'current' })
                    .data()
                    .reduce(function (a, b) {
                        return intVal(a) + intVal(b);
                    }, 0);
                var Libramfp = api
                    .column(19, { page: 'current' })
                    .data()
                    .reduce(function (a, b) {
                        return intVal(a) + intVal(b);
                    }, 0);
                var Libraprt = api
                    .column(20, { page: 'current' })
                    .data()
                    .reduce(function (a, b) {
                        return intVal(a) + intVal(b);
                    }, 0);
                var Mebius = api
                    .column(21, { page: 'current' })
                    .data()
                    .reduce(function (a, b) {
                        return intVal(a) + intVal(b);
                    }, 0);
                var Toner = api
                    .column(22, { page: 'current' })
                    .data()
                    .reduce(function (a, b) {
                        return intVal(a) + intVal(b);
                    }, 0);
                var Rps = api
                    .column(23, { page: 'current' })
                    .data()
                    .reduce(function (a, b) {
                        return intVal(a) + intVal(b);
                    }, 0);
                var _6thA3A3S = api
                    .column(24, { page: 'current' })
                    .data()
                    .reduce(function (a, b) {
                        return intVal(a) + intVal(b);
                    }, 0);
                var PictorPrt = api
                    .column(25, { page: 'current' })
                    .data()
                    .reduce(function (a, b) {
                        return intVal(a) + intVal(b);
                    }, 0);
                var PictorMfp = api
                    .column(26, { page: 'current' })
                    .data()
                    .reduce(function (a, b) {
                        return intVal(a) + intVal(b);
                    }, 0);
                var Iris = api
                    .column(27, { page: 'current' })
                    .data()
                    .reduce(function (a, b) {
                        return intVal(a) + intVal(b);
                    }, 0);
                // Update footer
                $(api.column(4).footer()).html('Tổng hồ sơ :');
                $(api.column(5).footer()).html(Totalpa);
                $(api.column(16).footer()).html(_6th);
                $(api.column(17).footer()).html(Plr);
                $(api.column(18).footer()).html(Ricoh);
                $(api.column(19).footer()).html(Libramfp);
                $(api.column(20).footer()).html(Libraprt);
                $(api.column(21).footer()).html(Mebius);
                $(api.column(22).footer()).html(Toner);
                $(api.column(23).footer()).html(Rps);
                $(api.column(24).footer()).html(_6thA3A3S);
                $(api.column(25).footer()).html(PictorPrt);
                $(api.column(26).footer()).html(PictorMfp);
                $(api.column(27).footer()).html(Iris);
            },


            columnDefs: [
                { "defaultContent": "-", "targets": "_all" },

                {
                    targets: [1,2],
                    orderable: false,
                },


                //{
                //    targets: [0,30,32,33,34],
                //    visible: false,
                //},

             

                {
                    targets: [0,31],
                    visible: false,
                },

                {
                    targets: [15],
                    render: function (data) {
                        if (data == null)
                            return "";
                        return moment(data).format('HH:mm:ss');
                    }
                },
                {
                    targets: [4],
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
                        //console.log(data);
                        return `
                            <button onclick="ShowModalEdit('${data.id
                            }','${data.invoiceNo
                            }','${data.contNo
                            }','${data.carries
                            }','${data.exportDirection
                            }','${data.pic
                            }','${data.booking
                            }','${data.nameDockingWarehouse
                            }','${data.nameKdtvnWarehouse
                            }','${data.note
                            }','${data.nameShippingMode
                            }','${data.nameContType
                            }','${data.packingTime
                            }','${data.cutTime
                            }','${data.invoiceTime
                            }','${data.nameDeclarationForm
                            }','${data.timeContArrived
                            }','${data.timeTakePlace
                            }','${data.timeFinish
                            }','${data.port
                            }','${data._6th
                            }','${data.libraPrt
                            }','${data._6thA3A3S
                            }','${data.plr
                            }','${data.mebius
                            }','${data.pictorPrt
                            }','${data.ricoh
                            }','${data.toner
                            }','${data.pictorMfp
                            }','${data.libraMfp
                            }','${data.rps
                            }','${data.iris
                            }','${data.liftFloor
                            }','${data.status
                            }','${data.total
                            }');"

                                title="Cập nhật Hồ Sơ"
                                class="btn btn-icon btn-active-light-danger btn-sm">
                                <span class="svg-icon svg-icon-muted svg-icon-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M2 4.63158C2 3.1782 3.1782 2 4.63158 2H13.47C14.0155 2 14.278 2.66919 13.8778 3.04006L12.4556 4.35821C11.9009 4.87228 11.1726 5.15789 10.4163 5.15789H7.1579C6.05333 5.15789 5.15789 6.05333 5.15789 7.1579V16.8421C5.15789 17.9467 6.05333 18.8421 7.1579 18.8421H16.8421C17.9467 18.8421 18.8421 17.9467 18.8421 16.8421V13.7518C18.8421 12.927 19.1817 12.1387 19.7809 11.572L20.9878 10.4308C21.3703 10.0691 22 10.3403 22 10.8668V19.3684C22 20.8218 20.8218 22 19.3684 22H4.63158C3.1782 22 2 20.8218 2 19.3684V4.63158Z" fill="black"></path>
                                <path d="M10.9256 11.1882C10.5351 10.7977 10.5351 10.1645 10.9256 9.77397L18.0669 2.6327C18.8479 1.85165 20.1143 1.85165 20.8953 2.6327L21.3665 3.10391C22.1476 3.88496 22.1476 5.15129 21.3665 5.93234L14.2252 13.0736C13.8347 13.4641 13.2016 13.4641 12.811 13.0736L10.9256 11.1882Z" fill="black"></path><path d="M8.82343 12.0064L8.08852 14.3348C7.8655 15.0414 8.46151 15.7366 9.19388 15.6242L11.8974 15.2092C12.4642 15.1222 12.6916 14.4278 12.2861 14.0223L9.98595 11.7221C9.61452 11.3507 8.98154 11.5055 8.82343 12.0064Z" fill="black"></path>
                                </svg></span>
                            </button>
                            <a  title="Xóa Hồ Sơ" href="javascript:;" onclick='removeItem("${data.id}");' class="btn btn-icon btn-active-light-danger btn-sm"><span class="svg-icon svg-icon-1"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M5 9C5 8.44772 5.44772 8 6 8H18C18.5523 8 19 8.44772 19 9V18C19 19.6569 17.6569 21 16 21H8C6.34315 21 5 19.6569 5 18V9Z" fill="black"/>
                            <path opacity="0.5" d="M5 5C5 4.44772 5.44772 4 6 4H18C18.5523 4 19 4.44772 19 5V5C19 5.55228 18.5523 6 18 6H6C5.44772 6 5 5.55228 5 5V5Z" fill="black"/>
                            <path opacity="0.5" d="M9 4C9 3.44772 9.44772 3 10 3H14C14.5523 3 15 3.44772 15 4V4H9V4Z" fill="black"/>
                            </svg></span>
                            </a>`;
                    }
                }
            ],
            scrollCollapse: true,
            fixedColumns: {
                left: 2,
                right: 1
            },
            lengthMenu: [[10, 20, 50, -1], [10, 20, 50, "All"]],
            buttons: [{
                extend: 'copyHtml5',
                exportOptions: {
                    columns: [0, ':visible']
                }
            },
                {
                    extend: 'excelHtml5',
                    exportOptions: {
                        columns: ':visible'
                    }
                },
                {
                    extend: 'pdfHtml5',
                    exportOptions: {
                        columns: [0, 1, 2, 5]
                    }
                },
                 "colvis"],
            initComplete: function () {
                $('#tbQLHS').DataTable().buttons().container().appendTo("#dt_tools");
            }
           
        });
        table = dt.$;
    }
    var HandleSearchDatatable = function () {
        $('#input_search_masterdata').keyup(function (e) {
            $('#tbQLHS').DataTable().search(e.target.value).draw();
        });
    };

    //upload file excel
    var handleUpload = function () {
        const uploadBtn = $('#btn_modal_add_product');
        uploadBtn.click(function (e) {
            $('#upl-product-list-modal').modal('show');
        });
    }


    var handleGetData = function () {
        var oTable = $('#tbQLHS').DataTable();  
        // khóa
        $("#inp-unlock-file").on('change', function () {
            if ($(this).is(':checked')) {
                $(this).attr('value', '2');
            } else {
                $(this).attr('value', '1');
            }
        })
        let getDataBtn = $("#search-btn");
        getDataBtn.click(function (e) {

            getDataBtn.attr("data-kt-indicator", "on");
            getDataBtn.prop("disabled", true);

            if (intialTable) {
                dt.ajax.url({
                    url: "../Masterdata/GetList",
                    type: "POST",
                    data: function (d) {       
                        //d.packingTime = $("#kt_daterangepicker").val();
                        d.invoiceNo = $("#inp-invoice").val()
                        d.exportDirection = $("#inp-huongxuat").val()
                        d.contNo = $("#inp-cont").val()
                        d.pic = $("#inp-pic").val()
                        d.carries = $("#inp-caries").val()
                        d.booking = $("#inp-booking").val()
                        d.nameKdtvnWarehouse = $("#select-ChonKhoKdtvn-edit").val().join('')
                        d.nameDockingWarehouse = $('input:radio[name="contact-warehouse"]:checked').val()
                        d.nameShippingMode = $('input[name="conttact-loaihinh"]:checked').val()
                        d.nameContType = $('input[name="externalLoaiCont"]:checked').val()
                        d.status = $('#inp-unlock-file').val()

                    },
                    columnDefs: [

                    ],
                    dataSrc: "",
                    dataFilter: function (response) {
                        // this to see what exactly is being sent back
                        console.log(response);
                        return response
                    },
                    error: function (error) {
                        // to see what the error is
                        //console.log(error);
                        ToastrAlertTopRight("error", error);

                        getDataBtn.attr("data-kt-indicator", "off");
                        getDataBtn.prop("disabled", false);
                    }
                }).load(function () {
                    getDataBtn.attr("data-kt-indicator", "off");
                    getDataBtn.prop("disabled", false);
                });

                intialTable = false;
            } else {
                dt.ajax.reload(function () {
                    getDataBtn.attr("data-kt-indicator", "off");
                    getDataBtn.prop("disabled", false);
                });
            }
            dt.buttons().container().appendTo("#dt_tools");
            var minDate, maxDate;
            $.fn.dataTable.ext.search.push(
                function (settings, data, dataIndex) {
                    var min = document.querySelector('#kt_daterangepicker')._flatpickr.selectedDates[0] == undefined ? null : document.querySelector('#kt_daterangepicker')._flatpickr.selectedDates[0];

                    var max = document.querySelector('#kt_daterangepicker')._flatpickr.selectedDates[1] == undefined ? null : document.querySelector('#kt_daterangepicker')._flatpickr.selectedDates[1];
                    var date = new Date(data[4]);

                    if (
                        (min === null && max === null) ||
                        (min === null && date <= max) ||
                        (min <= date && max === null) ||
                        (min <= date && date <= max)
                    ) {
                        return true;
                    }
                    return false;
                }
            );
           
        });
    }



    return {
        init: function () {
            initDatatable();
            insertNewPartInfo();
            updateInfo();
            Lock();
            HandleSearchDatatable();
            handleGetData();
            handleUpload();
        }
    }

}();

//On document loaded
KTUtil.onDOMContentLoaded(function () {
    DataTable.init();


    var dropzoneInit = new Dropzone("#kt_file_upload_pl", {
        url: "../Masterdata/UploadMasterData", // Set the url for your upload script location
        paramName: "file", // The name that will be used to transfer the file
        maxFiles: 1,
        maxFilesize: 10, // MB
        autoQueue: false,
        addRemoveLinks: true,
        accept: function (file, done) {
            if (file.name == "wow.jpg") {
                done("Naha, you don't.");
            } else {
                done();
            }
        },
        success: function (result) {
            const rs = JSON.parse(result.xhr.response);

            $("#btn_insert").attr("data-kt-indicator", "off");
            $("#btn_insert").prop("disabled", false);

            SweetAlert(rs.type, rs.message);

            if (rs.type == "success") {
                $('#upl-product-list-modal').modal('hide');
                Dropzone.forElement('#kt_file_upload_pl').removeAllFiles(true);
            }
        //    $('#table_product').DataTable().ajax.reload();
        },

      
    });
    $("#btn_insert").click(function () {
        var $this = $(this);
        dropzoneInit.enqueueFiles(dropzoneInit.getFilesWithStatus(Dropzone.ADDED));
        $this.attr("data-kt-indicator", "on");
        $this.prop("disabled", true);
    });



})


//SHOW MODAL EDIT
var ShowModalEdit = function (ID, InvoiceTruck, ContChi, HangXe, HuongXuat, PIC, Booking,
    //YesDGKN, NoDGKN,
    NameDockingWarehouse,
    NameKdtvnWarehouse,
    Note, NameShippingMode,
    NameContType,
    ThoiGianDuKien, ThoiGianCutTime, ThoiGianNhapCT,
    NameClarationForm,
    TimeContArrived, TimeTakePlace, TimeFinish, Port,
    _6th, LibraPRT, _6thA3A3S, PLR, Mebius, PictorPRT, Ricoh, Toner, PictorMFP, LibraMFP, RPS, Iris, LiftFloor, Status) {
    //clear dữ liệu trong input
    $('#kt-modal-edit input[type="radio"]').prop('checked', false);
    //clear dữ liệu trong select
    /*   $('#select-ChonKhoKdtvn-edit2 option:selected').val(null).trigger('');*/
    $('#kt-modal-edit ul').remove();
    //clear dữ liệu trong input checkbox
    $('#kt-modal-edit input[type="checkbox"]').prop('checked', false);


    $('#kt-modal-edit').modal('show');
    document.getElementById("ID-main").innerHTML = ID;
    //$('#ID-main-edit').val((ID == "null") ? "" : ID);
    $('#inp-Invoice-Truck-edit').val((InvoiceTruck == "null") ? "" : InvoiceTruck);
    $('#inp-Cont-Chi-edit').val((ContChi == "null") ? "" : ContChi);
    $('#inp-HangXe-edit').val((HangXe == "null") ? "" : HangXe);
    $('#inp-HuongXuat-edit').val((HuongXuat == "null") ? "" : HuongXuat);
    $('#inp-Pic-edit').val((PIC == "null") ? "" : PIC);
    $('#inp-Booking-edit').val((Booking == "null") ? "" : Booking);

    //$('#select-ChonKhoKdtvn-edit2').val((NameKdtvnWarehouse == "null") ? "" : NameKdtvnWarehouse);
    //$('#select-ChonKhoKdtvn-edit2').select2().select2('val', NameKdtvnWarehouse)
    var arr = NameKdtvnWarehouse.split('');
    $('#select-ChonKhoKdtvn-edit2').select2().val(arr).change();

    $('#select2-option').val();
    $('#inp-Note-edit').val((Note == "null") ? "" : Note);
    $('input:radio[name="contact-DGKN-edit"]').filter('[value="1"]').attr('checked', true);

    /* $('input:radio[name="contact-KhoNgoai-edit"]').filter('[value="' + NameDockingWarehouse + '"]').attr('checked', true);*/
    if (NameDockingWarehouse == "null") {
        $('input:radio[name="contact-KhoNgoai-edit"]').attr('checked', false);
        clickAddNo();
        clickRemoveYes();

    } else {
        $('input:radio[name="contact-KhoNgoai-edit"]').filter('[value="' + NameDockingWarehouse + '"]').prop('checked', true);
        clickAddYes();
        clickRemoveNo();
    }

    /*  $('input:radio[name="contact-LoaiHinh-edit"]').filter('[value="' + NameShippingMode + '"]').attr('checked', true);*/
    if (NameShippingMode == "null") {
        $('input:radio[name="contact-LoaiHinh-edit"]').attr('checked', false);
    } else {
        $('input:radio[name="contact-LoaiHinh-edit"]').filter('[value="' + NameShippingMode + '"]').prop('checked', true);
    }

    /* $('input:radio[name="contact-ContType-edit"]').filter('[value="' + NameContType + '"]').attr('checked', true);*/
    if (NameContType == "null") {
        $('input:radio[name="contact-ContType-edit"]').attr('checked', false);
    } else {
        $('input:radio[name="contact-ContType-edit"]').filter('[value="' + NameContType + '"]').prop('checked', true);
    }

    $('#inp-DateTimeDuKien-edit').val((ThoiGianDuKien == "null") ? "" : moment(ThoiGianDuKien).format("MM-DD-YYYY HH:mm"));
    $('#inp-DateTimeCutTime-edit').val((ThoiGianCutTime == "null") ? "" : moment(ThoiGianCutTime).format("MM-DD-YYYY HH:mm"));
    $('#inp-DateTimeNhapCT-edit').val((ThoiGianNhapCT == "null") ? "" : moment(ThoiGianNhapCT).format("MM-DD-YYYY HH:mm"));

    $('#select-ChonToKhai-edit').select2().val(NameClarationForm).change();

    $('#datetime-ContArrived-edit').val((TimeContArrived == "null") ? "" : TimeContArrived);
    $('#datetime-TimetakePlace-edit').val((TimeTakePlace == "null") ? "" : TimeTakePlace);
    $('#datetime-TimeFinish-edit').val((TimeFinish == "null") ? "" : TimeFinish);
    $('#inp-NhapCau-edit').val((Port == "null") ? "" : Port);

    $('#inp-6th-edit').val((_6th == "null") ? "" : _6th);
    $('#inp-LibraPrt-edit').val((LibraPRT == "null") ? "" : LibraPRT);
    $('#inp-6thA3A3S-edit').val((_6thA3A3S == "null") ? "" : _6thA3A3S);
    $('#inp-Plr-edit').val((PLR == "null") ? "" : PLR);
    $('#inp-Mebius-edit').val((Mebius == "null") ? "" : Mebius);
    $('#inp-PictorPrt-edit').val((PictorPRT == "null") ? "" : PictorPRT);
    $('#inp-Ricoh-edit').val((Ricoh == "null") ? "" : Ricoh);
    $('#inp-Toner-edit').val((Toner == "null") ? "" : Toner);
    $('#inp-PictorMfp-edit').val((PictorMFP == "null") ? "" : PictorMFP);
    $('#inp-LibraMfp-edit').val((LibraMFP == "null") ? "" : LibraMFP);
    $('#inp-Rps-edit').val((RPS == "null") ? "" : RPS);
    $('#inp-Iris-edit').val((Iris == "null") ? "" : Iris);
    ////show lift-floor
    if (LiftFloor == "null") {
        $('input:checkbox[name="contact-liftfloor-edit"]').attr('checked', false);
    } else {
        $('input:checkbox[name="contact-liftfloor-edit"]').filter('[value="' + LiftFloor + '"]').prop('checked', true);
    }
    //Status unlock click
    if (Status == "1") {
        $('#btn-unlock').hide();
        document.getElementById('inp-Invoice-Truck-edit').readOnly = false;
        document.getElementById('inp-Cont-Chi-edit').readOnly = false;
        document.getElementById('inp-HangXe-edit').readOnly = false;
        document.getElementById('inp-HuongXuat-edit').readOnly = false;
        document.getElementById('inp-Pic-edit').readOnly = false;
        document.getElementById('inp-Booking-edit').readOnly = false;
        const buttonTT = document.getElementById('inp-InThucTich-edit');
        // ✅ Set the disabled attribute
        buttonTT.removeAttribute('disabled');

        const buttonNT = document.getElementById('inp-Nangtang-edit');
        // ✅ Set the disabled attribute
        buttonNT.removeAttribute('disabled');

        $('input:radio[name="contact-KhoNgoai-edit"]:not(:checked)').attr('disabled', false);
        $('input:radio[name="contact-LoaiHinh-edit"]:not(:checked)').attr('disabled', false);
        $('input:radio[name="contact-ContType-edit"]:not(:checked)').attr('disabled', false);

        $('#select-ChonKhoKdtvn-edit2')
            .attr("disabled", false);
        document.getElementById("inp-Note-edit").readOnly = false;

        $('#inp-DateTimeDuKien-edit:not(:checked)').attr('disabled', false);
        $('#inp-DateTimeCutTime-edit:not(:checked)').attr('disabled', false);
        $('#inp-DateTimeNhapCT-edit:not(:checked)').attr('disabled', false);

        $('#select-ChonToKhai-edit')
            .attr("disabled", false);

        $('#kt-modal-edit input[type="number"]:not(:checked)').attr('disabled', false);
        //document.getElementById("btn-print").disabled = true;


    } else {
        $('#btn-unlock').show();
    }

    //Status lock click
    if (Status == "2") {
        $('#btn-lock').hide();
        document.getElementById('inp-Invoice-Truck-edit').readOnly = true;
        document.getElementById('inp-Cont-Chi-edit').readOnly = true;
        document.getElementById('inp-HangXe-edit').readOnly = true;
        document.getElementById('inp-HuongXuat-edit').readOnly = true;
        document.getElementById('inp-Pic-edit').readOnly = true;
        document.getElementById('inp-Booking-edit').readOnly = true;

        const buttonTT = document.getElementById('inp-InThucTich-edit');
        // ✅ Set the disabled attribute
        buttonTT.setAttribute('disabled', '');

        const buttonNT = document.getElementById('inp-Nangtang-edit');
        // ✅ Set the disabled attribute
        buttonNT.setAttribute('disabled', '');

        $('input:radio[name="contact-KhoNgoai-edit"]:not(:checked)').attr('disabled', true);
        $('input:radio[name="contact-LoaiHinh-edit"]:not(:checked)').attr('disabled', true);
        $('input:radio[name="contact-ContType-edit"]:not(:checked)').attr('disabled', true);


        $('#select-ChonKhoKdtvn-edit2')
            .attr("disabled", true);

        document.getElementById("inp-Note-edit").readOnly = true;

        $('#inp-DateTimeDuKien-edit:not(:checked)').attr('disabled', true);
        $('#inp-DateTimeCutTime-edit:not(:checked)').attr('disabled', true);
        $('#inp-DateTimeNhapCT-edit:not(:checked)').attr('disabled', true);

        $('#select-ChonToKhai-edit')
            .attr("disabled", true);

        $('#kt-modal-edit input[type="number"]:not(:checked)').attr('disabled', true);

        //document.getElementById("btn-print").disabled = false;

    } else {
        $('#btn-lock').show();
    }


    //Show Hide Kho Ngoài edit
    $("#inp-No-DGKN-edit").click(function () {

        $('input[name="contact-KhoNgoai-edit"]:checked').prop('checked', false);

        $("#result-khoNgoai-edit").hide();


    });


    $("#inp-Yes-DGKN-edit").click(function () {
        $('input:radio[name="contact-KhoNgoai-edit"]').filter('[value="' + NameDockingWarehouse + '"]').prop('checked', true);
        //$('input[name="contact-KhoNgoai-edit"]:checked').prop('checked', false);

        $("#result-khoNgoai-edit").show();


    });

}

//SHOW MODAL INSERT
var showModalInsert = function () {
    //clear
    $('#kt-modal-insert input[type="radio"]').prop('checked', false);
    $('#kt-modal-insert ul').remove();
    var addclyes = document.getElementById("inp-Yes-DGKN-insert");
    addclyes.classList.add("active");
    $('#result-KhoNgoai-insert').show();
    var addclno = document.getElementById("inp-No-DGKN-insert");
    addclno.classList.remove("active");

    $('#kt-modal-insert').modal('show');
    $('#inp-Invoice-Truck-insert').val('');
    $('#inp-Cont-Chi-insert').val('');
    $('#inp-HangXe-insert').val('');
    $('#inp-HuongXuat-insert').val('');
    $('#inp-Pic-insert').val('');
    $('#inp-Booking-insert').val('');
    $('#result-KhoNgoai-insert').val('');
    $('#select-ChonKhoKdtvn-edit3').select2().select2('val')
    $('#inp-Note-insert').val('');
    $('#result-LoaiHinh-insert').val('');
    $('#result_LoaiCont-insert').val('');
    $('#inp-DateTimeDuKien-insert').val('');
    $('#inp-DateTimeCutTime-insert').val('');
    $('#inp-DateTimeNhapCT-insert').val('');
    $('#select-ChonToKhai-insert').val('');
    $('#inp-6th-insert').val('');
    $('#inp-LibraPrt-insert').val('');
    $('#inp-6thA3A3S-insert').val('');
    $('#inp-Plr-insert').val('');
    $('#inp-Mebius-insert').val('');
    $('#inp-PictorPrt-insert').val('');
    $('#inp-Ricoh-insert').val('');
    $('#inp-Toner-insert').val('');
    $('#inp-PictorMfp-insert').val('');
    $('#inp-LibraMfp-insert').val('');
    $('#inp-Rps-insert').val('');
    $('#inp-Iris-insert').val('');
}



var insertNewPartInfo = function () {
    const insertBtn = document.getElementById('btn-insert');
    insertBtn.addEventListener('click', function () {


        let InvoiceTruck = $('#inp-Invoice-Truck-insert').val();
        let ContChi = $('#inp-Cont-Chi-insert').val();
        let HangXe = $('#inp-HangXe-insert').val();
        let HuongXuat = $('#inp-HuongXuat-insert').val();
        let PIC = $('#inp-Pic-insert').val();
        let Booking = $('#inp-Booking-insert').val();
        let InThucTich = $('#inp-InThucTich-insert').val();
        let NangTang = $('#inp-Nangtang-insert').val();
        //let YesDGKN = $('#inp-Yes-DGKN-insert').val();
        //let NoDGKN = $('#inp-No-DGKN-insert').val();
        let NameDockingWarehouse = $('input[name="KhoNgoai-insert"]:checked').val();
        const arr = $("#select-ChonKhoKdtvn-edit3").val();
        const str = arr.join("");
        let NameKdtvnWarehouse = str;

        let Note = $('#inp-Note-insert').val();
        let NameShippingMode = $('input[name="LoaiHinh-insert"]:checked').val();
        let NameContType = $('input[name="cont_type_insert"]:checked').val();
        let Namedeclarationform = $("#select-ChonToKhai-insert option:selected").val();
        let ThoiGianDuKien = $('#inp-DateTimeDuKien-insert').val();
        let ThoiGianCutTime = $('#inp-DateTimeCutTime-insert').val();
        let ThoiGianNhapCT = $('#inp-DateTimeNhapCT-insert').val();
        let Cau = $('#inp-NhapCau-insert').val();
        let _6th = $('#inp-6th-insert').val();
        let LibraPRT = $('#inp-LibraPrt-insert').val();
        let _6thA3A3S = $('#inp-6thA3A3S-insert').val();
        let PLR = $('#inp-Plr-insert').val();
        let Mebius = $('#inp-Mebius-insert').val();
        let PictorPRT = $('#inp-PictorPrt-insert').val();
        let Ricoh = $('#inp-Ricoh-insert').val();
        let Toner = $('#inp-Toner-insert').val();
        let PictorMFP = $('#inp-PictorMfp-insert').val();
        let LibraMFP = $('#inp-LibraMfp-insert').val();
        let RPS = $('#inp-Rps-insert').val();
        let Iris = $('#inp-Iris-insert').val();

        if (InvoiceTruck == "") {
            SweetAlert("error", "Hãy nhập Số Invoice/Truck")
        }
        else if (ContChi == "") {
            SweetAlert("error", "Hãy nhập Số Cont/Chì")
        }
        else {
            $.ajax({
                type: "POST",
                data: {
                    invoiceNo: InvoiceTruck, contNo: ContChi, carries: HangXe, exportDirection: HuongXuat,
                    pic: PIC, booking: Booking,
                    /*  dockingWarehouseID: YesDGKN, dockingWarehouseID: NoDGKN,*/
                    nameDockingWarehouse: NameDockingWarehouse,
                    nameKdtvnWarehouse: NameKdtvnWarehouse, note: Note,
                    nameShippingMode: NameShippingMode,
                    nameContType: NameContType,
                    cutTime: ThoiGianCutTime,
                    nameDeclarationForm: Namedeclarationform,
                    invoiceTime: ThoiGianNhapCT,
                    _6th: _6th, libraPrt: LibraPRT, _6thA3A3S: _6thA3A3S, plr: PLR, mebius: Mebius, pictorPrt: PictorPRT,
                    ricoh: Ricoh, toner: Toner, pictorMfp: PictorMFP, libraMfp: LibraMFP, rps: RPS, iris: Iris
                    , packingTime: ThoiGianDuKien
                },
                url: "../Masterdata/InsertQLHS",
                success: function (response) {
                    //SweetAlert(response.type, response.message);

                    $('#kt-modal-edit').modal('hide');
                    SweetAlert(response.type, response.message)
                //    $('#tbQLHS').DataTable().ajax.reload();
                },
                failure: function (response) {
                    debugger
                    console.log(response);
                },
                error: function (response) {
                    debugger
                    console.log(response);
                }
            });

            closeInsertModal();
        }
    })
}


var closeInsertModal = function () {
    $('#kt-modal-insert').modal('hide');
}

var closeEditModal = function () {
    $('#kt-modal-edit').modal('hide');

}


//Update

var updateInfo = function () {
    const updateBtn = document.getElementById('btn-update');
    updateBtn.addEventListener('click', function () {

        UpdateMaster();

        UpdateWareHouseInUse();

    })
}
function UpdateMaster() {
    let InvoiceTruck = $('#inp-Invoice-Truck-edit').val();
    let ContChi = $('#inp-Cont-Chi-edit').val();
    let HuongXuat = $('#inp-HuongXuat-edit').val();
    let PIC = $('#inp-Pic-edit').val();
    let NameShippingMode = $('input[name="contact-LoaiHinh-edit"]:checked').val();
    let NameDockingWarehouse = $('input[name="contact-KhoNgoai-edit"]:checked').val();
    //let NameKdtvnWarehouse = $("#select-ChonKhoKdtvn-edit2 option:selected").val();
    const arr = $("#select-ChonKhoKdtvn-edit2").val();
    const str = arr.join("");

    let NameKdtvnWarehouse = str;

    let HangXe = $('#inp-HangXe-edit').val();
    let ThoiGianDuKien = $('#inp-DateTimeDuKien-edit').val();
    let _6th = $('#inp-6th-edit').val();
    let PLR = $('#inp-Plr-edit').val();
    let Ricoh = $('#inp-Ricoh-edit').val();
    let LibraMFP = $('#inp-LibraMfp-edit').val();
    let LibraPRT = $('#inp-LibraPrt-edit').val();
    let Mebius = $('#inp-Mebius-edit').val();
    let Toner = $('#inp-Toner-edit').val();
    let RPS = $('#inp-Rps-edit').val();
    let Note = $('#inp-Note-edit').val();
    let Namedeclarationform = $('#select-ChonToKhai-edit option:selected').val();
    let ID = $('#ID-main').text();
    let ThoiGianCutTime = $('#inp-DateTimeCutTime-edit').val();
    let ThoiGianNhapCT = $('#inp-DateTimeNhapCT-edit').val();
    let Booking = $('#inp-Booking-edit').val();
    let NameContType = $('input[name="contact-ContType-edit"]:checked').val();
    let _6thA3A3S = $('#inp-6thA3A3S-edit').val();
    let PictorPRT = $('#inp-PictorPrt-edit').val();
    let PictorMFP = $('#inp-PictorMfp-edit').val();
    let Iris = $('#inp-Iris-edit').val();
    let LiftFloor = $("input[type=checkbox][name=contact-liftfloor-edit]:checked").val();

    if (InvoiceTruck == "") {
        SweetAlert("error", "Kiểm tra lại Số InvoiceTruck")
    }
    else if (ContChi == "") {
        SweetAlert("error", "Hãy nhập Số Cont/Chì")
    }

    else {
        $.ajax({
            type: "PUT",
            data: {
                id: ID,
                invoiceNo: InvoiceTruck, contNo: ContChi, carries: HangXe, exportDirection: HuongXuat,
                pic: PIC, booking: Booking,
                nameDockingWarehouse: NameDockingWarehouse,
                nameKdtvnWarehouse: NameKdtvnWarehouse,
                note: Note,
                nameShippingMode: NameShippingMode,
                nameContType: NameContType,
                packingTime: ThoiGianDuKien,
                cutTime: ThoiGianCutTime,
                invoiceTime: ThoiGianNhapCT,
                nameDeclarationForm: Namedeclarationform,
                liftFloor: LiftFloor,
                _6th: _6th, libraPrt: LibraPRT, _6thA3A3S: _6thA3A3S, plr: PLR, mebius: Mebius, pictorPrt: PictorPRT,
                ricoh: Ricoh, toner: Toner, pictorMfp: PictorMFP, libraMfp: LibraMFP, rps: RPS, iris: Iris

            },
            url: "../Masterdata/UpdateQLHS",
            success: function (response) {

                //SweetAlert(response.type, response.message);
                $('#kt-modal-edit').modal('hide');
                SweetAlert(response.type, response.message)
                $('#tbQLHS').DataTable().ajax.reload();
            },
            failure: function (response) {

                console.log(response);
            },
            error: function (response) {

                console.log(response);
            }
        });
        closeEditModal();
    }
}

function UpdateWareHouseInUse() {
    var stockName = $("#select-ChonKhoKdtvn-edit2").val();
    for (var i = 0; i < stockName.length; i++) {
        let MasterID = $('#ID-main').text();
        let NameKdtvnWarehouse = stockName[i];
        let TimeContArrived = $("#id-" + stockName[i] + "-datetime-ContArrived").val();
        let TimeTakePlace = $("#id-" + stockName[i] + "-datetime-TimetakePlace").val();
        let Port = $("#id-" + stockName[i] + "-inp-NhapCau-edit").val();
        let TimeFinish = $("#id-" + stockName[i] + "-datetime-TimeFinish").val();


        $.ajax({
            type: "POST",
            data: {
                masterID: MasterID,
                nameKdtvnWarehouse: NameKdtvnWarehouse,
                timeContArrived: TimeContArrived,
                timeTakePlace: TimeTakePlace,
                port: Port,
                timeFinish: TimeFinish

            },
            url: "../Masterdata/InsertWHIU",
            success: function (response) {
                //SweetAlert(response.type, response.message);
                console.log(response);
                $('#kt-modal-edit').modal('hide');

            },
            failure: function (response) {
                debugger
                console.log(response);
            },
            error: function (response) {
                debugger
                console.log(response);
            }
        });
    }
    closeEditModal();
    /*  SweetAlert(response.type, response.message)*/
    $('#tbQLHS').DataTable().ajax.reload();
}

//lock , unlock
var Lock = function () {
    const lockBtn = document.getElementById('btn-lock');
    const UnlockBtn = document.getElementById('btn-unlock');
    lockBtn.addEventListener('click', function () {
        clickLock();
    })
    UnlockBtn.addEventListener('click', function () {
        ClickUnLock();
    })
}
function clickLock() {
    let ID = $('#ID-main').text();
    //let InvoiceTruck = $('#inp-Invoice-Truck-edit').val();
    //let ContChi = $('#inp-Cont-Chi-edit').val();
    //let HuongXuat = $('#inp-HuongXuat-edit').val();
    //let PIC = $('#inp-Pic-edit').val();
    //let NameShippingMode = $('input[name="contact-LoaiHinh-edit"]:checked').val();
    //let NameDockingWarehouse = $('input[name="contact-KhoNgoai-edit"]:checked').val();
    //let NameKdtvnWarehouse = $("#select-ChonKhoKdtvn-edit2 option:selected").val();
    //let HangXe = $('#inp-HangXe-edit').val();
    //let ThoiGianDuKien = $('#inp-DateTimeDuKien-edit').val();
    //let _6th = $('#inp-6th-edit').val();
    //let PLR = $('#inp-Plr-edit').val();
    //let Ricoh = $('#inp-Ricoh-edit').val();
    //let LibraMFP = $('#inp-LibraMfp-edit').val();
    //let LibraPRT = $('#inp-LibraPrt-edit').val();
    //let Mebius = $('#inp-Mebius-edit').val();
    //let Toner = $('#inp-Toner-edit').val();
    //let RPS = $('#inp-Rps-edit').val();
    //let Note = $('#inp-Note-edit').val();
    //let Namedeclarationform = $('#select-ChonToKhai-edit option:selected').val();
    //let ThoiGianCutTime = $('#inp-DateTimeCutTime-edit').val();
    //let ThoiGianNhapCT = $('#inp-DateTimeNhapCT-edit').val();
    //let Booking = $('#inp-Booking-edit').val();
    //let NameContType = $('input[name="contact-ContType-edit"]:checked').val();
    //let _6thA3A3S = $('#inp-6thA3A3S-edit').val();
    //let PictorPRT = $('#inp-PictorPrt-edit').val();
    //let PictorMFP = $('#inp-PictorMfp-edit').val();
    //let Iris = $('#inp-Iris-edit').val();
    //let LiftFloor = $("input[type=checkbox][name=contact-liftfloor-edit]:checked").val();
    $.ajax({
        type: "PUT",
        data: {
            id: ID,
            //invoiceNo: InvoiceTruck, contNo: ContChi, carries: HangXe, exportDirection: HuongXuat,
            //pic: PIC, booking: Booking,
            //nameDockingWarehouse: NameDockingWarehouse,
            //nameKdtvnWarehouse: NameKdtvnWarehouse,
            //note: Note,
            //nameShippingMode: NameShippingMode,
            //nameContType: NameContType,
            //packingTime: ThoiGianDuKien,
            //cutTime: ThoiGianCutTime,
            //invoiceTime: ThoiGianNhapCT,
            //namedeclarationform: Namedeclarationform,
            //liftFloor: LiftFloor,
            //_6th: _6th, libraPrt: LibraPRT, _6thA3A3S: _6thA3A3S, plr: PLR, mebius: Mebius, pictorPrt: PictorPRT,
            //ricoh: Ricoh, toner: Toner, pictorMfp: PictorMFP, libraMfp: LibraMFP, rps: RPS, iris: Iris

        },
        url: "../Masterdata/btnLock",
        success: function (response) {

            //SweetAlert(response.type, response.message);
            $('#kt-modal-edit').modal('hide');
            SweetAlert(response.type, response.message)
            $('#tbQLHS').DataTable().ajax.reload();
        },
        failure: function (response) {

            console.log(response);
        },
        error: function (response) {

            console.log(response);
        }
    });
}

function ClickUnLock() {
    let ID = $('#ID-main').text();
    $.ajax({
        type: "PUT",
        data: {
            id: ID,
        },
        url: "../Masterdata/btnUnLock",
        success: function (response) {

            //SweetAlert(response.type, response.message);
            $('#kt-modal-edit').modal('hide');
            SweetAlert(response.type, response.message)
            $('#tbQLHS').DataTable().ajax.reload();
        },
        failure: function (response) {

            console.log(response);
        },
        error: function (response) {

            console.log(response);
        }
    });
}

// Delete
var removeItem = function (ID) {
    Swal.fire({
        title: "Xác nhận xoá",
        text: "Bạn có chắc chắn muốn xóa ID nay  ?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Xác nhận'
    }).then((result) => {

        if (result.isConfirmed) {
            $.ajax({
                type: "DELETE",
                data: {
                    id: ID

                },

                url: "../Masterdata/DeleteQLHS",
                success: function (response) {
                    ToastrAlertTopRight(response.type, response.message);
                    if (response.type == "success") {
                        $('#tbQLHS').DataTable().ajax.reload();
                    }
                },
                failure: function (response) {
                    console.log(response);
                },
                error: function (response) {
                    console.log(response);
                }
            });
        }
    })
}


//doublue click radio
//$(document).on('dblclick', function () {
//    $('#tbQLHS').prop('checked', false);
//    if ($('.form-radio0').is(':checked')) {
//        $('.form-radio0').prop('checked', false);
//        ///*location.reload(true);*/
//        //$('#tbQLHS').DataTable().destroy();
//        //$('#tbQLHS').find().append();
//        //$('#tbQLHS').DataTable().draw();
//    }
//    if ($('.form-radio1').is(':checked')) {
//        $('.form-radio1').prop('checked', false);
//        ///*location.reload(true);*/
//        //$('#tbQLHS').DataTable().destroy();
//        //$('#tbQLHS').find().append();
//        //$('#tbQLHS').DataTable().draw();
//    }
//    if ($('.form-radio2').is(':checked')) {
//        $('.form-radio2').prop('checked', false);
//        ///*location.reload(true);*/
//        //$('#tbQLHS').DataTable().destroy();
//        //$('#tbQLHS').find().append();
//        //$('#tbQLHS').DataTable().draw();
//    }
//});
//add class
function clickAddYes() {
    var currP = document.getElementById("inp-Yes-DGKN-edit");
    currP.classList.add("active");
    $('#result-khoNgoai-edit').show();
}
function clickAddNo() {
    var currP = document.getElementById("inp-No-DGKN-edit");
    currP.classList.add("active");
    $('#result-khoNgoai-edit').hide();
}
//remove class
function clickRemoveYes() {
    var currP = document.getElementById("inp-Yes-DGKN-edit");
    currP.classList.remove("active");
}
function clickRemoveNo() {
    var currP = document.getElementById("inp-No-DGKN-edit");
    currP.classList.remove("active");
}

//button clear
function cleartimefrom() {
    document.getElementById('inp-packingtime-to').value = '';
}
function cleartimeto() {
    document.getElementById('inp-packingtime-from').value = '';
}



$(document).ready(function () {

    //Show Hide Kho Ngoài
    $("#inp-KhoNgoai-khong").click(function () {

        $("#result-khongoai").hide();


    });
    $("#inp-KhoNgoai-Co").click(function () {
        $("#result-khongoai").show();


    });

    //Show Hide Loại Hình
    $("#inp-AIR").click(function () {

        $("#Result-ContType").hide();
        $('input[name="externalLoaiCont"]:checked').prop('checked', false);


    });
    $("#inp-LCL").click(function () {

        $("#Result-ContType").hide();
        $('input[name="externalLoaiCont"]:checked').prop('checked', false);

    });
    $("#inp-SEA").click(function () {
        $("#Result-ContType").show();


    });


    ////Show Hide Kho Ngoài edit
    //$("#inp-No-DGKN-edit").click(function () {

    //    $('input[name="contact-KhoNgoai-edit"]:checked').prop('checked', false);

    //    $("#result-khoNgoai-edit").hide();

    //    $('#row-after').addClass('show-hide-radio');

    //});


    //$("#inp-Yes-DGKN-edit").click(function () {
    //    $("#result-khoNgoai-edit").show();
    //    $('#row-after').removeClass('show-hide-radio');


    //});


    //Show Hide Kho Ngoài insert
    $("#inp-No-DGKN-insert").click(function () {
        $('input[name="KhoNgoai-insert"]:checked').prop('checked', false);
        $("#result-KhoNgoai-insert").hide();

    });

    $("#inp-Yes-DGKN-insert").click(function () {
        $("#result-KhoNgoai-insert").show();
    });


    //Show Hide Loại Hình Edit
    $("#inp-Sea-edit").click(function () {
        $("#result-Conttype-edit").show();
    });

    $("#inp-Air-edit").click(function () {
        $('input[name="contact-ContType-edit"]:checked').prop('checked', false);
        $("#result-Conttype-edit").hide();

    });
    $("#inp-Lcl-edit").click(function () {
        $('input[name="contact-ContType-edit"]:checked').prop('checked', false);
        $("#result-Conttype-edit").hide();


    });
   

    //Show Hide Loại Hình Insert
    $("#inp-Sea-insert").click(function () {
        $("#result_LoaiCont-insert").show();
        $("#lbl_LoaiCont_insert").show();


    });

    $("#inp-Air-insert").click(function () {

        $("#result_LoaiCont-insert").hide();
        $('input[name="cont_type_insert"]:checked').prop('checked', false);

    });
    $("#inp-Lcl-insert").click(function () {

        $("#result_LoaiCont-insert").hide();
        $('input[name="cont_type_insert"]:checked').prop('checked', false);

    });
 
  
    //Changed   select-ChonKhoKdtvn-edit2

    $("#select-ChonKhoKdtvn-edit2").change(function () {

        var stockName = $("#select-ChonKhoKdtvn-edit2 ").val();
        var masterId = $('#ID-main').text();
        $("#label-kdtvn-khac-edit").empty();
        $("#date-cont-edit").empty();
        var html = ``;
        var content = ``;
        console.log(stockName);
        for (var i = 0; i < stockName.length; i++) {
            html += `<li class="nav-item w-md-150px me-0">
							<a class="nav-link" data-bs-toggle="tab" href="#id_`+ stockName[i] + `_kt_tab_pane">` + 'KDTVN ' + stockName[i] + `</a>
    				</li>`;


            content += `
                        <div class="tab-pane fade" id="id_`+ stockName[i] + `_kt_tab_pane" role="tabpanel">
                            <div class="fv-row mb-5 col-sm-12 col-md-12">
                                    <label for="" class="form-label" >Thời gian cont đến</label>
                                    <input class="form-control form-control-solid flatpickr-input" placeholder="Pick date & time" id="id-`+ stockName[i] + `-datetime-ContArrived" />
                            </div>
                            <div class="fv-row mb-5 col-sm-12 col-md-12">
                                    <label for="" class="form-label" >Thời gian cont đến</label>
                                    <input class="form-control form-control-solid flatpickr-input" placeholder="Pick date & time" id="id-`+ stockName[i] + `-datetime-TimetakePlace" />
                            </div>
                            <div class="fv-row mb-5 col-sm-12 col-md-12">
                                    <label for="" class="form-label" >Thời gian cont đến</label>
                                    <input class="form-control form-control-solid flatpickr-input" placeholder="Pick date & time" id="id-`+ stockName[i] + `-datetime-TimeFinish" />
                            </div>

                            <div class="Cau-edit" style="width:80%">
                                    <label for="lbl_Cau">Cầu </label>
                                    <input style="width:125%" type="search" class="form-control" id="id-`+ stockName[i] + `-inp-NhapCau-edit" placeholder="Nhập cầu">
                            </div>
                        </div>`;

        }
        html = `<ul class="nav nav-tabs nav-pills border-0 flex-row flex-md-column me-5 mb-3 mb-md-0 fs-6">` + html + `</ul>`;
        console.log(html);
        $("#label-kdtvn-khac-edit").append(html);

        //apent conttent

        console.log(stockName);
        content = `<div class="tab-content" id="myTabContent">` + content + ` </div>   `;
        console.log(content);
        $("#date-cont-edit").append(content);
        for (var i = 0; i < stockName.length; i++) {
            $("#id-" + stockName[i] + "-datetime-ContArrived").flatpickr({
                enableTime: true,
                dateFormat: "Y-m-d H:i",
            });

            $("#id-" + stockName[i] + "-datetime-TimetakePlace").flatpickr({
                enableTime: true,
                dateFormat: "Y-m-d H:i",
            });

            $("#id-" + stockName[i] + "-datetime-TimeFinish").flatpickr({
                enableTime: true,
                dateFormat: "Y-m-d H:i",
            });

        }

        $('#label-kdtvn-khac-edit a:first').addClass("active");
        $('#myTabContent div:first').addClass('show active');
        $.ajax({
            url: "../Masterdata/GetWarehouseByID",

            type: "post",


            data: {
                stockName: stockName,
                masterId: masterId,
            },
            success: function (result) {

                if (result) {
                    for (var i = 0; i < result.length; i++) {
                        $("#id-" + result[i]["nameKdtvnWarehouse"] + "-datetime-ContArrived").val((result[i]['timeTakePlace'] == null) ? "" : moment(result[i]['timeContArrived']).format("MM-DD-YYYY HH:mm"));
                        $("#id-" + result[i]["nameKdtvnWarehouse"] + "-datetime-TimetakePlace").val((result[i]['timeTakePlace'] == null) ? "" : moment(result[i]['timeTakePlace']).format("MM-DD-YYYY HH:mm"));
                        $("#id-" + result[i]["nameKdtvnWarehouse"] + "-datetime-TimeFinish").val((result[i]['timeFinish'] == null) ? "": moment(result[i]['timeFinish']).format("MM-DD-YYYY HH:mm"));
                        $("#id-" + result[i]["nameKdtvnWarehouse"] + "-inp-NhapCau-edit").val(result[i]['port']);
                    }
                }



            },
            error: function (error) {
                toastralert("error", error);
            }
        });
    });




    //Refresh
    table = $("#tbQLHS").DataTable();
    $("#btn_refresh").on("click", function () {
        //table.ajax.reload(null, false);
        location.reload(true);
    });



});

////SEARCH  MULTIPLE DATAE TIME
//var minDate, maxDate;
//$.fn.dataTable.ext.search.push(
//    function (settings, data, dataIndex) {
//        var min = document.querySelector('#kt_daterangepicker')._flatpickr.selectedDates[0] == undefined ? null : document.querySelector('#kt_daterangepicker')._flatpickr.selectedDates[0];

//        var max = document.querySelector('#kt_daterangepicker')._flatpickr.selectedDates[1] == undefined ? null : document.querySelector('#kt_daterangepicker')._flatpickr.selectedDates[1];
//        var date = new Date(data[4]);

//        if (
//            (min === null && max === null) ||
//            (min === null && date <= max) ||
//            (min <= date && max === null) ||
//            (min <= date && date <= max)
//        ) {
//            return true;
//        }
//        return false;
//    }
//);


//});

//var Total = function () {
//    const TotalPrint = document.getElementById('btn-print');
//    TotalPrint.addEventListener('click', function () {
//        clickTotal();
//    })
//}
//function clickTotal() {

//    let ID = $('#ID-main').text();


//            $.ajax({
//                type: "POST",
//                data: {
//                    id: ID,

//                },
//                url: "../Masterdata/ExportExcel",
//                success: function (data) {
//                    var json_bytes = JSON.parse(data);
//                    var binaryString = window.atob(json_bytes);
//                    var binaryLen = binaryString.length;
//                    var bytes = new Uint8Array(binaryLen);
//                    for (var i = 0; i < binaryLen; i++) {
//                        var ascii = binaryString.charCodeAt(i);
//                        bytes[i] = ascii;
//                    }
//                    var blob = new Blob([bytes], { type: "application/octet-stream" });
//                    var link = document.createElement('a');
//                    link.href = window.URL.createObjectURL(blob);
//                    var fileName = "tmp.xlsm";
//                    link.download = fileName;
//                    link.click();
//                }

//            });

//}


//double click radio

$(document).on('dblclick', '.form-control0', function () {
    if (this.checked) {
        $(this).prop('checked', false);
    }
});