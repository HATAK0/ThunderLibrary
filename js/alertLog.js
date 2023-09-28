$('#logIn').click(function () {
    $('.log_in__window').css({"top":"50%", "transition":"top 1s"});
    setTimeout(() => {
        $('.log_in__window').css({"position":"absolute"});
    }, 1000);
     $('#body').css({"height":"100vh","overflow-y":"hidden"});
    });

    $('#over').click(function () {  
        $('.log_in__window').css({"top":"-100%", "transition":"top 1s"});
        $('#body').css({"height":"100%","overflow-y":"visible"});
    });