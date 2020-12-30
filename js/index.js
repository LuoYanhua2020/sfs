var icol = document.querySelector(".ico-l");
var icor = document.querySelector(".ico-r");
var banner = document.querySelector("#banner");
var ul = document.querySelector(".ull");
var ol = document.querySelector(".oll");
// console.dir(ul.children.length);
var warpW = banner.offsetWidth;
var imgW = ul.offsetWidth;
var num = 0;
var ber = 0;
banner.addEventListener("mouseenter", function() {
    icol.style.display = "block";
    icor.style.display = "block";
});
banner.addEventListener("mouseleave", function() {
    icol.style.display = "none";
    icor.style.display = "none";
});

//点击下面原点轮播
for (var i = 0; i < ul.children.length; i++) {
    var lis = document.createElement("li");
    lis.setAttribute("index", i);
    ol.appendChild(lis);
    //每个原点触发的事件
    lis.addEventListener("click", function() {
        for (var i = 0; i < ol.children.length; i++) {
            ol.children[i].style.backgroundColor = "rgb(237,236,244)";
        }
        this.style.backgroundColor = "rgb(43,42,45)";
        var index = this.getAttribute("index");
        animation(ul, -index * warpW - (index * 2));
        num = index;
        ber = index;
    });
}

ol.children[0].style.backgroundColor = "rgb(43,42,45)";
var add = ul.children[0].cloneNode(true);
ul.appendChild(add);
//点击左滑动
icol.addEventListener("click", function() {
    if (num == 0) {
        ul.style.left = -(ul.children.length - 1) * warpW + "px";
        num = ul.children.length - 1;
    }
    num--;
    animation(ul, -num * warpW - (num * 2));
    ber--;
    if (ber < 0) {
        ber = ol.children.length - 1;
    }
    Change();
});

//点击右滑动
icor.addEventListener("click", function() {
    if (num == ul.children.length - 1) {
        ul.style.left = 0;
        num = 0;
    }
    num++;
    animation(ul, -num * warpW - (num * 2));
    ber++;
    if (ber == ol.children.length) {
        ber = 0;
    }
    Change();
});

function Change() {
    for (var i = 0; i < ol.children.length; i++) {
        ol.children[i].style.backgroundColor = "rgb(237,236,244)";
    }
    ol.children[ber].style.backgroundColor = "rgb(43,42,45)";
}

//定时器
var time = setInterval(getTime, 4000);

function getTime() {
    icor.click();
}
banner.addEventListener("mouseenter", function() {
    clearInterval(time);
});
banner.addEventListener("mouseleave", function() {
    time = setInterval(getTime, 4000);
});


//划入动画
var Bbth = document.querySelector(".B-right-bth");
var hbth = document.querySelector(".hot-sale-bth");
var retailbth = document.querySelector(".retail-right-bth");
var Bbthtwo = document.querySelector(".B-right-bth-two");
var hbthtwo = document.querySelector(".hot-sale-bth-two");
var retailbthtwo = document.querySelector(".retail-right-bth-two");

Bbth.addEventListener("mouseenter", function() {
    animation(Bbthtwo, 0);
});
Bbth.addEventListener("mouseleave", function() {
    animation(Bbthtwo, -150);
});
hbth.addEventListener("mouseenter", function() {
    animation(hbthtwo, 0);
});
hbth.addEventListener("mouseleave", function() {
    animation(hbthtwo, -150);
});
retailbth.addEventListener("mouseenter", function() {
    animation(retailbthtwo, 0);
});
retailbth.addEventListener("mouseleave", function() {
    animation(retailbthtwo, -150);
});