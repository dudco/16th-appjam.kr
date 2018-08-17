<template>
    <div @click="btnClick" class="sheet-btn" :class="{'bounce': over, 'show-board': isShowing, 'leave-board': isLeaving}" v-on:mouseover="over = true" v-on:mouseout="over = false">
        <img src="../static/images/click-btn.png" alt="">
        <img src="../static/images/cth.png" alt="">
    </div>
</template>

<script lang="ts">
import {Vue, Component, Prop, Watch} from 'vue-property-decorator';

@Component
export default class SheetBtn extends Vue {
    @Prop()
    btnClick!:() => void
    @Prop()
    isShow!: boolean

    over = false
    isAnim = false

    created() {
        document.addEventListener('animationend', this.animationEnd);
    }

    @Watch('isShow')
    onChangeShow() {
        this.isAnim = true
    }

    animationEnd() {
        this.isAnim = false
    }

    get isShowing() {
        return this.isShow;
    }

    get isLeaving() {
        return !this.isShow && this.isAnim;
    }
    
    // btnClick() {
    //     console.log("Click");
    // }
}
</script>

<style lang="scss">
@keyframes bounce {
  from,
  20%,
  53%,
  80%,
  to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    -webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    -webkit-transform: translate3d(0, -30px, 0);
    transform: translate3d(0, -30px, 0);
  }

  70% {
    -webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    -webkit-transform: translate3d(0, -15px, 0);
    transform: translate3d(0, -15px, 0);
  }

  90% {
    -webkit-transform: translate3d(0, -4px, 0);
    transform: translate3d(0, -4px, 0);
  }
}

@keyframes flipInXIn {
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 0deg);
    animation-timing-function: ease-in;
  }

  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, 160deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 190deg);
  }

  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, 175deg);
  }

  to {
    transform: perspective(400px)  rotate3d(1, 0, 0, 180deg);
  }
}

@keyframes flipInXOut {
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 180deg);
    animation-timing-function: ease-in;
  }

  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, 20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, -10deg);
  }

  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, 15deg);
  }

  to {
    transform: perspective(400px)  rotate3d(1, 0, 0, 0deg);
  }
}

.sheet-btn {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    bottom: 0%;
    margin-bottom: 45px;
    & > img {
        &:nth-child(1) {
            width: 70px;
            height: 70px;
            margin-bottom: 15px;
        }

        &:nth-child(2) {
            width: 129px;
            height: 18px;
        }
    }
}

.show-board > img:nth-child(1){
  backface-visibility: visible !important;
  animation-name: flipInXIn;
  animation-duration: 1.5s;
  animation-fill-mode: forwards;
//   transform: rotateX(180deg);
}
.leave-board > img:nth-child(1){
  backface-visibility: visible !important;
  animation-name: flipInXOut;
  animation-duration: 1.5s;
  animation-fill-mode: forwards;
}
</style>
