<template>
  <div class="mt-5 mx-5">
    <BaseCard :baseEx="''" :header="true">
      <template #header>
        <div class="d-flex justify-content-between align-items-center p-0 m-0">
          <p>Access Management</p>
          <p>Back to global list</p>
        </div>
      </template>
      <div class="row w-100">
        <div class="col-md-4">
          <div class="d-flex flex-column gap-2">
            <div
              class="d-flex flex-column"
              v-for="(permission, index) in permission"
              :key="index"
              @click="togglePermission(permission)"
            >
              <div
                class="permission-list px-3 d-flex border align-items-center justify-content-between"
              >
                <p class="mt-3">{{ permission }}</p>
                <input type="checkbox"/>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div :class="selectedPermission ? '' : 'empty'">
            <h5 class="text-dark">Please select permission</h5>
          </div>
        </div>
         <div class="col-md-4">
          <div :class="selectedPermission ? '' : 'empty'">
            <h5 class="text-dark">Please select permission</h5>
          </div>
        </div>
      </div>
    </BaseCard>
  </div>
</template>

<script>
import { getConfiguration } from "@/modules/globalConfig.js";
import BaseCard from "@/components/baseNewCard.vue";
export default {
  components: {
    BaseCard,
  },
  data() {
    return {
      permission: ["funds", "projects", "finance", "settings"],
      selectedPermission: null,
    };
  },
  methods: {
    async getSystemConfig() {
      const scope = await getConfiguration();
      const permission = scope.data();
      this.permission = permission.rules;
    },

    togglePermission(permission) {
      console.log(permission);
    },
  },
  mounted() {
    // this.getSystemConfig();
  },
};
</script>

<style scoped lang="scss">
$baseColor: #cdebe1;
.permission-list:hover {
  background-color: #f5f5f5;
  cursor: pointer;
}

.persmission--active {
  background-color: $baseColor;
}

.empty {
  background-color: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
}
</style>
