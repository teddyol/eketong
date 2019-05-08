import css from '../css/app.css';
import css from '../css/contact.css';
import $ from 'jquery';

$('#header').load('./header.html',function(){
	$('#navbar li').each(function(){
		if($(this).attr('data-url') == 'contact'){
			$(this).addClass('current');
		};
	});
	$('#header').on('click','#cut',function(){
		$('#navbar').toggle();
	});
});
$('#footer').load('./footer.html');

$(function(){
	$('#state').css('max-width',$('#img').width());
})
