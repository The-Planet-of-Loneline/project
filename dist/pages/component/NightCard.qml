<block qq:if="{{$taroCompReady}}">
    <view class="cardContainer">
        <view class="cardOne" bindtap="toComment" style="{{anonymousState__temp}}">
            <view class="avatarTime">
                <view class="avatar">
                    <image src="{{name}}" class="avatarImg"></image>
                </view><text class="time">{{sendTime}}</text> 
            </view>
            <view class="textContainer">
                <view class="text"><text> {{textValue}}</text>
                </view>
            </view>
        </view>
    </view>
</block>