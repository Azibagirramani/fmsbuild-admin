<template>
  <div>
    <section class="mx-5 mt-5">
      <div class="d-flex justify-content-between mb-3">
        <div>
          <h4>Projects 100K</h4>
          <p>Click and view all projects</p>
        </div>
        <button class="btn d-inline text-capitalize">
          <i class="bi bi-plus"></i>new project
        </button>
      </div>
      <div class="my-3">
        <BaseInput />
      </div>
      <section>
        <div class="row row-cols-5 g-4 w-100">
          <div
            class="col"
            v-for="(items, index) in [1, 2, 3, 5, 6, 4]"
            :key="index"
          >
            <BaseCard :baseExClass="'h--75 col--content'">
              <div class="text-center mt-4">
                <h4>A</h4>
                <p>Lerom lrn tnbf</p>
              </div>
            </BaseCard>
          </div>
        </div>
      </section>
    </section>
    <div class="d-flex justify-content-end mx-5 mt-2">
      <BasePagination />
    </div>
  </div>
</template>

<script>
import BaseCard from "@/components/baseNewCard.vue";
import BasePagination from "@/components/pagination.vue";
import BaseInput from "@/components/forms/input.vue";
export default {
  components: {
    BaseCard,
    BasePagination,
    BaseInput,
  },
  computed: {
    randomColors() {
      return Math.floor(Math.random() * 16777215).toString(16);
    },
  },
};
</script>

<style scoped lang="scss">
$baseColor: #cdebe3;

.h--75 {
  height: 10rem;
}
.col--content {
  transition: 0.5s ease-in-out;
}
.col--content:hover {
  background-color: $baseColor !important;
  cursor: pointer;
}
</style>
