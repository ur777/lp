  $(document).ready(function() {
    $("#btn-callback-carousel").on("click", function(){
      $("#callback-modal").modal('show');
    });
    $("#btn-callback-phone-icon").on("click", function(){
      $("#callback-modal").modal('show');
      $("#inputSite").val('Клиент заказал обратный звонок');
    });

    $("#btn-callback-carousel-ok").on("click", function(){
      $("#callback-modal").modal('hide');
    });

    $("#callBackMain").on("click", function(){
      $("#callback-modal").modal('hide');
    });

    $("#success-modal-ok").on("click", function(){
      $("#success-modal").modal('hide');
    });

    window.setInterval(function() {
      function getDateNow() {
        var n =  new Date();
        var y = n.getFullYear();
        var m = n.getMonth() + 1;
        m = m.toString().length < 2 ? '0'+m : m;
        var d = n.getDate();
        d = d.toString().length < 2 ? '0'+d : d;
        var h = n.getHours();
        h = h.toString().length < 2 ? '0'+h : h;
        var min = n.getMinutes();
        min = min.toString().length < 2 ? '0'+min : min;
        $('#inputTime').val(d + '-' + m + '-' + y + ' ' + h + ':' + min);
        $('#inputTime2').val(d + '-' + m + '-' + y + ' ' + h + ':' + min);
        $('#inputTime3').val(d + '-' + m + '-' + y + ' ' + h + ':' + min);
      };
      getDateNow();
    }, 5000);
  });

  $(document.body).on('hide.bs.modal,hidden.bs.modal', function () {
    $('body').css('padding-right','0');
  });

  $(window).scroll(function () {
    if ($(window).scrollTop() >= 80) {
      $('.navbar').css('background-color','white');
      $('#a-1').css('color','black');
      $('#a-1').css('text-shadow','none');
      $('#a-2').css('color','black');
      $('#a-2').css('text-shadow','none');
      $('#a-3').css('color','black');
      $('#a-3').css('text-shadow','none');
      $('#a-4').css('color','black');
      $('#a-4').css('text-shadow','none');
      $('#a-p').css('color','black');
      $('.navbar').css('opacity','0.975');
      $('.phone-link').css('text-shadow','none');
    } else {
      $('.navbar').css('background-color','transparent');
      $('#a-1').css('color','white');
      $('#a-1').css('text-shadow','2px 2px 4px #000000');

      $('#a-2').css('color','white');
      $('#a-2').css('text-shadow','2px 2px 4px #000000');

      $('#a-3').css('color','white');
      $('#a-3').css('text-shadow','2px 2px 4px #000000');

      $('#a-4').css('color','white');
      $('#a-4').css('text-shadow','2px 2px 4px #000000');

      $('#a-p').css('color','white');
      $('.phone-link').css('text-shadow','2px 2px 4px #000000');
    }
  });