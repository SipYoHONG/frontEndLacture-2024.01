$(document).ready(function() {
  $('#dob1').focus();

  $('#dob1').on('input', function() {
      const dob1 = $(this).val();
      const dob2 = $('#dob2');

      if (dob1.length === 6) {
          dob2.val('');
          dob2.focus();
      } else if (dob1.length > 6) {
          $(this).val(dob1.slice(0, 6));
      }
  });

  $('#dob2').on('input', function() {
      const dob2 = $(this).val();
      const dob1 = $('#dob1');

      if (dob2.length === 0) {
          dob1.focus();
      }
  });
});