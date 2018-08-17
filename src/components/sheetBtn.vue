<template>
    <div class="sheet-btn">
        <img src="../static/images/click-btn.png" alt="">
        <img src="../static/images/cth.png" alt="">
    </div>
</template>

<script lang="ts">
import {Vue, Component, Prop} from 'vue-property-decorator';

@Component
export default class SheetBtn extends Vue {

}
</script>

<style lang="scss">
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
