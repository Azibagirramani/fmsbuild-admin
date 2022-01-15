<template>
  <div class="card flex-fil w-100" :class="baseExClass" @click="nextRoute">
    <div class="card-header bg-transparent" :class="exHeader" v-if="header">
      <slot name="header"></slot>
    </div>
    <div class="card-body" :class="exClass">
      <slot></slot>
    </div>

    <div class="card-footer" :class="exFooter" v-if="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      required: false
    },
    footer: {
      type: Boolean,
      default: false,
    },
    exFooter: {
      type: String,
      default: "bg-transparent",
    },
    actions: {
      type: Boolean,
      default: false,
      required: false,
    },
    withHover: {
      type: Boolean,
      default: false,
      required: false,
    },
    header: {
      type: Boolean,
      default: false,
    },
    exClass: {
      type: String,
      default: "",
      required: false,
    },
    baseExClass: {
      type: String,
      default: "",
      required: false,
    },
    exHeader: {
      type: String,
      default: "",
      required: false,
    },
  },
  methods: {
    nextRoute() {
      this.$router.push(this.to);
    },
  },
};
</script>