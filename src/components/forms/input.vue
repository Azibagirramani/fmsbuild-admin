<template>
  <div class="" :class="placeholder === '' ? '' : 'form-floating'">
    <input
      :type="type"
      v-model="ivalue"
      class="form-control rounded"
      :id="placeholder"
      :placeholder="name"
      :required="required"
    />
    <label for="floatingInput " v-if="placeholder">{{ placeholder }}</label>
  </div>
</template>

<script>
export default {
  props: {
    name:{
      type: String,
      required: false,
    },
    placeholder: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "text",
    },
    value: {
      type: String,
      required: false,
      default: "",
    },
    required: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    ivalue: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit("input", val);
      },
    },
  },
};
</script>

<style></style>
