<template name="renderTagsExtends">
    <block>
        <view qq:key="index" class="spe-tag" qq:for="{{tags}}" qq:for-item="tag" qq:for-index="index">{{tag}}</view>
    </block>
</template>
<block qq:if="{{$taroCompReady}}">
    <view>
        <block qq:if="{{show}}">
            <view class="shadow">
                <view class="delete-con">
                    <view class="upper">确定后，将删除此需求。</view>
                    <view class="downer">
                        <view class="left" bindtap="changeShow" data-e-tap-so="this" data-e-tap-a-a="{{false}}">取消</view>
                        <view class="right" bindtap="sure">确定</view>
                    </view>
                </view>
            </view>
        </block>
        <view class="header">需求详情
            <image src="{{Delete}}" class="delete" bindtap="changeShow" data-e-tap-so="this" data-e-tap-a-a="{{true}}"></image>
        </view>
        <view class="body-container">
            <view class="info">
                <view class="title">{{title}}</view>
                <view class="time">{{time}}</view>
            </view>
            <view class="details">
                <view class="tag-container">
                    <template is="renderTagsExtends" data="{{...anonymousState__temp}}"></template>
                </view>
                <view class="content">{{content}}</view>
            </view>
        </view>
        <footer compid="{{$compid__19}}"></footer>
    </view>
</block>