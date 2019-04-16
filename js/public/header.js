// 头部title
var NavTitle = [
    "首页",
    "我的基因",
    "购买",
    "基因介绍",
    "我的订单",
    "关于我们"
];

// 导航url
var NavUrl = [
    "../home/index.html",
    "../my_genes/my_genes.html",
    "../buy/buy.html",
    "../referral/referral.html",
    "../order/order.html",
    "../about/about.html",
];

// 导航title循环
var NavdStr = '';
for(var i = 0; i < NavTitle.length; i++) {
    NavdStr += `
    <li><a href="${NavUrl[i]}">${NavTitle[i]}</a></li>
    `
}

// 渲染页面
var header = (
    `<div class="header">
        <div class="inner-wrap">
            <div class="logo">
                <a href="index.html"></a>
            </div>
            <div class="nav">
                <ul>`+ NavdStr +`</ul>
            </div>
            <div class="login">
                <!-- 未登录状态 -->
                <div class="login-out">
                    <a href="../login/login.html">登录</a>
                    <a href="../register/register.html">注册</a>
                </div>
                <!-- 登录状态 -->
                <div class="login-in">
                    <span class="fl"><img src="../../images/public/user-avatar.png"></span>
                    <a class="fl" href="javascript:void(0)">退出</a>
                </div>
            </div>
        </div>
    </div>
`);
$(".header").html(header)

// 更换当前状态
var thisInd = Number($.trim($('.pageTopTitle').attr('page-id')));
$(".nav li").eq(thisInd).addClass('active').siblings().removeClass('active')