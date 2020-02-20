<block qq:if="{{$taroCompReady}}">
    <view class="{{anonymousState__temp}}" bindtap="toCardDetail" data-e-tap-so="this" data-e-tap-a-a="{{index}}">
        <view class="tag-container">
            <view class="spe-tag">{{anonymousState__temp2}}</view>
            <view class="spe-tag">{{'教学楼'}}</view>
        </view>
        <view class="title">{{title}}</view>
        <view class="time">时间:{{time}}</view>
        <image src="{{Refresh}}" class="refresh-img" catchtap="onChangeInfo"></image>
    </view>
</block>