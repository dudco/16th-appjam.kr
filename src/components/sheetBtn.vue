<template>
    <div @click="btnClick" class="sheet-btn" :class="{'bounce': over}" v-on:mouseover="over = true" v-on:mouseout="over = false">
        <img src="../static/images/click-btn.png" alt="">
        <img src="../static/images/cth.png" alt="">
    </div>
</template>

<script lang="ts">
import {Vue, Component, Prop} from 'vue-property-decorator';

@Component
export default class SheetBtn extends Vue {
    over = false
    
    btnClick() {
        console.log("Click");
        // show booad
    }
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

.bounce {
    animation-name: bounce;
    animation-duration: 0.75s;
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
            margin-bottom: 23px;
        }

        &:nth-child(2) {
            width: 129px;
            height: 18px;
        }
    }
}
</style>
