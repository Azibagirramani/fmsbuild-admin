<template>
  <button class="btn" :class="btnEx" :type="type" :disabled="disabled">
    <slot>button</slot>
  </button>
</template>

<script>
export default {
  props: {
    btnEx: {
      type: String,
      default: () => "",
      required: false,
    },
    type: {
      type: String,
      default: () => "button",
      required: false,
    },
    disabled: {
      type: Boolean,
      default: () => false,
      required: false,
    },
  },
};
</script>

<style scoped>
.btn:focus,
.btn.focus {
  box-shadow: none !important;
  outline: none !important;
}

.btn {
    border: 2px solid #cdebe1;
}
</style>
