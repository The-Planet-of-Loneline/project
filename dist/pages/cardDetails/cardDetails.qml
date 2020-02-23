<template name="renderTagsExtends">
    <block>
        <view qq:key="index" class="spe-tag" qq:for="{{tags}}" qq:for-item="tag" qq:for-index="index">{{tag}}</view>
    </block>
</template>
<block qq:if="{{$taroCompReady}}">
    <view>
        <view class="header">需求详情</view>
        <view class="{{anonymousState__temp2}}">
            <view class="user">
                <view class="user-img"></view>
                <view class="user-info">
                    <view class="user-name">{{userName}}</view>
                    <view class="submit-time">{{submitTime}}</view>
                </view>
            </view>
            <view class="details">
                <view class="tag-container">
                    <template is="renderTagsExtends" data="{{...anonymousState__temp}}"></template>
                </view>
                <view class="title">{{title}}</view>
                <view class="time">时间:{{time}}</view>
                <view class="content">{{content}}</view>
            </view>
            <view class="submit-container">
                <button class="submit-require" bindtap="changeShow">提交申请</button>
            </view>
        </view>
        <block qq:if="{{show}}">
            <info compid="{{$compid__20}}"></info>
        </block>
        <footer compid="{{$compid__21}}"></footer>
    </view>
</block>