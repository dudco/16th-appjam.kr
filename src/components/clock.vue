<template>
    <div class="clock-box">
        <div id="clock">
            <div>16회 앱잼 - 제출 마감까지</div>
            <div>
                <span>{{hours | two_digits}}</span>
                <span>:</span>
                <span>{{minutes | two_digits}}  </span>
                <span>:</span>
                <span>{{seconds | two_digits}}</span>
            </div>
            <img @click="clickPlayBtn" class="play-btn" src="../static/images/play-btn.png" alt="">
        </div>
    </div>
</template>

<script lang="ts">
import {Component, Prop, Vue, Watch} from 'vue-property-decorator'

let interval: number

@Component({
    filters: {
        two_digits(value: number) {
            if(value.toString().length <= 1)
            {
                return "0"+value.toString();
            }
            return value.toString();
        }
    },
})
export default class Clock extends Vue {
    @Prop() deadLine!: string
    @Prop() stop!: boolean

    now = Math.floor((new Date()).getTime() / 1000)
    date:number | null = null
    diff = 0

    created() {
         if (!this.deadLine) {
            throw new Error("Missing props 'deadline' or 'end'");
        }
        let endTime = this.deadLine;
        this.date = Math.floor(Date.parse(endTime.replace(/-/g, "/")) / 1000);
        if (!this.date) {
            throw new Error("Invalid props value, correct the 'deadline' or 'end'");
        }
        interval = setInterval(() => {
            this.now = Math.floor((new Date()).getTime() / 1000);
        }, 1000);
    }

    destroyed() {
        clearInterval(interval);
    }

    @Watch('now')
    onNowChange(value: number) {
        this.diff = this.$data.date - this.$data.now;
        if(this.diff <= 0 || this.$props.stop){
            this.diff = 0;
            // Remove interval
            clearInterval(interval);
        }
    }

    get seconds() {
        return Math.floor(this.diff) % 60
    }
    get minutes() {
        return Math.floor(this.diff / 60) % 60
    }
    get hours() {
        return Math.floor(this.diff / 60 / 60)
    }

    clickPlayBtn() {
        console.log("Click")
    }
}

</script>

<style lang="scss">
.clock-box {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 550px;
    height: 550px;
    background-image: url('../static/images/time.png');
    background-repeat: no-repeat;
    background-size: contain;
}
#clock {
    width: 420px;
    height: 420px;   
    background-color: transparent;
    border: solid 30px #1f2732;
    border-radius: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;

    & > div {
        font-family: 'Noto Sans Korean';
        color: white;
        display: block;
        &:nth-child(1) {
            position: absolute;
            top: 100px;
            font-size: 21px;
        }
        &:nth-child(2) {
            font-size: 62.5px;
            font-weight: bold;

            margin: 62px 0 62px 0;
        }
    }
    & > img {
        width: 85px;
        height: 85px;
        position: absolute;
        bottom: 30px;

        cursor: pointer;
    }
}

.play-btn {
    width: 104px;
    height: 104px;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
