$( document ).ready(function() {
  $.fn.serializeObject = function(){
   var o = {};
   var a = this.serializeArray();
   $.each(a, function() {
       if (o[this.name]) {
           if (!o[this.name].push) {
               o[this.name] = [o[this.name]];
           }
           o[this.name].push(this.value || '');
       } else {
           o[this.name] = this.value || '';
       }
   });
   return o;
 };

  $(".navbar-toggler").click(function(e){
    $( ".meta-section" ).toggle( "slow", function() {
    });
    $( ".meta-section" ).toggle( "slow", function() {
    });
  })

  var $form = $('form#form'),
    url = 'https://script.google.com/macros/s/AKfycbw8_yNP1P_JPW6rtVfKznNQtu2Ji8WQQo5UBzvSzzfGE6Ic7nBa/exec'
    $('#form').on('submit', function(e) {
      e.preventDefault();
      var jqxhr = $.ajax({
        type: "GET",
        url: url,
        dataType: "json",
        data: $form.serializeObject(),
        success: function(msg) {
          console.log('posted-->', msg)
          console.log('modal-->', $('modal'));
          $('.modal').css('display', 'block');
        }
      })
    })
})
