<template>
  <div class="mt-4">
    <section class="mx-5">
      <div class="d-flex justify-content-between align-items-center">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">Home</li>
            <li class="breadcrumb-item">Library</li>
          </ol>
        </nav>

        <p>View all</p>
      </div>
      <BaseTable />
    </section>
  </div>
</template>

<script>
import BaseTable from "@/components/baseTable.vue";
export default {
  components: {
    BaseTable,
  },
  data() {
    return {};
  },
  methods: {
    toggleAccountManagement() {
      // this.$router.push("/accountManagement");
      console.log("toggleAccountManagement");
    },
  },
};
</script>

<style scoped lang="scss">
.breadcrumb {
  background-color: transparent;

  .breadcrumb-item {
    color: red !important;
    cursor: pointer !important;
  }

  &__active {
    color: green;
  }
}
</style>
