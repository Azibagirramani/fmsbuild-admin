<template>
  <select class="form-select form-select-sm" v-model="Ivalue">
    <option selected>select</option>
    <option
      class="text-capitalize"
      v-for="(item, index) in items"
      :key="index"
      :value="item"
    >
      {{ item }}
    </option>
  </select>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: "",
    },
    label: {
      type: String,
      required: false,
      default: "",
    },
    placeholder: {
      type: String,
      required: false,
    },
    items: {
      type: Array,
      required: false,
      default() {
        return ["select", "select2"];
      },
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

<style lang="scss" scoped>
.form-select {
  max-width: 5rem !important;
  height: 38px !important;
}
</style>
