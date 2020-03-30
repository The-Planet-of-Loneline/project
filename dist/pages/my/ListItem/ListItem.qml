<block qq:if="{{$taroCompReady}}">
    <view>
        <block qq:if="{{mode === '0'}}">
            <view class="list-item" bindtap="toMyDetail">
                <view class="tag">{{info.tag ? info.tag : '其他'}}</view>
                <view class="title">{{info.title}}</view>
                <view class="float-con">
                    <view class="time">{{info.post_time}}</view>
                </view>
            </view>
        </block>
        <block qq:if="{{mode === '1'}}">
            <view class="list-item" bindtap="toDetail">
                <view class="float-con">
                    <view class="time">{{info.send_time}}</view>
                </view>
                <view class="user-info">
                    <user-img compid="{{$compid__10}}"></user-img>
                    <view class="user-name">{{info.sender_nickname}}</view>
                    <image src="{{Eye}}" class="eye-two" catchtap="eyeCli"></image>
                </view>
                <view class="check">
                    <view class="title-thr">{{info.title}}</view>
                    <block qq:if="{{!info.red_point}}">
                        <image src="{{Accept}}" class="accept"></image>
                    </block>
                    <block qq:if="{{info.red_point && checked}}">
                        <image src="{{checked - 1 ? Refuse : Accept}}" class="{{checked - 1 ? 'refuse' : 'accept'}}"></image>
                    </block>
                </view>
            </view>
        </block>
        <block qq:if="{{mode === '2'}}">
            <view class="list-item" bindtap="toDetail">
                <block qq:if="{{info.red_point && !checked}}">
                    <view class="red_point" catchtap="handleRedPoint"></view>
                </block>
                <view class="float-con">
                    <view class="time">{{info.confirm_time}}</view>
                </view>
                <view class="msg-con"><text class="name">{{info.nick_name}}</text><text class="accept-reject">{{accepts[info.status - 2]}}</text>
                </view>
                <view class="tit-con">
                    <view class="title-two">{{info.title}}</view>
                    <block qq:if="{{info.status === 2}}">
                        <image src="{{Eye}}" class="eye" catchtap="eyeCli"></image>
                    </block>
                </view>
            </view>
        </block>
        <block qq:if="{{mode === '2' && showD === '1'}}">
            <info-t compid="{{$compid__11}}"></info-t>
        </block>
        <block qq:if="{{mode === '1' && showD === '1'}}">
            <info-t compid="{{$compid__12}}"></info-t>
        </block>
        <block qq:if="{{mode === '1' && showD === '2'}}">
            <info compid="{{$compid__13}}"></info>
        </block>
    </view>
</block>