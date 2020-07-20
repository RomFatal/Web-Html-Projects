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
                    '<td>' + '<a href="garbageInfo.html"><span class="material-icons navbar-brand">edit</span></a><a href="garbageInfo.html"><span class="material-icons navbar-brand">visibility</span></a><a href="garbageInfo.html"><span class="material-icons navbar-brand">delete_forever</span></a>' + '</td>' +
                    '</tr>'
            }
        });
        $('tbody').html(match)
        modifyTable = document.querySelectorAll('tr');
    })
});

$(document).ready(function () {
    $('#Urgency_user').on('change', function (e) {
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
                    '<td>' + '<a href="user_garbageInfo.html"><span class="material-icons navbar-brand">edit</span></a><a href="user_garbageInfo.html"><span class="material-icons navbar-brand">visibility</span></a>' + '</td>' +
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
function usereditgarbage(id)
{
      var comment =   document.getElementById('Comment')
      if(comment.disabled == true){
        comment.disabled = false;
        id.innerHTML = "Save";
      }else{
        comment.disabled = true;
        id.innerHTML = "Edit Garbage";
      }
      
      
}
function editgarbage(id)
{

    var comment =   document.getElementById('Comment')
    var radio1 =   document.getElementById('customRadio1')
    var radio2 =   document.getElementById('customRadio2')
    var radio3 =   document.getElementById('customRadio3')
    var radio4 =   document.getElementById('customRadio4')
    var capacity =   document.getElementById('Capacity')
    var address =   document.getElementById('Address')
    
    
      if(comment.disabled == true){
        comment.disabled = false;
        radio1.disabled = false;
        radio2.disabled = false;
        radio3.disabled = false;
        radio4.disabled = false;
        capacity.disabled = false;
        address.disabled = false;
        id.innerHTML = "Save";
      }else{
        comment.disabled = true;
        radio1.disabled = true;
        radio2.disabled = true;
        radio3.disabled = true;
        radio4.disabled = true;
        capacity.disabled = true;
        address.disabled = true;
        id.innerHTML = "Edit Garbage";
      }
      
      
}