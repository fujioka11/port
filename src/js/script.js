$(function() {
    var showFlag = false;
    var topBtn = $('#common_sns');
    topBtn.css('left', '-60px');
    var showFlag = false;
    //スクロールが100に達したらボタン表示
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            if (showFlag == false) {
                showFlag = true;
                topBtn.stop().animate({'left' : '20px'}, 300);
            }
        } else {
            if (showFlag) {
                showFlag = false;
                topBtn.stop().animate({'left' : '-60px'}, 300);
            }
        }
    });
    //スクロールしてトップ
    topBtn.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });

    /*topメインの高さ*/

    /*hsize = $(window).height() - 84//headerの高さ;
    $(".header_main").css("height", hsize + "px");*/












});
