<block qq:if="{{$taroCompReady}}">
    <view class="all">
        
        <head compid="{{$compid__53}}"></head>
        <view class="title">
            <view class="titleText">除了你自己，没人会知道你的身份</view>
        </view>
        <view class="writeContainer" style="{{anonymousState__temp}}">
            <textarea class="write" value="{{Value}}" bindinput="handleInputChange" bindfocus="handleInput" bindblur="handleback" show-confirm-bar="{{false}}" maxlength="{{75}}" auto-focus="{{true}}" data-e-input-so="this" data-e-focus-so="this" data-e-blur-so="this"></textarea>
            <image src="{{Color}}" class="color"></image>
            <button class="post" bindtap="onhandleSubmit" data-e-tap-so="this">发表</button>
        </view>
        <view class="colorContainer">
            <view class="colorCir" style="background-color:rgba(30, 30, 40, 1)" bindtap="colorChangB" data-e-tap-so="this">
                <block qq:if="{{show1}}">
                    <image src="{{check}}" class="check"></image>
                </block>
            </view>
            <view class="colorCir" bindtap="colorChangBlue" data-e-tap-so="this">
                <block qq:if="{{show2}}">
                    <image src="{{check}}" class="check"></image>
                </block>
            </view>
            <view class="colorCir" style="background-color:rgba(124, 159, 154, 1)" bindtap="colorChangG" data-e-tap-so="this">
                <block qq:if="{{show3}}">
                    <image src="{{check}}" class="check"></image>
                </block>
            </view>
            <view class="colorCir" style="background-color:rgba(98, 98, 123, 1)" bindtap="colorChangGray" data-e-tap-so="this">
                <block qq:if="{{show4}}">
                    <image src="{{check}}" class="check"></image>
                </block>
            </view>
            <view class="colorCir" style="background-color:rgba(129, 117, 142, 1)" bindtap="colorChangP" data-e-tap-so="this">
                <block qq:if="{{show5}}">
                    <image src="{{check}}" class="check"></image>
                </block>
            </view>
            <view class="colorCir" style="background-color:rgba(173, 143, 143, 1)" bindtap="colorChangPink" data-e-tap-so="this">
                <block qq:if="{{show6}}">
                    <image src="{{check}}" class="check"></image>
                </block>
            </view>
        </view>
        <footer compid="{{$compid__54}}"></footer>
    </view>
</block>