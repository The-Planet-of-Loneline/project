<block qq:if="{{$taroCompReady}}">
    <view class="container">
        <view class="bgcontainer">
            <image class="bg" src="{{bg}}"></image>
        </view>
        <view class="greeting">欢迎登陆孤独星球</view>
        <input type="number" placeholder="请输入学号" class="id" value="{{idValue}}" bindinput="onHandleId" data-e-input-so="this" />
        <input type="{{showView ? 'password' : 'text'}}" placeholder="请输入密码" class="password" value="{{passwordValue}}" bindinput="onHandlePassword" data-e-input-so="this" />
        <image class="view" src="{{showView ? view : viewOff}}" bindtap="onViewPassword" data-e-tap-so="this"></image>
    </view>
</block>