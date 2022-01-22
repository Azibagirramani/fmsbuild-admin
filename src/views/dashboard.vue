<template>
  <div class="">
    <div class="d-flex">
      <SideBar />

      <div class="bg-overview flex-fill">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from "@/components/sideBar.vue";
export default {
  components: {
    SideBar,
  },
};
</script>
<style scoped>
.bg-overview {
  background-color: #fcfeff !important;
}
</style>
