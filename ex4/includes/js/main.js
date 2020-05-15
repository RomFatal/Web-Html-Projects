var errorShowFlag = 0;
$(document).ready(function () {
  $('#btn').click(function () {
    var checkIfChoose = $('input[name="interests[]"]');
    var error = $('<span class="error">&nbsp; Must Select one</span>')
    .insertAfter(checkIfChoose[2].parentElement)
    .hide();
    if (!$("input[type=checkbox]:checked").length) {
      if(!errorShowFlag)
      error.show();
      errorShowFlag = 1;
      return false;
    }
  });
});
