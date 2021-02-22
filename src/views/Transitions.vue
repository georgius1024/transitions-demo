<template>
  <div class="transitions">
    <div class="cell" @click="collapse = !collapse">
      <header>Collapse</header>
      <collapsible :value="collapse" :duration="duration" :function="timingFunction" class="centered">
        <div class="box" />
      </collapsible>
    </div>
    <div class="cell" @click="slideLeft = !slideLeft">
      <header >Slide left</header>
      <slideable :value="slideLeft" direction="left" delta="300px" :duration="duration" :function="timingFunction" class="centered">
        <div class="box" />
      </slideable>
    </div>
    <div class="cell" @click="slideRight = !slideRight">
      <header >Slide right</header>
      <slideable :value="slideRight" direction="right" delta="300px" :duration="duration" :function="timingFunction" class="centered">
        <div class="box" />
      </slideable>
    </div>
    <div class="cell" @click="slideTop = !slideTop" >
      <header>Slide top</header>
      <slideable :value="slideTop" direction="top" delta="300px" :duration="duration" :function="timingFunction" class="centered">
        <div class="box" />
      </slideable>
    </div>
    <div class="cell" @click="slideBottom = !slideBottom" >
      <header>Slide bottom</header>
      <slideable :value="slideBottom" direction="bottom" delta="300px" :duration="duration" :function="timingFunction" class="centered">
        <div class="box" />
      </slideable>
    </div>
    <div class="cell" @click="fade = !fade" >
      <header>Fade</header>
      <fadeable :value="fade" :duration="duration" :function="timingFunction" class="centered">
        <div class="box" />
      </fadeable>
    </div>
    <div class="cell" @click="reject = !reject" >
      <header>Reject</header>
      <Reject :value="reject" class="centered">
        <div class="box" />
      </Reject>
    </div>
    <div class="cell" @click="bounce = !bounce" >
      <header>Bounce</header>
      <Bounce :value="bounce" class="centered">
        <div class="box" />
      </Bounce>
    </div>

  </div>
</template>
<script>
import Slideable from '../components/Slideable.vue'
import Collapsible from '../components/Collapsible.vue'
import Fadeable from '../components/Fadeable.vue'
import Reject from '../components/Reject.vue'
import Bounce from '../components/Bounce.vue'
export default {
  components: {
    Slideable,
    Collapsible,
    Fadeable,
    Reject,
    Bounce
  },
  data() {
    return {
      collapse: false,
      slideLeft: false,
      slideRight: false,
      slideTop: false,
      slideBottom: false,
      fade: false,
      reject: false,
      bounce: false,
      duration: 1000,
      timingFunction: 'ease-in-out'
    }
  }
}
</script>
<style lang="css">
.transitions {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  font-size: 16px;
}
.cell {
  margin: 16px;
  min-width: 300px;
  width: 300px;
  height: 300px;
  border: 1px solid #ccc;
  box-shadow: 4px 4px 8px #ccc;
  text-align: center;
  border-radius: 6px;
  position: relative;
  overflow: hidden;
}
.cell header {
  position: absolute;
  background-color: #000;
  right: 0;
  left: 0;
  color: #fff;
  padding: 6px;
  display: block;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  z-index: 1;
}
.cell .centered {
  position: absolute;
  top: 50px;
  left: 50px;
  width: 200px;
  height: 200px;
}
.cell .box {
  width: 200px;
  height: 200px;
  border: 1px solid red;
  background-color: red;
  box-shadow: 4px 4px 8px #ccc;
  border-radius: 25px;
  z-index: 0;
}
</style>
