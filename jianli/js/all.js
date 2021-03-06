function initMap() {
    createMap(), setMapEvent(), addMapControl()
}
function createMap() {
    map = new BMap.Map("map"), map.centerAndZoom(new BMap.Point(116.403438, 39.924455), 15)
}
function setMapEvent() {
    map.enableScrollWheelZoom(), map.enableKeyboard(), map.enableDragging(), map.enableDoubleClickZoom()
}
function addClickHandler(a, n) {
    a.addEventListener("click", function () {
        a.openInfoWindow(n)
    })
}
function addMapControl() {
    var a = new BMap.ScaleControl({anchor: BMAP_ANCHOR_BOTTOM_LEFT});
    a.setUnit(BMAP_UNIT_IMPERIAL), map.addControl(a);
    var n = new BMap.NavigationControl({anchor: BMAP_ANCHOR_TOP_LEFT, type: BMAP_NAVIGATION_CONTROL_LARGE});
    map.addControl(n)
}
var map;
initMap();
$(document).ready(function () {
    $("#fullpage").fullpage({
        verticalCentered: !1,
        css3: !0,
        sectionsColor: ["#fff", "#60BFBF", "#99D9EA", "#695684"],
        anchors: ["aboutMe", "experience", "technical", "information"],
        navigation: !1,
        navigationPosition: "right",
        navigationTooltips: ["fullPage.js"/*tpa=https://xinglai-orange.github.io/myResume/js/fullPage.js*/, "Powerful", "Amazing", "Simple"],
        slidesNavigation: !0,
        menu: "#breadcrumb",
        afterLoad: function (a, e) {
            var e = e, l = $(".breadcrumb a");
            l.eq(e - 1).addClass("active").siblings().removeClass("active")
        },
        afterSlideLoad: function (a, e, l) {
            2 == l && ($branch = $(".cssModel .field .branch"), $blow = $(".cssModel .field .blow"), $leave1 = $(".cssModel .field .blow .leaf:nth-child(2)"), $leave2 = $(".cssModel .field .blow .leaf:nth-child(3)"), $leave3 = $(".cssModel .field .blow .leaf:nth-child(4)"), $leave4 = $(".cssModel .field .blow .leaf:nth-child(5)"), $branch.addClass("branchsta"), $blow.addClass("blowsta"), $leave1.addClass("leaf1"), $leave2.addClass("leaf2"), $leave3.addClass("leaf3"), $leave4.addClass("leaf4"))
        }
    })
}), $(function () {
    $sectionLis = $(".accordion li"), $role = $(".role"), $mask = $(".tou-mask");
    var a = [2, 1, 1, 1];
    $sectionLis.on("click", function () {
        var e = $(this).index("li"), l = a[e];
        for (i in a)a[i] = 1;
        a[e] = l, a[e] > 1 || ($(this).animate({width: "400px"}).siblings().animate({width: "200px"}), $role.filter(".role-active").removeClass("role-active"), $(this).find(".role").animate({width: "200px"}).addClass("role-active"), $mask.removeClass("tou-mask-clc").addClass("tou-mask-order"), $(this).find(".tou-mask").removeClass("tou-mask-order").addClass("tou-mask-clc"), a[e]++)
    })
});
!function (t) {
    function n(n) {
        for (var a = n.html(), e = "", i = 0, o = a.length; i < o; i++)e += "<span>" + a.substr(i, 1) + "</span>";
        n.html(e);
        var s = [];
        n.children("span").each(function () {
            var n = t(this), a = n.position();
            s.push(a), n.css({top: a.top + "px", left: a.left + "px"}), setTimeout(function () {
                n.css("position", "absolute")
            }, 0)
        }), n.data("stringPosition", s)
    }

    function a(n, a) {
        var e = n.data("stringPosition"), i = 0, o = 0;
        n.mouseenter(function (t) {
            var a = n.offset();
            i = t.pageX - a.left, o = t.pageY - a.top
        }), n.mousemove(function (i) {
            var s = n.offset(), r = i.pageX - s.left, f = i.pageY - s.top, p = f - o;
            if (!(Math.abs(p) > a.offset)) {
                var u = p > 0;
                n.children("span").each(function (n) {
                    var i = t(this), o = e[n], s = Math.abs(r - o.left) * a.recline;
                    s *= u ? 1 : -1;
                    var f = o.top + p - s;
                    u && f < o.top ? f = o.top : !u && f > o.top && (f = o.top), i.css({top: f + "px"})
                })
            }
        }), n.mouseleave(function () {
            n.children("span").each(function (n) {
                t(this).stop(!0, !1).animate({top: e[n].top + "px"}, {duration: a.duration, easing: "easeOutElastic"})
            })
        })
    }

    t.extend(t.easing, {
        easeOutElastic: function (t, n, a, e, i) {
            var o = 1.70158, s = 0, r = e;
            if (0 == n)return a;
            if (1 == (n /= i))return a + e;
            if (s || (s = .3 * i), r < Math.abs(e)) {
                r = e;
                var o = s / 4
            } else var o = s / (2 * Math.PI) * Math.asin(e / r);
            return r * Math.pow(2, -10 * n) * Math.sin((n * i - o) * (2 * Math.PI) / s) + e + a
        }
    }), t.fn.qin = function (e) {
        var i = {offset: 22, duration: 500, recline: .1}, o = t.extend({}, i, e);
        return this.each(function () {
            var e = t(this);
            n(e), a(e, o)
        })
    }
}(jQuery);
function GreedySnake() {
    this.init()
}
function carouselAnimate(e, t) {
    clearInterval(e.timor), e.timor = setInterval(function () {
        var i = e.offsetLeft, r = (t - i) / 20;
        r = r > 0 ? Math.ceil(r) : Math.floor(r), i += r, e.style.left = i + "px", i === t && clearInterval(e.timor)
    }, 15)
}
$(function () {
    Highcharts.chart("container", {
        chart: {backgroundColor: null, width: "1000"},
        title: {text: null},
        subtitle: {text: null},
        xAxis: {
            categories: ["HTML5", "CSS3", "javascript", "jquery", "git", "canvas", "Angular", "gulp", "ajax", "photoshop", "fireworks"],
            labels: {style: {color: "#fff", fontSize: "14px"}}
        },
        yAxis: {labels: {style: {color: "#fff", fontSize: "14px"}}, title: {text: null}},
        series: [{type: "column", colorByPoint: !0, data: [7, 8, 6, 7, 6, 6, 4, 5, 6, 5, 6], showInLegend: !1}],
        credits: {enabled: !1},
        exporting: {enabled: !1}
    })
}), GreedySnake.prototype = {
    constructor: GreedySnake, init: function () {
        this.renderDom(), this.bindevents()
    }, renderDom: function () {
        var e = document.getElementById("myCanvas");
        this.ctx = e.getContext("2d"), this.snakelen = 4, this.eatings = 0, this.speed = 300, this.stride = 21, this.direct = 68, this.path = [], this.isPause = !1, this.recordNum(), this.x = 0, this.y = 0
    }, bindevents: function () {
        var e = this, t = $("#pause"), i = $(".greedySnake");
        $(window).keydown(function (t) {
            e.direct = t.keyCode, 65 != t.keyCode && 87 != t.keyCode && 83 != t.keyCode && (e.direct = 68)
        }), i.on("click.renew", "#start", function () {
            t.text("暂停游戏"), e.isPause = !1, i.off(".renew .gamePause"), e.ctx.clearRect(0, 0, 419, 419), clearInterval(e.timer), e.init(), e.update(), e.createfood()
        }).on("click.gamePause", "#pause", function () {
            e.isPause === !1 ? (t.text("继续游戏"), e.isPause = !0) : (e.isPause = !1, t.text("暂停游戏"), e.update())
        })
    }, createfood: function () {
        this.foodx = 21 * Math.floor(20 * Math.random()), this.foody = 21 * Math.floor(20 * Math.random());
        for (var e = 0; e < this.path.length; e++)if (this.path[e].x == this.foodx && this.path[e].y == this.foody)return this.createfood();
        this.ctx.fillStyle = "#FFF200", this.ctx.fillRect(this.foodx, this.foody, 20, 20)
    }, drawSnake: function (e, t) {
        this.ctx.fillStyle = "#58D437", this.ctx.fillRect(e, t, 20, 20)
    }, update: function () {
        var e = this;
        this.timer = setInterval(function () {
            if (e.isPause === !0)return clearInterval(e.timer);
            switch (e.direct) {
                case 65:
                    e.x = e.x - e.stride;
                    break;
                case 87:
                    e.y = e.y - e.stride;
                    break;
                case 68:
                    e.x = e.x + e.stride;
                    break;
                case 83:
                    e.y = e.y + e.stride
            }
            if (e.x < 0 || e.x > 399 || e.y < 0 || e.y > 399)return alert("两眼懵逼，一头撞墙"), clearInterval(e.timer);
            for (var t = 0; t < e.path.length; t++)if (e.path[t].x == e.x && e.path[t].y == e.y)return alert("淘气，你咬死自己了"), clearInterval(e.timer);
            if (e.path.length > e.snakelen) {
                var i = e.path.shift();
                e.ctx.clearRect(i.x, i.y, 20, 20)
            }
            e.path.push({
                x: e.x,
                y: e.y
            }), e.drawSnake(e.x, e.y), e.recordNum(), e.step++, e.x == e.foodx && e.y == e.foody && (e.eatings++, e.snakelen++, e.speed = e.speed - 10, e.speed < 100 && (e.speed = 100), clearInterval(e.timer), e.createfood(), e.update())
        }, e.speed)
    }, recordNum: function () {
        var e = $("#sankeLength"), t = $("#foodNum"), i = $("#speed");
        e.html(this.snakelen + 1), t.html(this.eatings), i.html(this.speed / 1e3)
    }
};
for (var carousel = document.getElementById("carouselId"), screen = document.getElementById("carouselScreen"), ul = screen.children[0], ulLis = ul.children, ol = screen.children[1], arr = document.getElementById("arr"), left = document.getElementById("car-left"), right = document.getElementById("car-right"), imgWidth = screen.offsetWidth, pic = 0, square = 0, i = 0; i < ulLis.length; i++) {
    var li = document.createElement("li");
    li.innerHTML = i + 1, ol.appendChild(li)
}
var olLis = ol.children;
olLis[0].className = "current";
var firstImg = ulLis[0].cloneNode(!0);
ul.appendChild(firstImg);
for (var j = 0; j < olLis.length; j++) {
    var olbtn = olLis[j];
    olbtn.index = j, pic === ulLis.length - 1 ? olbtn[0].onmouseover = function () {
        ul.style.left = 0;
        for (var e = 0; e < olLis.length; e++)olLis[e].className = "";
        this.className = "current"
    } : olbtn.onmouseover = function () {
        target = -this.index * imgWidth, carouselAnimate(ul, target);
        for (var e = 0; e < olLis.length; e++)olLis[e].className = "";
        this.className = "current", pic = square = this.index
    }
}
carousel.onmouseover = function () {
    arr.style.display = "block", clearInterval(playImg)
}, carousel.onmouseout = function () {
    arr.style.display = "none", playImg = setInterval(right.onclick, 3e3)
}, right.onclick = function () {
    pic === ulLis.length - 1 && (ul.style.left = "0px", pic = 0), pic++, target = -pic * imgWidth, carouselAnimate(ul, target);
    for (var e = 0; e < olLis.length; e++)olLis[e].className = "";
    square === olLis.length - 1 && (square = -1), square++, olLis[square].className = "current"
}, left.onclick = function () {
    0 === pic && (ul.style.left = -imgWidth * (ulLis.length - 1) + "px", pic = ulLis.length - 1), pic--, target = -pic * imgWidth, carouselAnimate(ul, target);
    for (var e = 0; e < olLis.length; e++)olLis[e].className = "";
    0 === square && (square = olLis.length), square--, olLis[square].className = "current"
};
var playImg = setInterval(right.onclick, 3e3);