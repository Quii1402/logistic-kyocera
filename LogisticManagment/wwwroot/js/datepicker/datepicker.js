//Date Index Quản lý hồ sơ

//$("#inp-DuKien-datetime").flatpickr();
//$("#inp-Nhap-datetime").flatpickr();

//$("#inp-DuKien-datetime").flatpickr({
//    altInput: false,
//    altFormat: "F j, Y",
//    dateFormat: "Y-m-d",
//    mode: "range"
//});
//$("#inp-packingtime-to").flatpickr({
//    enableTime: false,
//    format: 'MMMM Do YYYY'
//});
//$("#inp-packingtime-from").flatpickr({
//    enableTime: false,
//    format: 'MMMM Do YYYY'
//});


//date dự kiến edit
$("#inp-DateTimeDuKien-edit").flatpickr({
    enableTime: true,
    dateFormat: "Y-m-d H:i",
});

$("#inp-DateTimeCutTime-edit").flatpickr({
    enableTime: true,
    dateFormat: "Y-m-d H:i",
});

$("#inp-DateTimeNhapCT-edit").flatpickr({
    enableTime: true,
    dateFormat: "Y-m-d H:i",
});

//DATE DỰ KIẾN INSERT
$("#inp-DateTimeDuKien-insert").flatpickr({
    enableTime: true,
    dateFormat: "Y-m-d H:i",
});

$("#inp-DateTimeCutTime-insert").flatpickr({
    enableTime: true,
    dateFormat: "Y-m-d H:i",
});

$("#inp-DateTimeNhapCT-insert").flatpickr({
    enableTime: true,
    dateFormat: "Y-m-d H:i",
});





////DATE WAREHOUSE EDIT
//$("#datetime-ContArrived-edit").flatpickr({
//    enableTime: true,
//    dateFormat: "Y-m-d H:i",
//});
////Date
//$("#datetime-TimetakePlace-edit").flatpickr({
//    enableTime: true,
//    dateFormat: "Y-m-d H:i",
//});
////date
//$("#datetime-TimeFinish-edit").flatpickr({
//    enableTime: true,
//    dateFormat: "Y-m-d H:i",
//});

//DATE WAREHOUSE INSERT
$("#datetime-ContArrived-insert").flatpickr({
    enableTime: false,
    dateFormat: "Y-m-d H:i",
});
//Date
$("#datetime-TimetakePlace-insert").flatpickr({
    enableTime: false,
    dateFormat: "Y-m-d H:i",
});
//date
$("#datetime-TimeFinish-insert").flatpickr({
    enableTime: false,
    dateFormat: "Y-m-d H:i",
});

//SEArch RANGE
$("#kt_daterangepicker").flatpickr({
    altInput: true,
    altFormat: "Y-m-d",
    dateFormat: "Y-m-d",
    mode: "range"
});
