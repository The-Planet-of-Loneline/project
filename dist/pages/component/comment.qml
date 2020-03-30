<block qq:if="{{$taroCompReady}}">
    <dialog>
        <view class="inputContainer">
            <input value="{{inpuValue}}" class="comment" bindfocus="handleInput" bindinput="handleInputChange" bindblur="handleCloseComment" maxlength="{{35}}" data-e-focus-so="this" data-e-input-so="this" data-e-blur-so="this" />
            <button class="commentButton" bindtap="handleClose" data-e-tap-so="this">确定</button>
        </view>
    </dialog>
</block>