<block qq:if="{{$taroCompReady}}">
    <view class="all">
        <view class="header">
            <view class="head">消息通知</view>
        </view>
        <view class="headerSpace"></view>
        <view class="cardContainer">
            <inofo-card qq:key="index" qq:for="{{loopArray14}}" qq:for-item="comment" qq:for-index="index" compid="{{comment.$compid__51}}"></inofo-card>
        </view>
        <view class="footerSpace"></view>
        <footer compid="{{$compid__52}}"></footer>
    </view>
</block>