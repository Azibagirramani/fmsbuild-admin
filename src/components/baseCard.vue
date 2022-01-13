<template>
  <div class="card" :class="baseEx">
    <div class="card-body m-0 pt-3 pb-0"><slot>Cards</slot></div>
    <div class="card-footer bg-transparent m-0 py-0" v-if="footer">
      <slot name="footer">Base footer</slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    baseEx: {
      type: String,
      default: () => "",
    },
    footer: {
      type: Boolean,
      default: () => false,
    },
  },
};
</script>

<style scoped>
.card {
  cursor: pointer;
}
.card--hover {
  transition: 0.4s ease-in-out;
}

.card--project {
  background-color: #fff8dd;
}

.card--hover:hover {
  background-color: #e3f8f1;
}
</style>
