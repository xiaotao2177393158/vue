<template>
    <ul>
        <li :style="{opacity}">嘿嘿嘿</li>
        <li>news001 <input type="text"/></li> 
        <li>news002 <input type="text"/></li> 
        <li>news003 <input type="text"/></li> 
    </ul>
</template>

<script>
    export default {
        name:'News',
        data(){
            return {
                opacity:1
            }
        },
        activated(){
            console.log('activated')
            // 开启定时器
            this.timer = setInterval(()=>{
                console.log('@');
                if(this.opacity <= 0){
                    this.opacity = 1;
                }
                this.opacity -= .01;
            },10)
        },
        deactivated(){
            console.log('deactivated')
            clearInterval(this.timer)
        }
    }
</script>