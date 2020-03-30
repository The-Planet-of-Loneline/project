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
            <block qq:if="{{loading}}">
                <view class="loading"></view>
            </block>
            <image src="{{Delete}}" class="delete" bindtap="changeShow" data-e-tap-so="this" data-e-tap-a-a="{{true}}"></image>
        </view>
        <view class="body-container">
            <view class="info">
                <view class="title">{{content.title}}</view>
                <view class="time">{{content.post_time}}</view>
            </view>
            <view class="details">
                <view class="tag-container">
                    <view class="spe-tag">{{content.type}}</view>
                    <block qq:if="{{content.tag !== ''}}">
                        <view class="spe-tag">{{content.tag}}</view>
                    </block>
                    <view class="spe-tag">{{content.place}}</view>
                </view>
                <view class="content">{{content.content}}</view>
            </view>
        </view>
        <footer compid="{{$compid__20}}"></footer>
    </view>
</block>