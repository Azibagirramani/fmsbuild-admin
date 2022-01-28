<template>
  <b-skeleton-wrapper :loading="show">
    <template #loading>
      <b-card>
        <b-skeleton width="85%"></b-skeleton>
        <b-skeleton width="55%"></b-skeleton>
        <b-skeleton width="70%"></b-skeleton>
        <b-skeleton width="20%"></b-skeleton>
      </b-card>
    </template>

    <slot></slot>
  </b-skeleton-wrapper>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style></style>
