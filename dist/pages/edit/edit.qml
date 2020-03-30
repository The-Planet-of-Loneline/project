<block qq:if="{{$taroCompReady}}">
    <view>
        <view class="head">
            <view class="headText">编辑资料</view>
        </view>
        <view class="container">
            <view class="card">
                <view class="content">昵称：
                    <input class="name" maxlength="8" value="{{inputValue}}" bindinput="onhandleInputChange" id="1" data-e-input-so="this" />
                    <label class="edit-label" for="1" qq:key="1">
                        <image src="{{Edit}}" class="edit"></image>
                    </label>
                </view>
                <view class="content">学号：{{info.stuid}}</view>
                <view class="content">性别：{{info.sex}}</view>
                <view class="content">学院：{{info.college}}</view>
                <view class="content">年级：{{info.grade}}</view>
            </view>
        </view>
        <footer compid="{{$compid__38}}"></footer>
    </view>
</block>