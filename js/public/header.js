var header = (`
    <div class="header">
        <div class="inner-wrap">
            <div class="logo">
                <a href="index.html"></a>
            </div>
            <div class="nav">
                <ul>
                    <li class="active"><a href="../home/index.html">首页</a></li>
                    <li><a href="../my_genes/my_genes.html">我的基因</a></li>
                    <li><a href="../buy/buy.html">购买</a></li>
                    <li><a href="../referral/referral.html">基因介绍</a></li>
                    <li><a href="../order/order.html">我的订单</a></li>
                    <li><a href="../about/about.html">关于我们</a></li>
                </ul>
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

document.write(header);