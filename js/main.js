$(function(){
    // メニューボタンをクリックした場合
    $('.menu-button').on('click', function() {
        hamburger();
    });

    // クローズボタンをクリックした場合
    $('.close-button').on('click', function() {
        hamburger();
    });

    // ナビメニューのリンクをクリックした場合
    $('nav a').on('click', function() {
        hamburger();
    });

    /* ページ内スクロール */
    $('a[href^="#"]').click(function(){
        //スクロールのスピード
        var speed = 500;
        //リンク元を取得
        var href= $(this).attr("href");
        //リンク先を取得
        var target = $(href == "#" || href == "" ? 'html' : href);
        //リンク先までの距離を取得
        var position = target.offset().top;
        //スムーススクロール
        $("html, body").animate({scrollTop:position}, speed, "swing");
        return false;
    });
});


function hamburger() {
    $('.nav-list-open').toggleClass('active');

    if ($('.nav-list-open').hasClass('active')) {
        // 背景に隠れているメニューボタンを非表示
        $('.menu-button').css('visibility', 'hidden');
    } else {
        // クローズボタンが非アクティブのとき
        // メニューボタンを表示
        $('.menu-button').css('visibility', 'visible');
    }
}