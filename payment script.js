$('#type').on('change', function() {
  var mode = parseInt($(this).val());
  if ( mode == 0 ) {
        $('.bank').hide();
        $('.bitcoin').hide();
        $('.mpesa').hide();
        $('.mobile').show();
        $('.bitcoin input').removeAttr('required');
        $('.mpesa input').removeAttr('required');
        $('.bank input').removeAttr('required');
        $('.mobile input').attr('required', 'true');
        $('#branch-code').removeAttr('required');
    }
  else if ( mode == 2 ) {
      $('.bank').show();
      $('.bitcoin').hide();
      $('.mpesa').hide();
      $('.mobile').hide();
      $('.mobile input').removeAttr('required');
      $('.bitcoin input').removeAttr('required');
      $('.mpesa input').removeAttr('required');
      $('.bank input').attr('required', 'true');
      $('#branch-code').removeAttr('required');
  }
  else if ( mode == 3 ){
      $('.bank').hide();
      $('.mpesa').hide();
      $('.bitcoin').show();
      $('.mobile').hide();
      $('.mobile input').removeAttr('required');
      $('.bank input').removeAttr('required');
      $('.mpesa input').removeAttr('required');
      $('.bitcoin input').attr('required', 'true');
  }
  else {
    $('.bank').hide();
    $('.bitcoin').hide();
    $('.mpesa').show();
    $('.mobile').hide();
    $('.mobile input').removeAttr('required');
    $('.bank input').removeAttr('required');
    $('.bitcoin input').removeAttr('required');
    $('.mpesa input').attr('required', 'true');
}
})