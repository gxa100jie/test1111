
function  liChange(nea,mes,une){
	for (var i = 1; i <= une; i++) {
		var cont = document.getElementById(nea+i);
		cont.className = i == mes?"li-width":"";
	}
}
function ulRemove(nea,mes,une){
	for (var i = 1; i <= une; i++) {
		var cont = document.getElementById(nea+i);
		cont.className = i == 1?"li-width":"";
	}
}

var demo = document.getElementById('centert-bottom-nav');
function pullDownList(){
	if (demo.style.display == "block") {
		demo.style.display = "none";
	}else{
		demo.style.display = "block";
	}
}

for (var i = 0; i <= 4; i++) {
	var lafn = document.getElementById('box1');
	var box = ['Cupim Bris','Cisi Chicken','Bint Beef','Dail Lulpa']
	var box1 = ['$50.00','$59.00','$97.00','$97.00']
	lafn.innerHTML +='<div class="center-one-box"><div class="center-one-box1"><div class="one-box1-img">'+
			   '<div class="one-box1-image"><img src="img/'+i+'.jpg"><img class="shangpin-img" src="img/j'+i+'.jpg">'+
			   '</div><a class="quickview" href="">  Quickview</a></div><div class="right-block"><div class="caption">'+
			   '<h4>'+box[i]+'</h4><div class="rating-box"><span><i class="fa fa-star fa-stack-1x"></i></span>'+
			   '<span><i class="fa fa-star fa-stack-1x"></i></span><span><i class="fa fa-star fa-stack-1x"></i></span>'+
			   '<span><i class="fa fa-star fa-stack-1x"></i></span><span><i class="fa fa-star-o fa-stack-1x"></i></span></div>'+
			   '<div class="price"><span class="price-new">'+box1[i]+'</span>'+
			   '<span class="price-old">$62.00</span></div><div class="button-group"><button class="addToCart">'+
			   '<i class="fa fa-shopping-cart"></i><span>Add to Cart</span></button><button class="wishlist">'+
			   '<i class="fa fa-heart"></i></button><button class="wishlist"><i class="fa fa-exchange"></i>'+
			   '</button></div></div></div></div></div>'
	}
for (var i = 5; i <= 9; i++) {
	var lafn = document.getElementById('box2');
	var box = ['Cupim Bris','Cisi Chicken','Bint Beef','Dail Lulpa']
	var box1 = ['$50.00','$59.00','$97.00','$97.00']
	lafn.innerHTML +='<div class="center-one-box"><div class="center-one-box1"><div class="one-box1-img">'+
			   '<div class="one-box1-image"><img src="img/'+i+'.jpg"><img class="shangpin-img" src="img/j'+i+'.jpg">'+
			   '</div><a class="quickview" href="">  Quickview</a></div><div class="right-block"><div class="caption">'+
			   '<h4>'+box[i]+'</h4><div class="rating-box"><span><i class="fa fa-star fa-stack-1x"></i></span>'+
			   '<span><i class="fa fa-star fa-stack-1x"></i></span><span><i class="fa fa-star fa-stack-1x"></i></span>'+
			   '<span><i class="fa fa-star fa-stack-1x"></i></span><span><i class="fa fa-star-o fa-stack-1x"></i></span></div>'+
			   '<div class="price"><span class="price-new">'+box1[i]+'</span>'+
			   '<span class="price-old">$62.00</span></div><div class="button-group"><button class="addToCart" onclick="tanchu()">'+
			   '<i class="fa fa-shopping-cart"></i><span>Add to Cart</span></button><button class="wishlist">'+
			   '<i class="fa fa-heart"></i></button><button class="wishlist"><i class="fa fa-exchange"></i>'+
			   '</button></div></div></div></div></div>'
	}
