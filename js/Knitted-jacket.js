//放大镜
var big = document.querySelector("#big");
var small = document.querySelector("#small");
var father = document.querySelector(".Content-two-left-img");

var lis = document.querySelector("#ul").querySelectorAll("li");
var changeimg = father.querySelector("img");
var img = document.querySelector("#img");

for (var i = 0; i < lis.length; i++) {
    lis[i].addEventListener("click", function() {
        //获取当前点击的li里的img
        var imgg = this.querySelector("img");
        //获取img里面的src属性
        var index = imgg.getAttribute("src");
        //改变两个图片的路径
        changeimg.setAttribute("src", index);
        img.setAttribute("src", index);
    });
}

father.addEventListener('mouseover', function() {
    small.style.display = "block";
    big.style.display = "block";
})
father.addEventListener('mouseout', function() {
    small.style.display = "none";
    big.style.display = "none";
})

//实现遮罩层随着鼠标移动
father.addEventListener('mousemove', function(e) {
    var x = e.pageX - father.offsetLeft;
    var y = e.pageY - father.offsetTop;
    //让鼠标居中
    var leftx = x - 140; //注意，offsetWidth大写
    var lefty = y - 600;
    //最大活动范围
    var xMax = father.offsetWidth - small.offsetWidth;
    var yMax = father.offsetHeight - small.offsetHeight;
    //约束x轴
    if (leftx <= 0) {
        leftx = 0;
    } else if (leftx >= xMax) {
        leftx = xMax;
    }
    //约束y轴
    if (lefty <= 0) {
        lefty = 0;
    } else if (lefty >= yMax) {
        lefty = yMax;
    }
    small.style.left = leftx + "px";
    small.style.top = lefty + "px";

    //右边跟着等比例移动
    img.style.left = leftx * -1.1 + "px";
    img.style.top = lefty * -1.5 + "px";
});


//轮播图效果
var icol = document.querySelector(".switchcontent-l");
var icor = document.querySelector(".switchcontent-r");
var banner = document.querySelector(".switch-t-two-content-div");
var ul = document.querySelector(".Content-two-table");
var num = 0;
banner.addEventListener("mouseenter", function() {
    icol.style.display = "block";
    icor.style.display = "block";
});
banner.addEventListener("mouseleave", function() {
    icol.style.display = "none";
    icor.style.display = "none";
});
//点击左滑动
icol.addEventListener("click", function() {
    if (num <= 0) {
        return;
    } else {
        num--;
        animation(ul, -num * 875);
    }
    console.log(ul.offsetLeft);
});
//点击右滑动
icor.addEventListener("click", function() {
    if (num >= 2) {
        return;
    } else {
        num++;
        animation(ul, num * -875);
    }
    console.log(ul.offsetLeft);
});