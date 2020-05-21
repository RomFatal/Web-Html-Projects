var modifyTable = table = document.querySelectorAll('tr');
const selectElement = document.querySelector('html');

$(document).ready(function () {
    $('#Urgency').on('change', function (e) {
        var value = e.target.value
        var match = ''
        table.forEach(row => {
            tableCol = row.querySelectorAll('td');
            if (tableCol.length == 0) return;
            if (tableCol[3].textContent == value || value == "all") {
                match +=
                    '<tr>' +
                    '<td scope="row">' + tableCol[0].textContent + '</td>' +
                    '<td>' + tableCol[1].textContent + '</td>' +
                    '<td>' + tableCol[2].textContent + '</td>' +
                    '<td>' + tableCol[3].textContent + '</td>' +
                    '<td>' + '<a href="garbageInfo.html"><span class="material-icons navbar-brand">edit</span><span class="material-icons navbar-brand">visibility</span><span class="material-icons navbar-brand">delete_forever</span></a>' + '</td>' +
                    '</tr>'
            }
        });
        $('tbody').html(match)
        modifyTable = document.querySelectorAll('tr');
    })
});

var eventList = ['change', 'load'];
eventList.forEach(event => {
    window.addEventListener(event, (event) => {
        modifyTable.forEach(row => {
            tableCol = row.querySelectorAll('td');
            if (tableCol.length == 0) return;
            capacity = tableCol[2].textContent;
            capacity = capacity.substring(0, capacity.length - 1);
            if (capacity > 70)
                $(row).addClass("table-danger");
        });
    });
});
var eventListBtn = ['resize', 'load'];
eventListBtn.forEach(event => {
    $(window).on(event, function () {
        var win = $(this);
        if (win.width() < 870) {
            var btn = document.querySelectorAll('.activity');
            $(btn).removeClass('col-4');
        }
        else {
            var btn = document.querySelectorAll('.activity');
            $(btn).addClass('col-4');
        }
    });
});
// Begin jQuery
$(document).ready(function () {
    $("#nav-reflection li").append("");
    $("#nav-reflection a").hover(function () {
        $(this).stop().animate({ marginTop: "-10px" }, 1000);
        $(this).parent().find("span").stop().animate({ marginTop: "18px", opacity: 0.25 }, 200);
    }, function () {
        $(this).stop().animate({ marginTop: "0px" }, 300);
        $(this).parent().find("span").stop().animate({ marginTop: "1px", opacity: 1 }, 300);
    });
});