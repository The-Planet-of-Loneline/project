<template name="renderExplainList">
    <block>
        <block qq:if="{{draw.small === '0'}}">
            <list-item qq:key="$loopState__temp2" qq:for="{{loopArray47}}" qq:for-item="index" qq:for-index="_anonIdx2" compid="{{index.$compid__73}}"></list-item>
        </block>
        <block qq:elif="{{draw.small === '1'}}">
            <list-item qq:key="$loopState__temp4" qq:for="{{loopArray48}}" qq:for-item="index" qq:for-index="_anonIdx4" compid="{{index.$compid__74}}"></list-item>
        </block>
        <block qq:elif="{{draw.small === '2'}}">
            <list-item qq:key="$loopState__temp6" qq:for="{{loopArray49}}" qq:for-item="index" qq:for-index="_anonIdx6" compid="{{index.$compid__75}}"></list-item>
        </block>
    </block>
</template>
<block qq:if="{{$taroCompReady}}">
    <view>
        <block qq:if="{{draw.show}}">
            <view class="shadow"></view>
        </block>
        <view class="stick">
            <view class="user-container">
                <view class="color-part">
                    <view class="user-info">
                        <image src="{{UserImage}}" class="user-image"></image>
                        <view class="user-info-two">
                            <view class="user-name">{{user.userName}}</view>
                            <view class="stu-number">学号：{{user.stuNumber}}</view>
                        </view>
                        <view class="edit">
                            <image src="{{Icon}}" class="icon" bindtap="toEdit"></image>
                        </view>
                    </view>
                </view>
            </view>
            <view class="whole">
                <view class="{{draw.big ? 'left-part' : 'left-part chosen-part'}}" bindtap="handleLeft">发布历史</view>
                <view class="{{draw.big ? 'right-part chosen-part' : 'right-part'}}" bindtap="handleRight">消息通知<text class="tri">▼</text>
                </view>
            </view>
            <block qq:if="{{draw.show}}">
                <view class="notice">
                    <view class="part">
                        <view class="{{draw.small === '1' ? 'sm-tag chosen-part' : 'sm-tag'}}" bindtap="handleSmall" data-e-tap-so="this" data-e-tap-a-a="1">申请提醒</view>
                    </view>
                    <view class="part">
                        <view class="{{draw.small === '2' ? 'sm-tag chosen-part' : 'sm-tag'}}" bindtap="handleSmall" data-e-tap-so="this" data-e-tap-a-a="2">回复提醒</view>
                    </view>
                </view>
            </block>
        </view>
        <view class="need-list">
            <template is="renderExplainList" data="{{...anonymousState__temp7}}"></template>
        </view>
        <footer compid="{{$compid__76}}"></footer>
    </view>
</block>