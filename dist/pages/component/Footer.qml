<block qq:if="{{$taroCompReady}}">
    <view class="footer">
        <view class="secret" bindtap="toSecret">
            <view class="secretImg">
                <image src="{{showImg ? emailBlue : emailGray}}" class="imgEmail"></image>
            </view>
            <view class="secretContent" style="{{anonymousState__temp}}">秘密</view>
        </view>
        <view class="moon">
            <view class="moonImg">
                <image src="{{moon}}" class="imgMoon" bindtap="toDay"></image>
            </view>
        </view>
        <view class="mine" bindtap="toMine">
            <view class="mineImg">
                <image src="{{showImg ? userGray : userBlue}}" class="imgMine"></image>
            </view>
            <view class="mineContent" style="{{anonymousState__temp2}}">我的</view>
        </view>
    </view>
</block>