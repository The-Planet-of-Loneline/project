<block qq:if="{{$taroCompReady}}">
    <view class="{{anonymousState__temp}}" bindtap="toCardDetail">
        <view class="tag-container">
            <block qq:if="{{tag !== ''}}">
                <view class="spe-tag">{{tag}}</view>
            </block>
            <view class="spe-tag">{{place}}</view>
        </view>
        <view class="title">{{title}}</view>
        <view class="time">时间:{{date}}</view>
        <image src="{{Refresh}}" class="refresh-img" catchtap="onChangeInfo"></image>
    </view>
</block>