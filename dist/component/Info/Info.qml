<block qq:if="{{$taroCompReady}}">
    <view class="push-container" catchtouchmove="handleTouchMove">
        <view class="push">
            <view class="header"><text class="words">编辑联系方式</text>
                <image src="{{Close}}" class="close" bindtap="changeShowCli" data-e-tap-so="this"></image>
            </view>
            <view>
                <view class="info-container">
                    <view class="outter-circle" bindtap="changeCheck" data-e-tap-so="this" data-e-tap-a-a="{{0}}">
                        <block qq:if="{{!(checked[0] === 0)}}">
                            <view class="inner-circle"></view>
                        </block>
                    </view><text class="numb">QQ:</text>
                    <block>
                        <block qq:if="{{checked[0] === 0}}">
                            <view class="unfoucs">未选定</view>
                        </block>
                        <block qq:else>
                            <input class="info" placeholder="{{placeHolder[0]}}" placeholder-class="place-info" maxlength="11" value="{{qq}}" bindinput="getInfo" bindfocus="changeHolder" bindblur="changeHolder" data-e-input-so="this" data-e-input-a-a="qq" data-e-focus-so="this" data-e-focus-a-a="{{false}}" data-e-focus-a-b="{{true}}" data-e-blur-so="this" data-e-blur-a-a="{{false}}" data-e-blur-a-b="{{false}}" />
                        </block>
                    </block>
                </view>
                <view class="info-container">
                    <view class="outter-circle" bindtap="changeCheck" data-e-tap-so="this" data-e-tap-a-a="{{1}}">
                        <block qq:if="{{checked[1]}}">
                            <view class="inner-circle"></view>
                        </block>
                    </view><text class="numb">Tel：</text>
                    <block>
                        <block qq:if="{{checked[1]}}">
                            <input class="info" placeholder="{{placeHolder[1]}}" placeholder-class="place-info" maxlength="11" value="{{tel}}" bindinput="getInfo" bindfocus="changeHolder" bindblur="changeHolder" data-e-input-so="this" data-e-input-a-a="tel" data-e-focus-so="this" data-e-focus-a-a="{{true}}" data-e-focus-a-b="{{true}}" data-e-blur-so="this" data-e-blur-a-a="{{true}}" data-e-blur-a-b="{{false}}" />
                        </block>
                        <block qq:else>
                            <view class="unfoucs">未选定</view>
                        </block>
                    </block>
                </view>
            </view>
            <view>
                <textarea class="sentence" placeholder="你写下的内容会发送给对方......" maxlength="100" value="{{msg}}" bindinput="handleInputChange" data-e-input-so="this"></textarea>
            </view>
            <view>
                <button class="{{anonymousState__temp}}" bindtap="anonymousFunc0">
                    <block>
                        <block qq:if="{{loading}}">
                            <view class="loading"></view>
                        </block>
                        <block qq:else>{{'提交'}}</block>
                    </block>
                </button>
            </view>
        </view>
    </view>
</block>