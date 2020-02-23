<block qq:if="{{$taroCompReady}}">
    <view class="all">
        <view class="header">
            <view class="head">历史记录</view>
        </view>
        <block qq:if="{{showDeleteModel}}">
            <delete-card compid="{{$compid__31}}"></delete-card>
        </block>
        <image src="{{Delete}}" class="delete" bindtap="delete" data-e-tap-so="this"></image>
        <secret-card></secret-card>
        <footer compid="{{$compid__32}}"></footer>
    </view>
</block>