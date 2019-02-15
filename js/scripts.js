
$(document).ready(function () {
    $('.sec-nav__item').click(function (e) {
        e.preventDefault;
        var offsetPx = 0;
        if ($(this).attr('data-href')) {
            var el = $(this).attr('data-href');
            console.log(el);
            if(el == "#about"){
                offsetPx = 60;
            }
            if(el == "#faq"){
                offsetPx = -120;
            }
            $('body, html').animate({
                scrollTop: $(el).offset().top - offsetPx
            }, 700);
            return false;
        }
    });
 
    
});
    


$(window).load(function() {
  var win = $(window);
    var scrFunc = function () {
        var t = win.scrollTop(),
            e = win.height();
        $("[data-anim], .sec-nav, .second-nav, .sec-text-style, .score__img, .form-follow").each(function (n, i) {
            var r = $(i).offset().top,
                s = t + .9 * e;
            s > r ? $(i).attr("data-anim", "true") : true;
        });
    }
    scrFunc();
    $(window).scroll(function(){
         scrFunc();
        
    });
    
});


function ssss() {
    
    var name = $('#subName').val();
    var email = $('#subEmail').val();
    var message = $('#subMessage').val();
    var data = `{\"name\": \"${name}\",\"email\": \"${email}\",\"message\": \"${message}\"}`;
    alert('Thank you!');
    $.ajax({
      type: 'POST',
      url: 'http://35.204.166.49:3000/subscribe',
      data: data,
      dataType: 'json',
      contentType: 'application/json',
      success: function(data) {
      },
      error: function (jqXHR, exception) {
        
        },
    });
    // var dict = { key1: 'val1', key2: 10 };

    // $.ajax({
    //     url: '/echo/json/',
    //     type: 'POST',
    //     contentType: 'application/json; charset=utf-8',
    //     dataType: 'json',
    //     data: {json: JSON.stringify(dict) },
    //     success:function(data){
    //     alert('data='+JSON.stringify(data));}
    // });
    return false;
};
