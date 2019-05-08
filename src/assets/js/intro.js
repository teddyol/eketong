import css from '../css/app.css';
import css from '../css/intro.css';
import $ from 'jquery';
import 'jquery.scrollto';

$('#header').load('./header.html',function(){
	$('#navbar li').each(function(){
		if($(this).attr('data-url') == 'intro'){
			$(this).addClass('current');
		};
	});
	$('#header').on('click','#cut',function(){
		$('#navbar').toggle();
	});
});
$('#footer').load('./footer.html');

//section hover
var filterList = [
	{
		sub		:	1,
		item	:	'店铺管理',
		content	: [
			{	sub	:	1,
				txt	:	'会员管理',
				img	:	['intro-1'],
				introduceTitle	:	'会员管理',
				introduceTxt	:	'让你随时随地轻松做店铺营销',
				stateTxt		:	['路径：首页-会员管理','可以指定一位会员或者多位会员发送短信营销、消费卡、折扣券、代金券。'],
			},{
				sub	:	2,
				txt	:	'员工管理',
				img	: ['intro-2','intro-3'],
				introduceTitle	:	'员工管理',
				introduceTxt	:	'轻松建立员工子账号，方便管理店铺员工',
				stateTxt		:	['路径：首页-员工管理','可以设置N个员工子站和为每个员工设置岗位，也可以为每个岗位设置不同的权限，限制之账号查看功能。'],
			},{
				sub	:	3,
				txt	:	'财务管理',
				img	:	['intro-4','intro-5'],
				introduceTitle	:	'财务管理',
				introduceTxt	:	'轻松的提现店铺资金',
				stateTxt		:	['路径：首页-财务管理 ','个人认证的商户，汇汇营销管家按申请提现金额的1%收取提现手续费，需手动申请，到账时间为T+1','企业认证的商户，微信支付按每笔交易收取0.6%的手续费，到账时间为T+1，无需申请提现，每天自动到账。'],
			},{
				sub	:	4,
				txt	:	'门店设置',
				img	: ['intro-6'],
				introduceTitle	:	'门店信息',
				introduceTxt	:	'支持上传门店展示图',
				stateTxt		:	['路径：首页-门店设置 ','门店信息项目为必填信息，请务必按照真实信息填写。','店铺的图片上传虽然为必填项目，但是建议最好也上传相关的图片，如果没上传图片，将会影响到店铺的美观。'],
			},{
				sub	:	5,
				txt	:	'应用商城',
				img	:	['intro-7'],
				introduceTitle	:	'应用商城',
				introduceTxt	:	'购买平台店铺的相关插件功能',
				stateTxt		:	['路径：首页-应用商城 ','我们会不定期的更具市场的环境，而不定期的更新丰富多样的店铺插件，插件可以按照月、季度、年购买。'],
			},{
				sub	:	6,
				txt	:	'超级链接',
				img	:	['intro-8'],
				introduceTitle	:	'超级链接',
				introduceTxt	:	'支持外部链接',
				stateTxt		:	['设置外部链接，最多支持5个外部链接，设置完成后再首页显示。'],
			},
		]
	},{
		sub		:	2,
		item	:	'获客引流',
		content	: [
			{	sub	:	1,
				txt	:	'会员共享',
				img	:	['intro-9','intro-10'],
				introduceTitle	:	'会员共享',
				introduceTxt	:	'快速的提升店铺会员',
				stateTxt		:	['路径：首页-会员共享','你可以选择与自己店铺匹配的店铺，共享彼此的会员，达成共享商家后，彼此的都可以给对方的会员发送优惠信息，吸引会员到店铺来消费。'],
			},{
				sub	:	2,
				txt	:	'二维码',
				img	: ['intro-11','intro-12'],
				introduceTitle	:	'二维码',
				introduceTxt	:	'提供多样化的二维页面',
				stateTxt		:	['路径：首页-二维码','包含了四种二维码，收款码、余额充值码、会员等级升级码、消费卡购买码，长按二维码可以保存到手机相册，方便做实物。'],
			},{
				sub	:	3,
				txt	:	'三级推荐',
				img	:	['intro-13'],
				introduceTitle	:	'三级推荐',
				introduceTxt	:	'让每个会员成为你的业务员',
				stateTxt		:	['路径：营销-三级推荐 ','三级推荐分为三级关系，一级会员为初始会员，二级会员为一级推荐的会员，三级会员为二级会员推荐的会员。商户可以为每个等级的会员设置不同的佣金，激励会员推广店铺。佣金会自动转入会员余额。'],
			},{
				sub	:	4,
				txt	:	'分享奖励',
				img	: ['intro-14'],
				introduceTitle	:	'分享奖励',
				introduceTxt	:	'鼓励会员消费后分享页面',
				stateTxt		:	['路径：营销-分享奖励','支持分享会员等级页面、充值页面、消费卡购买页面的分享，商户可以为每个页面设置不同的佣金，鼓励会员分享该页面。佣金会自动转入会员余额。'],
			},{
				sub	:	5,
				txt	:	'社区电商',
				img	:	['intro-15'],
				introduceTitle	:	'社区电商',
				introduceTxt	:	'轻松建立自己的商城',
				stateTxt		:	['路径：营销-商城 ','店铺可以上传店铺商品到商城里面，那么该商品就可以被所有店铺会员浏览到，从而达到为店铺引流的目的，商城支持自提、物流配送、商家配送。'],
			},
		]
	},{
		sub		:	3,
		item	:	'提高转化',
		content	: [
			{	sub	:	1,
				txt	:	'消费卡',
				img	:	['intro-16','intro-17'],
				introduceTitle	:	'消费卡',
				introduceTxt	:	'消费卡是一种可抵还现金付款',
				stateTxt		:	['路径：营销-消费卡','进入消费卡页面后，更具文字提示填写内容，商户可以设置消费卡是否支持转让和裂变模式。'],
			},{
				sub	:	2,
				txt	:	'折扣券',
				img	: ['intro-18','intro-19'],
				introduceTitle	:	'折扣券',
				introduceTxt	:	'让打折促销更灵活更省心',
				stateTxt		:	['路径：营销-折扣券','包含了四种二维码，收款码、余额充值码、会员等级升级码、消费卡购买码，长按二维码可以保存到手机相册，方便做实物。'],
			},{
				sub	:	3,
				txt	:	'代金券',
				img	:	['intro-20','intro-21'],
				introduceTitle	:	'代金券',
				introduceTxt	:	'店铺运营必备，百搭又实用的营销利器',
				stateTxt		:	['路径：营销-代金券 ','进入消费卡页面后，更具文字提示填写内容，商户可以设置消费卡是否支持代金券裂变模式。'],
			},{
				sub	:	4,
				txt	:	'短信营销',
				img	: ['intro-22'],
				introduceTitle	:	'短信营销',
				introduceTxt	:	'一键操作，营销利器',
				stateTxt		:	['路径：营销-短信营销','全网覆盖，快速/稳定/及时送达每一条短信，避免用户错过重要信息。同时配搭多种营销短信模板。'],
			},{
				sub	:	5,
				txt	:	'裂变券',
				img	:	['intro-23','intro-24'],
				introduceTitle	:	'裂变券',
				introduceTxt	:	'拉新客必备神器',
				stateTxt		:	['路径：营销-裂变券','设置消费卡、代金券、折扣券的裂变规则。设置完成后会员打开主页会有弹框提示，让会员分享，分享成功后可以获得该优惠，或者是会员消费成功后可获得，提高会员二次消费。'],
			},{
				sub	:	6,
				txt	:	'店铺游戏',
				img	:	['intro-25','intro-26'],
				introduceTitle	:	'店铺游戏',
				introduceTxt	:	'丰富多样化的游戏，增加会员的黏贴度',
				stateTxt		:	['路径：营销-幸运大转盘、助理红包、超级刮刮乐、砸金蛋、10秒挑战','进入相关页面后，按照提示输入游戏奖品。支持非消费进入或者是消费成功进去游戏。'],
			},
		]
	},{
		sub		:	4,
		item	:	'存留复购',
		content	: [
			{	sub	:	1,
				txt	:	'积分商城',
				img	:	['intro-27','intro-28'],
				introduceTitle	:	'积分商城',
				introduceTxt	:	'搭建专属积分体系，带来更多忠实、活跃客户',
				stateTxt		:	['路径：营销-积分商城','商户可以上传积分商品，积分越多奖励越丰富，客户为了心仪商品，更积极地赚取积分。'],
			},{
				sub	:	2,
				txt	:	'签到',
				img	: ['intro-29'],
				introduceTitle	:	'签到',
				introduceTxt	:	'让客户活跃度突飞猛进的互动营销标配',
				stateTxt		:	['路径：营销-签到','配合积分商城，充分调动用户的积极性，十分有效地提升了用户的活跃度和复购率。'],
			},{
				sub	:	3,
				txt	:	'会员等级',
				img	:	['intro-30','intro-31'],
				introduceTitle	:	'会员等级',
				introduceTxt	:	'吸引客户储值并用余额消费，为你带来持续复购',
				stateTxt		:	['路径：营销-会员等级 ','可以设置不同等级的会员，充值的优惠，同时等级也支持积分升级，或者是直接购买升级。'],
			},
		]
	},{
		sub		:	5,
		item	:	'数据分析',
		content	: [
			{	sub	:	1,
				txt	:	'交易流水分析',
				img	:	['intro-32','intro-33'],
				introduceTitle	:	'交易流水分析',
				introduceTxt	:	'方便财务核对账目',
				stateTxt		:	['路径：报表-店铺交易流水','汇总了店铺所有的在线收入和现金收入还有店铺的各项支出报表。'],
			},{
				sub	:	2,
				txt	:	'经营状况分析',
				img	: ['intro-34'],
				introduceTitle	:	'经营状况分析',
				introduceTxt	:	'店铺的经营状况一目了然',
				stateTxt		:	['路径：报表-店铺经营状况','店铺会员的所有的消费分析报表。'],
			},{
				sub	:	3,
				txt	:	'会员概况分析',
				img	:	['intro-35'],
				introduceTitle	:	'会员概况分析',
				introduceTxt	:	'会员注册分析',
				stateTxt		:	['路径：报表-会员概况 ','月新增会员数量，充值情况，消费情况分析。'],
			},{
				sub	:	4,
				txt	:	'会员余额分析',
				img	:	['intro-36'],
				introduceTitle	:	'会员概况分析',
				introduceTxt	:	'查看会员当前的余额',
				stateTxt		:	['路径：报表-会员余额查询 ','可以查询到所有会员当前的余额。'],
			},{
				sub	:	5,
				txt	:	'卡券分析',
				img	:	['intro-37'],
				introduceTitle	:	'卡券分析',
				introduceTxt	:	'查看店铺卡券的核销分析',
				stateTxt		:	['路径：报表-卡券报表','在这里可以分析店铺发放的优惠卡券的实际核销情况。'],
			},
		]
	}
];

