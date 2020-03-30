<block qq:if="{{$taroCompReady}}">
    <view class="bgcontainer">
        <block>
            <block qq:if="{{to === 'day'}}">
                <image src="{{day}}" class="bg"></image>
            </block>
            <block qq:else>
                <image src="{{night}}" class="bg"></image>
            </block>
        </block>
    </view>
</block>