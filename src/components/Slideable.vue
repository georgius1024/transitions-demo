<template>
  <div :style="style">
    <slot> </slot>
  </div>
</template>
<script>
export default {
  name: 'Slideable',
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
    },
    direction: {
      type: String,
      validator(value) {
        return ['left', 'right', 'bottom', 'top'].includes(value)
      },
      default: 'right'
    },
    delta: {
      type: String,
      default: '200px'
    }
  },
  computed: {
    transformDirection() {
      switch(this.direction) {
        case 'left': 
        case 'right': return 'translateX'
        case 'top': 
        case 'bottom': return 'translateY'
      }
    },
    transformSign() {
      switch(this.direction) {
        case 'left': 
        case 'top': return '-'
        case 'right':
        case 'bottom': return '+'
      }
    },
    transform() {
      if (this.value) {
        return `${this.transformDirection}(${this.transformSign}${this.delta})`
      }
      return `${this.transformDirection}(0)`
    },
    style() {
      return {
        transition: `transform ${this.function} ${this.duration}ms`,
        transform: this.transform,
      }
    }
  }
}
</script>
