<block qq:if="{{$taroCompReady}}">
    <view class="push-container">
        <view class="push">
            <view class="header"><text class="words">个人资料&联系方式</text>
                <image src="{{Close}}" class="close" bindtap="changeShow" data-e-tap-so="this"></image>
            </view>
            <view class="fake-table">
                <view class="fake-cell">昵称：{{name}}</view>
                <view class="fake-cell">学院：{{college}}</view>
                <view class="fake-cell">性别：{{sex}}</view>
                <view class="fake-cell">QQ：{{qq}}</view>
                <view class="fake-cell">年级：{{grade}}</view>
                <view class="fake-cell">Tel：{{tel}}</view>
            </view>
            <view>
                <view class="sentence">{{msg}}</view>
            </view>
        </view>
    </view>
</block>