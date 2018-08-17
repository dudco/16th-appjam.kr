<template>
    <div class="test">
        <clock :deadLine="'Aug 19 2018 08:30:00 GMT+0900 (한국 표준시)'" />
        <sheet-btn :btnClick="sheetBtnClick" :isShow="showBoard"/>
        <board :show="showBoard"/>
        <star />
    </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component
export default class App extends Vue {
    showBoard = false;
    sheetBtnClick() {
        console.log("asdf")
        this.showBoard = !this.showBoard;
    }
}
</script>

<style>
@import url(https://cdn.rawgit.com/theeluwin/NotoSansKR-Hestia/master/stylesheets/NotoSansKR-Hestia.css);
@import url(http://fonts.googleapis.com/earlyaccess/notosanskr.css);
  
html {
    height: 100%;
}

body {
    margin: 0;
    padding: 0;
    height: 100%;
    overflow: hidden;
    background-color: #11161d;
}

.test {
    width: 100%;
    height: 100%;
    background-image: url("./static/images/background.png");
    background-position: center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
}
</style>
