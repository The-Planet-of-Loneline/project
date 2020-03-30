<block qq:if="{{$taroCompReady}}">
    <view class="push-container" catchtouchmove="handleTouchMove">
        <view class="push">
            <view class="header"><text class="words">个人资料&联系方式</text>
                <image src="{{Close}}" class="close" bindtap="changeShow"></image>
            </view>
            <view class="fake-table">
                <view class="fake-cell left">昵称：{{name}}</view>
                <view class="fake-cell right">学院：{{college}}</view>
                <view class="fake-cell left">性别：{{sex}}</view>
                <view class="fake-cell right">QQ：{{qq}}</view>
                <view class="fake-cell left">年级：{{grade}}</view>
                <view class="fake-cell right">Tel：{{tel}}</view>
            </view>
            <view>
                <view class="{{able ? 'sentence type-t' : 'sentence type-s'}}">{{msg}}</view>
            </view>
            <block qq:if="{{able}}">
                <view class="sub-con">
                    <view class="sub-button" bindtap="agree">同意</view>
                    <view class="sub-button" bindtap="reject">拒绝</view>
                </view>
            </block>
        </view>
    </view>
</block>