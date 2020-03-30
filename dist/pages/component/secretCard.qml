<block qq:if="{{$taroCompReady}}">
    <view class="cardContainer">
        <view class="card" style="{{anonymousState__temp}}">
            <view class="text"><text>{{textValue}}</text>
            </view>
            <view class="allReplies">全部回复</view>
            <view class="commentButton">
                <block qq:if="{{showComment}}">
                    <image src="{{commentimg}}" class="comment" bindtap="onShowInput" data-e-tap-so="this"></image>
                </block>
            </view>
            <view class="replyContainer" bindtouchmove="ReachBottom" data-e-touchmove-so="this">
                <block qq:if="{{comment}}">
                    <reply-card qq:key="CommentId" qq:for="{{loopArray12}}" qq:for-item="comment" qq:for-index="_anonIdx2" compid="{{comment.$compid__44}}"></reply-card>
                </block>
                <view class="none">--没有更多啦！--</view>
            </view>
        </view>
        <block qq:if="{{showInput}}">
            <comment compid="{{$compid__45}}"></comment>
        </block>
    </view>
</block>