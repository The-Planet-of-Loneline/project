<block qq:if="{{$taroCompReady}}">
    <view>
        <view class="header">
            <block qq:if="{{loading}}">
                <view class="loading"></view>
            </block>
            <button class="{{anonymousState__temp}}" bindtap="share">发表</button>发布需求</view>
        <view>
            <view class="title-container">
                <input placeholder="输入标题(0~10字)" placeholder-class="place-title" class="title" maxlength="10" value="{{title}}" bindinput="getInfo" data-e-input-so="this" data-e-input-a-a="title" />
            </view>
            <view class="body-container">
                <block>
                    <block qq:if="{{show}}">
                        <view class="fake-text">{{content === '' ? '请在此处输入内容......' : content}}</view>
                    </block>
                    <block qq:else>
                        <textarea placeholder="请在此处输入内容......" placeholder-class="place-content" class="content" maxlength="100" hidden="{{show}}" value="{{content}}" bindinput="handleInputChange" data-e-input-so="this"></textarea>
                    </block>
                </block>
            </view>
        </view>
        <view class="add-container">
            <view class="add-tag" bindtap="changeShow"><text class="plus">+</text><text class="tag-words">添加标签</text>
            </view>
        </view>
        <block qq:if="{{show}}">
            <sidebar compid="{{$compid__14}}"></sidebar>
        </block>
        <footer compid="{{$compid__15}}"></footer>
    </view>
</block>