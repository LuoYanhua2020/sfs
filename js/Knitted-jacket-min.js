//添加按钮
$('.bth-add').click(function() {
    var num = $(".num").val();
    num++;
    $(".num").val(num);
    var price = $(".num").val() * 199;
    $(this).parent().siblings('.Content-two-button-bthtwo').children('.sum').text(price);
});
//减少按钮
$('.bth-cile').click(function() {
    var num = $(".num").val();
    if (num <= 1) {
        return false;
    }
    num--;
    $(".num").val(num);
    var price = $(".num").val() * 199;
    $(this).parent().siblings('.Content-two-button-bthtwo').children('.sum').text(price);
});
//改变值按钮
$('.num').change(function() {
    var n = $(this).val();
    var price = $(".num").val() * 199;
    $(this).parent().siblings('.Content-two-button-bthtwo').children('.sum').text(price);
});


//点击li换div内容
$('.switch-t-top ul li').click(function() {
    if ($(this).prop('className') === 'switch-t-top-i') {
        return false;
    } else {
        $(this).removeClass().siblings('li').removeClass();
        $(this).toggleClass('switch-t-top-i').siblings('li').toggleClass('switch-t-top-ii');
    }
    //获取li的自定义下标
    var index = $(this).attr('index');
    if (index == 1) {
        $('.switch-t-one').css('display', 'block');
        $('.switch-t-two').css('display', 'none');
        $('.Content-two').css('height', '9070px');
    } else {
        $('.switch-t-two').css('display', 'block');
        $('.switch-t-one').css('display', 'none');
        $('.Content-two').css('height', '1260px');
    }

});