
import { reactive, onMounted, onBeforeUnmount } from "vue";
export default function () {
    let point = reactive({
        x: 0,
        y: 0
    })

    // 获取当前鼠标点击的坐标
    function getPoint(e) {
        point.x = e.clientX;
        point.y = e.clientY;
    }
    
    onMounted(() => {
        document.addEventListener('click', getPoint);
    })
    onBeforeUnmount(() => {
        document.removeEventListener('click', getPoint);
    })

    return point;
}
