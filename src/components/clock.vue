<template>
    <div id="clock">
        <div>16회 앱잼 - 제출 마감까지</div>
        <div>
            <span>03</span>
            <span>:</span>
            <span>10</span>
            <span>:</span>
            <span>55</span>
        </div>
        <div id="play-btn">
            <div/>
        </div>
    </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'

@Component
export default class Clock extends Vue {
    
}

</script>

<style lang="scss">
#clock {
    width: 500px;
    height: 500px;   
    background-color: #11161d;
    border: solid 30px #1f2732;
    border-radius: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    & > div {
        font-family: 'Noto Sans Korean';
        color: white;
        display: block;
        &:nth-child(1) {
            font-size: 21px;
        }
        &:nth-child(2) {
            font-size: 62.5px;
            font-weight: bold;

            margin: 62px 0 62px 0;
        }
    }
}

#play-btn {
    width: 104px;
    height: 104px;
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: #11161d;
    border: solid 5px;
    border-radius: 60px;
    border-image: linear-gradient(45deg, #cf59ba, #4d57d0);
    background-image: linear-gradient(#11161d, #11161d), radial-gradient(circle at bottom left, #cf59ba,#4d57d0);
    background-origin: border-box;
    background-clip: content-box, border-box;

    position: relative;
    
    & > div {
        position: absolute;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 17.5px 0 17.5px 30px;
        border-color: transparent transparent transparent #ff0091;
        top: calc(50% - 20px);
        left: calc(50% - 12px);
        
        // border-image: linear-gradient(45deg, #cf59ba, #4d57d0);
        // background-image: linear-gradient(#11161d, #11161d), radial-gradient(left, #cf59ba,#4d57d0);
        // background-origin: border-box;
        // background-clip: content-box, border-box;
    }
}
</style>
