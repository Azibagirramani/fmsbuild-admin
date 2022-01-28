<template>
  <div class="card border-0 bg-transparent">
    <div class="card-body text-center">
      <img src="../assets/empty.svg" width="200" height="300" />
      <h5>
        <strong>{{ description }}</strong>
      </h5>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    description: {
      type: String,
      default: "Nothing found",
    },
  },
};
</script>

<style></style>
