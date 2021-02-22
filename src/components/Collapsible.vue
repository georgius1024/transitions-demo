<template>
  <div :style="style">
    <slot> </slot>
  </div>
</template>
<script>
export default {
  name: 'Collapsible',
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

  },
  data() {
    return {
      maxHeight: this.value ? '0' : 'unset',
      overflow:  this.value ? 'hidden' : 'unset'
    }
  },
  mounted() {
    this.transitionHandler = e => this.onTransitionEnd(e)
    document.addEventListener('transitionend', this.transitionHandler)
  },
  beforeUnmount() {
    document.removeEventListener('transitionend', this.transitionHandler)
  },
  computed: {
    style() {
      return {
        transition: `max-height ${this.function} ${this.duration}ms`,
        maxHeight: this.maxHeight,
        overflow: this.overflow
      }
    }
  },
  watch: {
    value(newValue, oldValue) {
      if (oldValue !== newValue) {
        if (this.maxHeight === 'unset') {          this.maxHeight = `${this.$el.scrollHeight}px`
          this.overflow = 'hidden'
        }
        this.$nextTick(() => {
          setTimeout(() => {
            this.maxHeight = newValue ? 0 : `${this.$el.scrollHeight}px`
          }, 0)
        })
      }
    }
  },
  methods: {
    onTransitionEnd(e) {
      if (e.target === this.$el) {
        if (!this.value) {
          this.maxHeight = 'unset'
          this.overflow = 'unset'
        }
      }
    }
  }
}
</script>
