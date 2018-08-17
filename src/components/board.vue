<template>
    <div class="board">
        <div>hello</div>
        <div>world</div>
    </div>    
</template>
<script lang="ts">
import {Vue, Component, Prop} from 'vue-property-decorator';

@Component
export default class Board extends Vue {
    created() {
        console.log("Board!");
    }
}
</script>
<style lang="scss">
.board {
    position: absolute;
    top: calc(50% - 300px);
    left: calc(50% - 390px);

    width: 780px;
    height: 600px;;

    border: 1px solid #fff;
    border-radius: 10px;
    border-image: linear-gradient(#cf59ba, #4d57d0) 25 25 round;
    border-image-slice: 1;
}
</style>
