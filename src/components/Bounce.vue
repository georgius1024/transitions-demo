<template>
  <div :class="{ active }">
    <slot> </slot>
  </div>
</template>
<script>
export default {
  name: 'Bounce',
  props: {
    value: {
      default: null
    }
  },
  data() {
    return {
      active: false
    }
  },
  watch: {
    value(newValue, oldValue) {
      if (oldValue !== newValue) {
        this.active = true
        setTimeout(() => {
          this.active = false
        }, 500)
      }
    }
  }
}
</script>
<style scoped>
@keyframes bounce {
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(0, -10px, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(0, 10px, 0);
  }
}
.active {
  animation: 1s bounce;
}
</style>
