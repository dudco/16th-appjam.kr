<template>
    <div class="sheet-btn">
        <div>image</div>
        <div class="text">Click to here</div>
    </div>
</template>

<script lang="ts">
import {Vue, Component, Prop} from 'vue-property-decorator';

@Component
export default class SheetBtn extends Vue {

}
</script>

<style lang="scss">
.text {
    font-size: 30px;
    background: -webkit-linear-gradient(to right, #cf59ba, #4d57d0);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
.sheet-btn {
    position: absolute;
}
</style>
