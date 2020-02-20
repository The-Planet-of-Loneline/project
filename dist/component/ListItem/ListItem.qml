<template name="renderModeTrans">
    <block>
        <block qq:if="{{mode === '1'}}">
            <view class="list-item" bindtap="toDetail">
                <view class="tag">{{types[type]}}</view>
                <view class="title">{{title}}</view>
                <view class="float-con">
                    <view class="time">{{time}}</view>
                </view>
            </view>
        </block>
        <block qq:elif="{{mode === '2'}}">
            <view class="list-item" bindtap="toDetail">
                <view class="float-con">
                    <view class="time">{{time}}</view>
                </view>
                <view class="msg-con"><text class="name">{{usename}}</text><text class="accept-reject">{{accepts[accept]}}</text>
                </view>
                <view class="tit-con">
                    <view class="title-two">{{title}}</view>
                    <block qq:if="{{accept}}">
                        <image src="{{Eye}}" class="eye" catchtap="eyeCli"></image>
                    </block>
                </view>
            </view>
        </block>
        <block qq:elif="{{mode === '3'}}">
            <view class="list-item" bindtap="toDetail">
                <view class="float-con">
                    <view class="time">{{time}}</view>
                </view>
                <view class="user-info">
                    <image src="{{UserImage}}" class="image-s"></image>
                    <view class="user-name">{{usename}}</view>
                    <image src="{{Eye}}" class="eye-two" catchtap="eyeCliTwo"></image>
                </view>
                <view class="title">{{title}}</view>
            </view>
        </block>
    </block>
</template>
<template name="renderExplainShow">
    <block>
        <block qq:if="{{mode === '2' && show}}">
            <info-s compid="{{$compid__69}}"></info-s>
        </block>
        <block qq:elif="{{showD === '0'}}">
            <view></view>
        </block>
        <block qq:elif="{{showD === '1'}}">
            <info-t compid="{{$compid__70}}"></info-t>
        </block>
        <block qq:elif="{{showD === '2'}}">
            <info compid="{{$compid__71}}"></info>
        </block>
    </block>
</template>
<block qq:if="{{$taroCompReady}}">
    <view>
        <template is="renderModeTrans" data="{{...anonymousState__temp}}"></template>
        <template is="renderExplainShow" data="{{...anonymousState__temp2}}"></template>
    </view>
</block>