<block qq:if="{{$taroCompReady}}">
    <view>
        <view class="header">
            <image src="{{Back}}" class="back" bindtap="backToDay"></image>
            <button class="{{anonymousState__temp}}" bindtap="anonymousFunc0">发表</button>发布需求</view>
        <view>
            <view class="title-container">
                <input placeholder="输入标题（0~10字)" class="title" maxlength="10" value="{{title}}" bindchange="getInfo" data-e-change-so="this" data-e-change-a-a="title" />
            </view>
            <view class="body-container">
                <textarea placeholder="请在此处输入内容......" class="content" maxlength="100" hidden="{{show}}" value="{{content}}" bindchange="getInfo" data-e-change-so="this" data-e-change-a-a="content"></textarea>
            </view>
        </view>
        <view class="add-container">
            <view class="add-tag" bindtap="changeShow"><text class="plus">+</text><text class="tag-words">添加标签</text>
            </view>
        </view>
        <block qq:if="{{show}}">
            <sidebar compid="{{$compid__57}}"></sidebar>
        </block>
        <footer compid="{{$compid__58}}"></footer>
    </view>
</block>