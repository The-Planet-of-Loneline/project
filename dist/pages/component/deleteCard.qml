<block qq:if="{{$taroCompReady}}">
    <dialog>
        <view class="cardContainer">
            <view class="card">
                <view class="cardText">确定后，将删除此历史记录。</view>
                <view class="cardButton">
                    <button class="cancel" bindtap="cancel" data-e-tap-so="this">取消</button>
                    <button class="confirm" bindtap="handleDelete" data-e-tap-so="this">确定</button>
                </view>
            </view>
        </view>
    </dialog>
</block>