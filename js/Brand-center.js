//切换栏特效

$('.banner-C-bottomdiv ul li').hover(function() {
    $(this).css('backgroundColor', '#222222').siblings('li').css('backgroundColor', '');
}, function() {
    $('.banner-C-bottomdiv ul li').css('backgroundColor', '');
});
//点击事件
$('.banner-C-bottomdiv ul li').click(function() {
    var index = $(this).attr('index');
    $('.banner-C-bottomdiv ul li').eq(index).addClass('impromt').siblings('li').removeClass('impromt');
    $('.main-content>div').eq(index).css('display', 'block').siblings('div').css('display', 'none');
});