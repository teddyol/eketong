import css from '../css/app.css';
import css from '../css/index.css';
import $ from 'jquery';

$('#header').load('./header.html',function(){
	//var nowPage = location.pathname.substring(1,location.pathname.indexOf('.'));
	$('#navbar li').each(function(){
		if($(this).attr('data-url') == 'index'){
			$(this).addClass('current');
		};
	});
	$('#header').on('click','#cut',function(){
		$('#navbar').toggle();
	});
});
$('#footer').load('./footer.html');


//section2 hover
$('#swiperTwo li').hover(function(){
	var a = $(this).index();
	$(this).addClass('current').siblings().removeClass('current');
	$('#swiperTwo').next().find('li').eq(a).css('display','block').siblings().css('display','none');
	$(this).parent().parent().css('background','url("../images/bg-2-'+ (a+1) +'.png") center/cover no-repeat');
});
