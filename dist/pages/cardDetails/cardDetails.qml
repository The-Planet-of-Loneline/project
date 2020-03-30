<block qq:if="{{$taroCompReady}}">
    <view>
        <view class="header">需求详情</view>
        <view class="{{anonymousState__temp}}">
            <view class="user">
                <user-img compid="{{$compid__21}}"></user-img>
                <view class="user-info">
                    <view class="user-name">{{content.sender_nick_name}}</view>
                    <view class="submit-time">{{content.post_time}}</view>
                </view>
            </view>
            <view class="details">
                <view class="tag-container">
                    <view class="spe-tag">{{content.type}}</view>
                    <block qq:if="{{content.tag !== ''}}">
                        <view class="spe-tag">{{content.tag}}</view>
                    </block>
                    <view class="spe-tag">{{content.place}}</view>
                </view>
                <view class="title">{{content.title}}</view>
                <view class="time">{{'时间:' + content.date + ' ' + content.time_from + '：00—' + content.time_end + '：00'}}</view>
                <view class="content">{{content.content}}</view>
            </view>
            <view class="submit-container">
                <block qq:if="{{able === 'able'}}">
                    <button class="submit-require" bindtap="changeShow">提交申请</button>
                </block>
            </view>
        </view>
        <block qq:if="{{show}}">
            <info compid="{{$compid__22}}"></info>
        </block>
        <footer compid="{{$compid__23}}"></footer>
    </view>
</block>