<block qq:if="{{$taroCompReady}}">
    <view class="all">
        <view class="header">
            <view class="head">历史记录</view>
        </view>
        <view class="headerSpace"></view>
        <image src="{{notification}}" class="notification" bindtap="toImfo"></image>
        <scroll-view class="CardContainer">
            <history-card qq:key="Debunkid" qq:for="{{loopArray9}}" qq:for-item="history" qq:for-index="_anonIdx2" compid="{{history.$compid__29}}"></history-card>
            <view class="none">--没有更多啦!--</view>
        </scroll-view>
        <view class="footerSpace"></view>
        <footer compid="{{$compid__30}}"></footer>
    </view>
</block>