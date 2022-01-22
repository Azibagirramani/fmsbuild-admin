<template>
  <input
    class="form-check-input"
    type="checkbox"
    checked
    v-model="Ivalue"
    :value="label.toLowerCase()"
  />


</template>

<script>
export default {
  props: {
    value: {
      type: String,
    },
    label: {
      type: String,
      default: "here",
    },
  },
  computed: {
    Ivalue: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      },
    },
  },
};
</script>

<style></style>
