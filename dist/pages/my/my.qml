<block qq:if="{{$taroCompReady}}">
    <view>
        <block qq:if="{{draw.show}}">
            <view class="shadow" catchtouchmove="handleTouchMove"></view>
        </block>
        <view class="stick" catchtouchmove="handleTouchMove">
            <view class="user-container">
                <view class="color-part">
                    <view class="user-info">
                        <user-img compid="{{$compid__8}}"></user-img>
                        <view class="user-info-two">
                            <view class="user-name">{{userName}}</view>
                            <view class="stu-number">学号：{{user.stuNumber}}</view>
                        </view>
                        <view class="edit">
                            <image src="{{Icon}}" class="icon" bindtap="toEdit"></image>
                        </view>
                    </view>
                </view>
            </view>
            <view class="whole">
                <view class="{{draw.big ? 'left-part' : 'left-part chosen-part'}}" bindtap="handleLeft">发布历史</view>
                <view class="{{draw.big ? 'right-part chosen-part' : 'right-part'}}" bindtap="handleRight">消息通知<text class="tri">▼</text>
                </view>
            </view>
            <block qq:if="{{draw.show}}">
                <view class="notice">
                    <view class="part">
                        <view class="{{draw.small === '1' ? 'sm-tag chosen-part' : 'sm-tag'}}" bindtap="handleSmall" data-e-tap-so="this" data-e-tap-a-a="1">申请提醒</view>
                    </view>
                    <view class="part">
                        <view class="{{draw.small === '2' ? 'sm-tag chosen-part' : 'sm-tag'}}" bindtap="handleSmall" data-e-tap-so="this" data-e-tap-a-a="2">回复提醒</view>
                    </view>
                </view>
            </block>
        </view>
        <view class="blank-top"></view>
        <block>
            <block qq:if="{{anonymousState__temp3}}">
                <list-item qq:key="$loopState__temp2" qq:for="{{loopArray4}}" qq:for-item="info" qq:for-index="index" compid="{{info.$compid__7}}"></list-item>
            </block>
            <block qq:else>
                <view class="blank">{{blank_msg[draw.small]}}</view>
            </block>
        </block>
        <block qq:if="{{bottom[draw.small]}}">
            <view class="reach-bottom">----没见过底线啊----</view>
        </block>
        <view class="blank-bottom"></view>
        <footer compid="{{$compid__9}}"></footer>
    </view>
</block>