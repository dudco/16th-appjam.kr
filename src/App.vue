<template>
    <div class="test">
    </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component
export default class App extends Vue {
    created(): void {
        console.log('created!!');
    }
}
</script>

<style>
html {
    height: 100%;
}

body {
    margin: 0;
    padding: 0;
    height: 100%;
    overflow: hidden;
    background-color: #000000;
}

.test {
    width: 100%;
    height: 100%;
    background-image: url("./static/images/background.png");
    background-position: center;
    background-size: cover;
}
</style>
