<template>
  <div :class="{ active }">
    <slot> </slot>
  </div>
</template>
<script>
export default {
  name: 'Reject',
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
@keyframes reject {
  0% {
    transform: translateX(0);
  }

  6.5% {
    transform: translateX(-6px) rotateY(-9deg);
  }

  18.5% {
    transform: translateX(5px) rotateY(7deg);
  }

  31.5% {
    transform: translateX(-3px) rotateY(-5deg);
  }

  43.5% {
    transform: translateX(2px) rotateY(3deg);
  }

  50% {
    transform: translateX(0);
  }
}
.active {
  animation: 1s ease-in-out reject;
}
</style>
