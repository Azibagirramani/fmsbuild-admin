<template>
  <div class="">
    <div class="d-flex">
      <SideBar />
      <div class="col bg-overview">
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
