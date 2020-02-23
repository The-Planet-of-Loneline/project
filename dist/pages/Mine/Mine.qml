<block qq:if="{{$taroCompReady}}">
    <view class="all">
        <view class="header">
            <view class="head">历史记录</view>
        </view>
        <view class="headerSpace"></view>
        <image src="{{notification}}" class="notification" bindtap="toImfo"></image>
        <view class="CardContainer">
            <history-card></history-card>
            <history-card></history-card>
            <history-card></history-card>
            <history-card></history-card>
        </view>
        <view class="footerSpace"></view>
        <footer compid="{{$compid__30}}"></footer>
    </view>
</block>