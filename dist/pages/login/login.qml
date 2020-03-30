<block qq:if="{{$taroCompReady}}">
    <view class="container">
        <block qq:if="{{loading}}">
            <view class="loading"></view>
        </block>
        <view class="bgcontainer">
            <image class="bg" src="{{bg}}"></image>
        </view>
        <view class="greeting">欢迎登陆孤独星球</view>
        <input type="number" placeholder="请输入学号" class="id" value="{{id}}" bindinput="onHandleId" data-e-input-so="this" />
        <block>
            <block qq:if="{{showView}}">
                <input type="password" placeholder="请输入密码" class="password" value="{{password}}" bindinput="onHandlePassword" data-e-input-so="this" />
            </block>
            <block qq:else>
                <input type="text" placeholder="请输入密码" class="password" value="{{password}}" bindinput="onHandlePassword" data-e-input-so="this" />
            </block>
        </block>
        <image class="view" src="{{showView ? view : viewOff}}" bindtap="onViewPassword" data-e-tap-so="this"></image>
        <button class="login" bindtap="onHandleLogin" data-e-tap-so="this">登录</button>
    </view>
</block>