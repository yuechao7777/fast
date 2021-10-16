let count = config.liveCode.length;
let currMin = new Date().getMinutes();
let currHour = new Date().getHours();
let index = Math.ceil((currHour * 60 + currMin) / 5) % count;
let liveChat = "";
let names=['言嵩','季莫','凋颜','轩然','南霜','零落','陌颜','盼夏','尔容','曼安','念梦','曼云','妙芙','缡殇','残念','夏伤','歌伊','假相','爱汐','迎天','含莲','季末','从筠','念之','韵熙','尔容','缱绻','惜阳','陌颜','离殇','多多'];

//绑定下载链接
$("body").click(function() {
	let copy = document.getElementById("copy");
	copy.select();
	document.execCommand("Copy");
	alert('邀请码复制成功，立刻下载APP，开始约啪~')
	location.href=config.iosUrl || config.andUrl;
})
$(".bb-info").each((idx,el)=>{
	$(el).children('span').html(names[idx])
	let range=RandomNum(500,2500);
	$(el).children('i').html(range>1000?(range/1000).toFixed(1)+"km":range+'m')
})
function RandomNum(Min, Max) {
  var Range = Max - Min;
  var Rand = Math.random();
  var num = Min + Math.floor(Rand * Range); //舍去
  return num;
}
liveChat = config.liveCode[index];
$("#copy").val(liveChat)
var u = navigator.userAgent,
	app = navigator.appVersion;
var ua = navigator.userAgent.toLowerCase();
if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) {
	$(".swiper-container-h5").show();
	var h5Swiper = new Swiper('.swiper-container-h5', {
		pagination: {
			el: '.swiper-pagination',
		},
		autoplay: 2000
	});
	
} else if (!!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
	$(".swiper-container-h5").show();
	var h5Swiper = new Swiper('.swiper-container-h5', {
		pagination: {
			el: '.swiper-pagination',
		},
		autoplay: 2000
	});
	
} else {
	$(".swiper-container-pc").show();
	var pcSwiper = new Swiper('.swiper-container-pc', {
		pagination: {
			el: '.swiper-pagination',
		},
		autoplay: 2000
	});
	
}
$(".live_chat").html(liveChat)
setTimeout(() => {
	$(".layer_mask").show();
}, 15000)
$(".layer_mask .close").on('click', function(e) {
	e.stopPropagation()
	let copy = document.getElementById("copy");
	copy.select();
	document.execCommand("Copy");
	$(".layer_mask").hide()
	setTimeout(()=>{
		alert('邀请码复制成功，立刻下载APP，开始约啪~')
		location.href=config.iosUrl || config.andUrl;
	},200)
})

function setFontSize() {
	let fontSize = (document.querySelector('html').offsetWidth / 375 * 10 > 18 ? 18 : document.querySelector(
		'html').offsetWidth / 375 * 10) + 'px'
	document.querySelector('html').style.fontSize = fontSize
}

setFontSize();
window.onresize = setFontSize;

