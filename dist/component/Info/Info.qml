<block qq:if="{{$taroCompReady}}">
    <view class="push-container">
        <view class="push">
            <view class="header"><text class="words">编辑联系方式</text>
                <image src="{{Close}}" class="close" bindtap="changeShowCli" data-e-tap-so="this"></image>
            </view>
            <view>
                <view class="info-container">
                    <view class="outter-circle" bindtap="changeCheck" data-e-tap-so="this" data-e-tap-a-a="{{false}}">
                        <block qq:if="{{!checked}}">
                            <view class="inner-circle"></view>
                        </block>
                    </view><text class="numb">QQ:</text>
                    <block>
                        <block qq:if="{{checked}}">
                            <view class="unfoucs">未选定</view>
                        </block>
                        <block qq:else>
                            <input class="info" maxlength="11" value="{{qq}}" bindchange="getInfo" data-e-change-so="this" data-e-change-a-a="qq" />
                        </block>
                    </block>
                </view>
                <view class="info-container">
                    <view class="outter-circle" bindtap="changeCheck" data-e-tap-so="this" data-e-tap-a-a="{{true}}">
                        <block qq:if="{{checked}}">
                            <view class="inner-circle"></view>
                        </block>
                    </view><text class="numb">Tel：</text>
                    <block>
                        <block qq:if="{{checked}}">
                            <input class="info" maxlength="11" value="{{tel}}" bindchange="getInfo" data-e-change-so="this" data-e-change-a-a="tel" />
                        </block>
                        <block qq:else>
                            <view class="unfoucs">未选定</view>
                        </block>
                    </block>
                </view>
            </view>
            <view>
                <textarea class="sentence" placeholder="你写下的内容会发送给对方......" maxlength="150" value="{{msg}}"></textarea>
            </view>
            <view>
                <button class="{{anonymousState__temp}}" bindtap="anonymousFunc0">提交</button>
            </view>
        </view>
    </view>
</block>