<template>
    <div class="idx"> 
        <div class="shooting-stars"></div>
        <div class="stars1"/>
        <div class="stars2"/>
        <div class="stars"/>
    </div>
</template>

<style lang="scss">
$starFieldWidth: 1920;
$starFieldHeight: 1080;
$starStartOffset: 600px;

$starOneScrollDuration: 100s;
$starTwoScrollDuration: 125s;
$starThreeScrollDuration: 175s;
$numStarOneStars: 5;
$numStarTwoStars: 10;
$numStarThreeStars: 15;
$numShootingStars: 10;
$width: 100%;

.idx {
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: hidden;
}
  
@function create-stars($n) {

  $stars: "#{random($starFieldWidth)}px #{random($starFieldHeight)}px #FFF5";

  @for $i from 2 through $n {
    $stars: "#{$stars} , #{random($starFieldWidth)}px #{random($starFieldHeight)}px #FFF5";
  }

  @return unquote($stars)
}
@mixin star-template($numStars, $starSize, $scrollSpeed) {
  z-index: 10;
  width: $starSize;
  height: $starSize;
  border-radius: 50%;
  border-color: rgba(255,255,255,0.1);
  background: transparent;
//   background: rgba(0, 0, 0, 0.7);

  box-shadow: create-stars($numStars);
  animation: animStar $scrollSpeed linear infinite;
  &:after {
    content: " ";
    top: -$starStartOffset;
    width: $starSize;
    height: $starSize;
    border-radius: 50%;
    position: absolute;
    background: transparent;
    box-shadow: create-stars($numStars);
  }
}
  
@mixin shooting-star-template($numStars, $starSize, $speed) {
  z-index: 10;
  width: $starSize;
  height: $starSize + 80px;
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
  position: absolute;
  bottom: 0;
  right: 0;
  background: linear-gradient(to top, rgba(255,255,255,0), rgba(255,255,255,0.3));
  animation: animShootingStar $speed linear infinite;
}
.stars {
  @include star-template($numStarOneStars, 5px, $starOneScrollDuration);
}
.stars1 {
  @include star-template($numStarTwoStars, 6px, $starTwoScrollDuration);
}
.stars2 {
  @include star-template($numStarThreeStars, 7px, $starThreeScrollDuration);
}
.shooting-stars {
  @include shooting-star-template($numShootingStars, 10px, 10s);
}
    
@keyframes animStar {
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(#{$starFieldHeight}px) translateX(#{$starFieldWidth}px);
  }
}
    

@keyframes animShootingStar {
  from {
    transform: translateY(0px) translateX(0px) rotate(-45deg);
    opacity: 1;
    height: 10px;
  }
  to {
    transform: translateY(-#{$starFieldHeight}px) translateX(-#{$starFieldWidth}px) rotate(-45deg);
    opacity: 1;
    height: 1600px;
  }
}
</style>