$('#filter li').click(function(){
	var a = $(this).index();
	$(this).addClass('current').siblings().removeClass('current');
	var html = '';//分类内容
	var content = '';//默认第一项内容
	for(var b=0; b<filterList.length; b++){
		if(filterList[b].sub == a+1){
			for(var c=0; c<filterList[b].content.length; c++){
				html += '<li data-sub="'+ filterList[b].sub +'" data-son-sub="'+ filterList[b].content[c].sub +'">' + filterList[b].content[c].txt + '</li>';
			};
		};
	};
	content += '<div class="f-0 show-img">';
	for(var d=0; d<filterList[a].content[0].img.length; d++){
		content += '<img src="../images/'+ filterList[a].content[0].img[d] +'.png"/>';
	};
	content += '</div>'
			+ '<div class="blank30"></div>'
			+ '<div class="introduce">'
				+ '<span class="c-base f-18 font-we">'+ filterList[a].content[0].introduceTitle +'</span>'
				+ '<p class="c-66">'+ filterList[a].content[0].introduceTxt +'</p>'
			+ '</div>'
			+ '<div class="state">'
				+ '<span class="font-we">功能详细说明</span>';
	for(var e=0; e<filterList[a].content[0].stateTxt.length; e++){
		content += '<p class="c-66">'+ filterList[a].content[0].stateTxt[e] +'</p>';
	};
	content += '</div>'
			+ '<div class="blank50"></div>';

	$('#sort').html(html);
	$('#sort').children(':first').addClass('current');
	$('#content').html(content);
});

