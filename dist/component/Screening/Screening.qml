<template name="renderShowScreen">
    <block>
        <block qq:if="{{chosen.which === 0}}">
            <view></view>
        </block>
        <block qq:elif="{{chosen.which === 1}}">
            <view class="container">
                <view class="list-extends">
                    <tag qq:key="$loopState__temp2" qq:for="{{loopArray2}}" qq:for-item="details" qq:for-index="index" compid="{{details.$compid__3}}"></tag>
                </view>
                <view class="reset" bindtap="reset" data-e-tap-so="this" data-e-tap-a-a="type">重置</view>
            </view>
        </block>
        <block qq:elif="{{chosen.which === 2}}">
            <view class="container">
                <view class="list-extends">
                    <tag qq:key="$loopState__temp6" qq:for="{{loopArray3}}" qq:for-item="time" qq:for-index="index" compid="{{time.$compid__4}}"></tag>
                </view>
                <view class="detail-time">时间区间（1~24整点）</view>
                <view class="downer">
                    <input class="enter" maxlength="2" placeholder="{{placeHolder[0]}}" value="{{chosen.during[0]}}" bindchange="getTime" bindfocus="changeHolder" bindblur="changeHolder" data-e-change-so="this" data-e-change-a-a="{{0}}" data-e-focus-so="this" data-e-focus-a-a="{{false}}" data-e-focus-a-b="{{true}}" data-e-blur-so="this" data-e-blur-a-a="{{false}}" data-e-blur-a-b="{{false}}" />
                    <view class="line"></view>
                    <input class="enter" maxlength="2" placeholder="{{placeHolder[1]}}" value="{{chosen.during[1]}}" bindchange="getTime" bindfocus="changeHolder" bindblur="changeHolder" data-e-change-so="this" data-e-change-a-a="{{1}}" data-e-focus-so="this" data-e-focus-a-a="{{true}}" data-e-focus-a-b="{{true}}" data-e-blur-so="this" data-e-blur-a-a="{{true}}" data-e-blur-a-b="{{false}}" />
                </view>
                <view class="reset" bindtap="reset" data-e-tap-so="this" data-e-tap-a-a="time">重置</view>
            </view>
        </block>
        <block qq:elif="{{chosen.which === 3}}">
            <view class="container">
                <view class="list-extends">
                    <tag qq:key="$loopState__temp8" qq:for="{{loopArray4}}" qq:for-item="place" qq:for-index="index" compid="{{place.$compid__5}}"></tag>
                </view>
                <view class="reset" bindtap="reset" data-e-tap-so="this" data-e-tap-a-a="place">重置</view>
            </view>
        </block>
    </block>
</template>
<block qq:if="{{$taroCompReady}}">
    <view>
        <view class="divide">
            <view class="{{chosen.type === 1 ? 's-tag chosen' : 's-tag'}}" bindtap="changeDate" data-e-tap-so="this" data-e-tap-a-a="type" data-e-tap-a-b="{{1}}">学习</view>
            <view class="{{chosen.type === 2 ? 's-tag chosen' : 's-tag'}}" bindtap="changeDate" data-e-tap-so="this" data-e-tap-a-a="type" data-e-tap-a-b="{{2}}">运动</view>
            <view class="{{chosen.type === 3 ? 's-tag chosen' : 's-tag'}}" bindtap="changeDate" data-e-tap-so="this" data-e-tap-a-a="type" data-e-tap-a-b="{{3}}">娱乐</view>
            <view class="{{chosen.type === 4 ? 's-tag chosen' : 's-tag'}}" bindtap="changeDate" data-e-tap-so="this" data-e-tap-a-a="type" data-e-tap-a-b="{{4}}">其他</view>
        </view>
        <view class="divide">
            <block qq:if="{{chosen.type !== 4}}">
                <view class="ss-tag" bindtap="changeDate" data-e-tap-so="this" data-e-tap-a-a="which" data-e-tap-a-b="{{1}}">类别 <text class="s-tri">▼</text>
                </view>
            </block>
            <view class="ss-tag" bindtap="changeDate" data-e-tap-so="this" data-e-tap-a-a="which" data-e-tap-a-b="{{2}}">时间 <text class="s-tri">▼</text>
            </view>
            <view class="ss-tag" bindtap="changeDate" data-e-tap-so="this" data-e-tap-a-a="which" data-e-tap-a-b="{{3}}">地点 <text class="s-tri">▼</text>
            </view>
        </view>
        <template is="renderShowScreen" data="{{...anonymousState__temp11}}"></template>
        <block qq:if="{{chosen.which}}">
            <view class="shadow" bindtap="closeScr"></view>
        </block>
    </view>
</block>