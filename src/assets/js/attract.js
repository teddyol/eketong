import css from '../css/app.css';
import css from '../css/attract.css';
import $ from 'jquery';

$('#header').load('./header.html',function(){
	$('#navbar li').each(function(){
		if($(this).attr('data-url') == 'attract'){
			$(this).addClass('current');
		};
	});
	$('#header').on('click','#cut',function(){
		$('#navbar').toggle();
	});
});
$('#footer').load('./footer.html');

var cityOption = '';
$.ajax({
	url:'http://restapi.amap.com/v3/config/district',
	data:{
		subdistrict	: 2,
		key			: 'f789bdbe78b94fbc586b499697a64ddd',
	},
	async:true,
	timeout:10000,
	success:function(res){
		cityOption = res.districts[0].districts;
		for(var a in cityOption){
			//默认广东省
			if(cityOption[a].adcode == '440000'){
				$('#province').append('<option value="'+ cityOption[a].adcode+'" selected>'+ cityOption[a].name +'</option>');
				for(var b in cityOption[a].districts){
					//默认东莞市
					if(cityOption[a].districts[b].adcode == '441900')
						$('#city').append('<option value="'+ cityOption[a].districts[b].adcode +'" selected>'+ cityOption[a].districts[b].name +'</option>');
					else
						$('#city').append('<option value="'+ cityOption[a].districts[b].adcode +'">'+ cityOption[a].districts[b].name +'</option>');
				};
			}else{
          		$('#province').append('<option value="'+ cityOption[a].adcode+'">'+ cityOption[a].name +'</option>');
			};
    	};
    	$('#province').change(function(){
    		$('#city').empty();
    		var provinceCode = $(this).val();
    		for(var c in cityOption){
				if(cityOption[c].adcode == provinceCode){
					for(var d in cityOption[c].districts){						
						$('#city').append('<option value="'+ cityOption[c].districts[d].adcode +'">'+ cityOption[c].districts[d].name +'</option>');
					}
				};
    		};
    	})
	},
	complete:function(XMLHttpRequest,status){
		if(status=='timeout'){	
			mui.toast('请求数据超时!');
		};
	}
})
$('#submitBtn').click(function () {
    var name = $('input[name="name"]').val();
    var phone = $('input[name="phone"]').val();
    var company = $('input[name="company"]').val();
    var province = $('#province').find('option:selected').text();
    var city = $('#city').find('option:selected').text();
})