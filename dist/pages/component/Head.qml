<block qq:if="{{$taroCompReady}}">
    <view class="header">
        <view class="headerCenter">
            <view class="headContentTA" bindtap="toSecret" style="{{anonymousState__temp}}">ta的秘密
                <view class="{{showUnderline ? 'underline' : null}}"></view>
            </view>
            <view class="headContent" bindtap="toWrite" style="{{anonymousState__temp2}}">写秘密
                <view class="{{showUnderline ? null : 'underline'}}"></view>
            </view>
        </view>
    </view>
</block>