for (var i = 0; i <= 4; i++) {
	var lafn = document.getElementById('box3');
	var box = ['Cupim Bris','Cisi Chicken','Bint Beef','Dail Lulpa']
	var box1 = ['$50.00','$59.00','$97.00','$97.00']
	lafn.innerHTML +='<div class="center-one-box"><div class="center-one-box1"><div class="one-box1-img">'+
			   '<div class="one-box1-image"><img src="img/'+i+'.jpg"><img class="shangpin-img" src="img/j'+i+'.jpg">'+
			   '</div><a class="quickview" href="">  Quickview</a></div><div class="right-block"><div class="caption">'+
			   '<h4>'+box[i]+'</h4><div class="rating-box"><span><i class="fa fa-star fa-stack-1x"></i></span>'+
			   '<span><i class="fa fa-star fa-stack-1x"></i></span><span><i class="fa fa-star fa-stack-1x"></i></span>'+
			   '<span><i class="fa fa-star fa-stack-1x"></i></span><span><i class="fa fa-star-o fa-stack-1x"></i></span></div>'+
			   '<div class="price"><span class="price-new">'+box1[i]+'</span>'+
			   '<span class="price-old">$62.00</span></div><div class="button-group"><button class="addToCart onclick="tanchu()">'+
			   '<i class="fa fa-shopping-cart"></i><span>Add to Cart</span></button><button class="wishlist">'+
			   '<i class="fa fa-heart"></i></button><button class="wishlist"><i class="fa fa-exchange"></i>'+
			   '</button></div></div></div></div></div>'
	}

function bomese(ikj,hki,hua){
	for (i = 1; i <= hua; i++) {
        var menu = document.getElementById(ikj + i);
        var cont = document.getElementById("box"+ i);
        menu.className = i == hki ? "xuanXiangKa" : "";
        i == hki? cont.style.height = "463px":cont.style.height = "0px";
    }
}
// 轮播
	$(document).ready(function(){
		$('.flexslider').flexslider({
			directionNav: true,
			pauseOnAction: false
		});
	});
// 返回顶部
	var btn = document.getElementById('btn');
			var timer = null;
			var isTop = true;
			var clientHeight = document.documentElement.clientHeight;
			var navNone = document.getElementById("header-centert");

			window.onscroll = function(){
				var oTop = document.documentElement.scrollTop || document.body.scrollTop;
				if (oTop>50) {
					$("div .centert-bottom-left").hide();
					navNone.style.position = "fixed";
					navNone.style.top = "0px";
					navNone.style.width = "100%";
				}else{
					$("div .centert-bottom-left").show();
					navNone.style.position = "static";
				}
				if (oTop >= clientHeight) {
					btn.style.display = "block";
				}
				else{
					btn.style.display = "none";
				}

				if (!isTop) {
					clearInterval(timer);
				}
				isTop = false;
			}

			btn.onclick = function () {
				timer = setInterval(function(){

					var oTop = document.documentElement.scrollTop || document.body.scrollTop;

					var speed = Math.floor(-oTop / 5);
					document.documentElement.scrollTop = document.body.scrollTop = oTop + speed; 

					isTop = true;
	
					if(oTop == 0){
						clearInterval(timer);
					}
				},100)
			}
// 切换
	function qiehuan(){
		var cont = document.getElementById('box1');
		var conn = document.getElementById('box2');
		var cone = document.getElementById('box3');
		cont.style.left = "0px";
		conn.style.left = "0px";
		cone.style.left = "0px";
	}
	function qiehuan1(){
		var cont = document.getElementById('box1');
		var conn = document.getElementById('box2');
		var cone = document.getElementById('box3');
		cont.style.left = "-300px";
		conn.style.left = "-300px";
		cone.style.left = "-300px";
	}
// 弹出框
	var tanchu=document.getElementsByClassName("addToCart");
	var tanchu1 = document.getElementById('tanchu');
	var lll = '<div class="tanchu"><div class="tanchu-top">Product added to Cart<button>×</button>'+
			  '</div><div class="tanchu-botton"><div class="tanchu-botton-img"><img src="img/133.jpg">'+
			  '</div><h3><a href="">Apple Cinema 30"</a> added to <a href="">shopping cart</a></h3></div></div>'
	$(".addToCart").click(function(){
		$("#tanchu").append(lll);
		setTimeout(function(){
		$("div.tanchu").first().remove();
	},3000);
	})
