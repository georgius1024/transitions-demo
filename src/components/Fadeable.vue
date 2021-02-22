<template>
  <div :style="style">
    <slot> </slot>
  </div>
</template>
<script>
export default {
  name: 'Fadeable',
  props: {
    value: {
      type: Boolean,
      default: true
    },
    duration: {
      type: Number,
      default: 200
    },
    function: {
      type: String,
      validator(value) {
        return ['ease', 'ease-in', 'ease-out', 'ease-in-out', 'linear'].includes(value)
      },
      default: 'linear'
    }
  },
  computed: {
    style() {
      return {
        transition: `opacity ${this.function} ${this.duration}ms`,
        opacity: this.value ? 0 : 1
      }
    }
  }
}
</script>
