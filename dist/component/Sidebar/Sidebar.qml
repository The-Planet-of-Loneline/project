<block qq:if="{{$taroCompReady}}">
    <view class="shadow-container">
        <view class="body-container">
            <view class="choose-container">
                <view class="time-container">
                    <view class="header"><text class="words">时间</text>
                        <image src="{{Close}}" class="close" bindtap="changeShow"></image>
                    </view>
                    <view class="list-extends">
                        <tag qq:key="$loopState__temp2" qq:for="{{loopArray8}}" qq:for-item="time" qq:for-index="index" compid="{{time.$compid__15}}"></tag>
                    </view>
                    <view class="detail-time">时间区间（1~24整点）</view>
                    <view class="downer">
                        <input class="enter" maxlength="2" value="{{chosen.during[0]}}" bindchange="getTime" data-e-change-so="this" data-e-change-a-a="{{0}}" />
                        <view class="line"></view>
                        <input class="enter" maxlength="2" value="{{chosen.during[1]}}" bindchange="getTime" data-e-change-so="this" data-e-change-a-a="{{1}}" />
                    </view>
                </view>
                <view class="type-container">
                    <view class="header"><text class="words">类型</text>
                    </view>
                    <view class="list-extends">
                        <tag qq:key="$loopState__temp4" qq:for="{{loopArray9}}" qq:for-item="type" qq:for-index="index" compid="{{type.$compid__16}}"></tag>
                    </view>
                </view>
                <block qq:if="{{chosen.type !== 4}}">
                    <view class="detail-container">
                        <view class="header"><text class="words">内容</text>
                        </view>
                        <view class="list-extends">
                            <tag qq:key="$loopState__temp8" qq:for="{{loopArray10}}" qq:for-item="details" qq:for-index="index" compid="{{details.$compid__17}}"></tag>
                        </view>
                    </view>
                </block>
                <view class="place-container">
                    <view class="header"><text class="words">地点</text>
                    </view>
                    <view class="list-extends">
                        <tag qq:key="$loopState__temp12" qq:for="{{loopArray11}}" qq:for-item="place" qq:for-index="index" compid="{{place.$compid__18}}"></tag>
                    </view>
                </view>
            </view>
            <view class="submit-container">
                <button class="{{anonymousState__temp15}}" bindtap="anonymousFunc0">提交</button>
                <button class="press reset" bindtap="reset">重置</button>
            </view>
        </view>
    </view>
</block>