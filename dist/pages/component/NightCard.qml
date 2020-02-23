<block qq:if="{{$taroCompReady}}">
    <view class="cardContainer">
        <view class="cardOne" bindtap="toComment">
            <view class="avatarTime">
                <view class="avatar">
                    <image src="{{avatar}}" class="avatarImg"></image>
                </view><text class="time">2min ago</text> 
            </view>
            <view class="textContainer">
                <view class="text">{{textValue}}</view>
            </view>
        </view>
        <view class="cardTwo"></view>
        <view class="cardThree"></view>
    </view>
</block>