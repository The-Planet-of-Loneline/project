<block qq:if="{{$taroCompReady}}">
    <view class="Card">
        <image src="{{name}}" class="avatar"></image>
        <view class="textContainer" bindtap="Info" data-e-tap-so="this">
            <view class="time">{{time}}</view>
            <view class="text">{{text}}</view>
            <image src="{{arrow}}" class="toCard"></image>
        </view>
    </view>
</block>