<block qq:if="{{$taroCompReady}}">
    <view>
        <block>
            <block qq:if="{{anonymousState__temp3}}">
                <view class="{{anonymousState__temp}}" bindtap="changeDate">{{tagName}}</view>
            </block>
            <block qq:else>
                <view class="{{anonymousState__temp2}}"></view>
            </block>
        </block>
    </view>
</block>