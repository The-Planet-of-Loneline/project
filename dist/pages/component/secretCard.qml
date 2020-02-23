<block qq:if="{{$taroCompReady}}">
    <view class="cardContainer">
        <view class="card">
            <view class="text">{{textValue}}</view>
            <view class="allReplies">全部回复</view>
            <view class="replyContainer">
                <reply-card></reply-card>
                <reply-card></reply-card>
                <reply-card></reply-card>
            </view>
        </view>
    </view>
</block>