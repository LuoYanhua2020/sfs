// 底部js效果
var bico = document.querySelector(".b-ico2-one");
var ico = document.querySelector(".b-ico2");
var ulll = document.querySelector(".bottom-content-ulll");
ico.addEventListener("mouseenter", function() {
    ulll.style.zIndex = "0";
    bico.style.transform = "translateY(15px)"
    bico.style.opacity = "1";
});
ico.addEventListener("mouseleave", function() {
    ulll.style.zIndex = "50";
    bico.style.opacity = "0";
    bico.style.transform = "translateY(-15px)"
});


//返回顶部
var flex = document.querySelector(".flexx");

document.addEventListener("scroll", function() {
    var page = window.pageYOffset;
    if (page >= 700) { //划过main板块就显示文字
        flex.style.display = "block";
    } else {
        flex.style.display = "none";
    }
});

//返回顶部的点击事件
flex.addEventListener("click", function() {
    animate(window, 0, );

});
//滚动条动画函数
function animate(obj, juli) {
    clearInterval(obj.timer);
    obj.timer = setInterval(demo, 20);

    function demo() {
        var step = (juli - window.pageYOffset) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if (window.pageYOffset == juli) {
            clearInterval(obj.timer);
        } else {
            window.scroll(0, window.pageYOffset + step);
        }
    }
};