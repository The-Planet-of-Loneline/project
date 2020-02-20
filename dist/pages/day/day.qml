<block qq:if="{{$taroCompReady}}">
    <view>
        <screening></screening>
        <view class="cards-container">
            <block>
                <block qq:if="{{cards.length}}">
                    <card qq:key="index" qq:for="{{loopArray37}}" qq:for-item="detail" qq:for-index="index" compid="{{detail.$compid__51}}"></card>
                </block>
                <block qq:else>
                    <blank></blank>
                </block>
            </block>
        </view>
        <footer compid="{{$compid__52}}"></footer>
        <view class="share-container">
            <image src="{{Share}}" class="share" bindtap="toCreateNeeds"></image>
        </view>
    </view>
</block>