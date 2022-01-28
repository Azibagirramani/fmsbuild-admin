<template>
  <div>
    <section class="mx-5 mt-5">
      <div class="d-flex justify-content-between mb-3">
        <div>
          <h4>Projects {{ projectsList.length || 0 }}</h4>
          <p>Click and view all projects</p>
        </div>
        <button class="btn d-inline text-capitalize">
          <i class="bi bi-plus"></i>new project
        </button>
      </div>
      <div class="my-3 d-flex justify-content-end">
        <BaseInput v-model="search" :name="'Search.....'" />
      </div>
      <section class="my-3">
        <BaseOverlay :show="loading">
          <div class="row row-cols-5 g-4 w-100">
            <div
              class="col"
              v-for="(items, index) in computedPagination"
              :key="index"
            >
              <BaseCard :baseExClass="'h--75 col--content'">
                <div class="text-center mt-4">
                  <h4>{{ items.projectName.slice(0, 1) }}</h4>
                  <p>{{ items.projectName }}</p>
                </div>
              </BaseCard>
            </div>
          </div>
        </BaseOverlay>
        <div class="mt-4">
          <BaseEmpty
            v-if="!loading && computedPagination.length === 0"
            :description="
              search
                ? `No projects found by name ${search}`
                : 'No projects found'
            "
          >
          </BaseEmpty>
        </div>
      </section>
    </section>
    <div class="d-flex justify-content-end gap-4 mx-5 mt-2">
      <BaseSelect :items="[5, 10, 20]" v-model="perPage" />
      <BasePagination
        :totalItems="computedProjects.length"
        :perPage="perPage"
        :currentPage="currentPage"
        @page-changed="onChangePage"
      />
    </div>
  </div>
</template>

<script>
import BaseCard from "@/components/baseNewCard.vue";
import BasePagination from "@/components/pagination.vue";
import BaseInput from "@/components/forms/input.vue";
import BaseOverlay from "@/components/overlay.vue";
import BaseSelect from "@/components/forms/select.vue";
import Projects from "@/services/projects.js";
import BaseEmpty from "@/components/empty.vue";
export default {
  components: {
    BaseCard,
    BasePagination,
    BaseInput,
    BaseOverlay,
    BaseSelect,
    BaseEmpty,
  },
  data() {
    return {
      projectsList: [],
      search: "",
      perPage: 10,
      currentPage: 1,
      loading: false,
    };
  },
  methods: {
    onChangePage(page) {
      this.currentPage = page;
    },
  },
  computed: {
    /**
     * @description: get all projects
     * @return: array
     * also search projects by name
     */
    computedProjects() {
      return this.projectsList.filter((item) => {
        return item.projectName
          .toLowerCase()
          .includes(this.search.toLowerCase());
      });
    },

    /**
     * pagination projects
     */
    computedPagination() {
      return this.computedProjects.slice(
        (this.currentPage - 1) * this.perPage,
        this.currentPage * this.perPage
      );
    },
  },
  async mounted() {
    this.loading = true;
    try {
      const data = await Projects.getProject();
      this.projectsList = data.data;
    } catch (error) {
      console.log(error);
    } finally {
      this.loading = false;
    }
    // console.log(data);
  },

  watch: {
    /**
     * @description: help move to the first page
     * because array head moved and will be unable to find
     * items that are behind.
     */
    search() {
      this.currentPage = 1;
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
