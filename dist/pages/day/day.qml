<block qq:if="{{$taroCompReady}}">
    <view>
        <scroll-view class="scroll-contain" bindtouchend="handleTouchEnd" scroll-with-animation="{{true}}" bindscroll="updataScroll" scroll-top="{{scroll_Y}}" scroll-y="{{true}}" style="{{anonymousState__temp}}">
            <view class="refresh-con">
                <refresh compid="{{$compid__2}}"></refresh>
            </view>
            <view class="cards-container" style="{{anonymousState__temp2}}">
                <block>
                    <block qq:if="{{content.length}}">
                        <card qq:key="$loopState__temp4" qq:for="{{loopArray0}}" qq:for-item="detail" qq:for-index="index" compid="{{detail.$compid__0}}"></card>
                    </block>
                    <block qq:else>
                        <blank></blank>
                    </block>
                </block>
            </view>
        </scroll-view>
        <screening compid="{{$compid__1}}"></screening>
        <footer compid="{{$compid__3}}"></footer>
        <view class="share-container" bindtouchmove="handleShareMove" style="{{anonymousState__temp6}}" data-e-touchmove-so="this">
            <image src="{{Share}}" class="share" bindtap="toCreateNeeds"></image>
        </view>
    </view>
</block>