$('#sort').on('mouseenter','li',function(){
	var a = $(this).index();
	$(this).addClass('current').siblings().removeClass('current');
	var sub= $(this).attr('data-sub')-1;
	var sonSub= $(this).attr('data-son-sub')-1;
	var content = '';//右侧详细内容
	var _self = filterList[sub].content[sonSub];
	content += '<div class="f-0 show-img">';
	for(var d=0; d<_self.img.length; d++){
		content += '<img src="../images/'+ _self.img[d] +'.png"/>';
	};
	content += '</div>'
			+ '<div class="blank30"></div>'
			+ '<div class="introduce">'
				+ '<span class="c-base f-18 font-we">'+ _self.introduceTitle +'</span>'
				+ '<p class="c-66">'+ _self.introduceTxt +'</p>'
			+ '</div>'
			+ '<div class="state">'
				+ '<span class="font-we">功能详细说明</span>';
	for(var e=0; e<_self.stateTxt.length; e++){
		content += '<p class="c-66">'+ _self.stateTxt[e] +'</p>';
	};
	content += '</div>'
			+ '<div class="blank50"></div>';
	$('#content').html(content);
});

/*移动端详情*/
$('#phoneFilter li').click(function(){
	$(this).addClass('current').siblings().removeClass('current');
	var anchor = $(this).attr('data-anchor');
	$('html, body').animate({
        scrollTop: $('#'+ anchor).offset().top
    }, 800);
    return false;
});
$('.phone-sort li>div').click(function(){
	var sub= $(this).attr('data-sub')-1;
	var sonSub= $(this).attr('data-son-sub')-1;
	window.location.href = './introDetails.html?sub=' + sub + '&sonSub=' + sonSub;
});

function getUrlParam(name) { //获取地址栏参数
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
	var r = window.location.search.substr(1).match(reg); //匹配目标参数
	if (r != null) return decodeURIComponent(r[2]);
	return null; //返回参数值
};

if(getUrlParam('sub')){
	var nowItem = filterList[getUrlParam('sub')].content[getUrlParam('sonSub')];
	var detailsContent	= '<h3 class="center c-base font-we">'+ nowItem.txt +'</h3>'
						+ '<p class="center c-66">'+ nowItem.introduceTxt +'</p>'
						+ '<div class="center show-img">';
	for(var f=0; f<nowItem.img.length; f++){
		detailsContent += '<img src="../images/'+ nowItem.img[f] +'.png"/>';
	};
	detailsContent += '</div>'
					+ '<h4 class="font-we">功能详细说明</h4>'
					+ '<div class="c-66">';
	for(var g=0; g<nowItem.stateTxt.length; g++){
		detailsContent += '<p>'+ nowItem.stateTxt[g] +'</p>';
	};
	detailsContent += '</div>';				
	$('.intro-details').html(detailsContent);
};