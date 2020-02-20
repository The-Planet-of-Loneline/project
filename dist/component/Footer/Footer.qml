<block qq:if="{{$taroCompReady}}">
    <view class="footer">
        <view class="s-logo" bindtap="toNeed">
            <image src="{{anonymousState__temp}}" class="s-img"></image>
            <view class="{{modeNeed}}">需求广场</view>
        </view>
        <image src="{{Switch}}" class="switch" bindtap="toNight"></image>
        <view class="s-logo" bindtap="toMy">
            <image src="{{anonymousState__temp2}}" class="s-img"></image>
            <view class="{{modeMy}}">我的</view>
        </view>
    </view>
</block>