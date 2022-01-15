<template>
  <div class="">
    <section class="mt-5 ms-5">
      <div class="d-flex justify-content-end mb-4">
        <BaseButton
          :btnEx="'btn--primary btn--sm'"
          @click="toggleAccountManagement"
        >
          <i class="bi bi-plus"></i>
          <span>Add Account</span>
        </BaseButton>
      </div>
      <div class="row w-100">
        <div class="col-md-10">
          <BaseCard>
            <div class="mb-3">
              <BaseInput :name="'search...'" :type="'text'" />
            </div>

            <BaseTable :items="items" />
            <div class="d-flex justify-content-end">
              <BasePagination />
            </div>
          </BaseCard>
        </div>
        <div class="col-md-2 border p-2 bg-white">
          <div class="mb-3">
            <p class="">Last seen</p>
            <BaseInput :type="'date'" :name="'Last seen'" />
          </div>
          <div class="mb-3">
            <p class="">Created at</p>
            <BaseInput :type="'date'" :name="'Last seen'" />
          </div>
          <div class="">
            <p class="mt-2">Status</p>
            <BaseSelect :tems="['Active', 'Suspended', 'Blocked']" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import BaseTable from "@/components/baseTable.vue";
import BaseCard from "@/components/baseNewCard.vue";
import BaseButton from "@/components/forms/baseButton.vue";
import BaseInput from "@/components/forms/input.vue";
import BaseSelect from "@/components/forms/select.vue";
import BasePagination from "@/components/pagination.vue";
export default {
  components: {
    BaseTable,
    BaseCard,
    BaseButton,
    BaseInput,
    BaseSelect,
    BasePagination,
  },
  data() {
    return {
      items: [
        {
          id: 1,
          a: 0,
          b: 1,
          c: 2,
          d: 3,
          e: 4,
          f: 5,
          g: 6,
          h: 7,
          i: 8,
          j: 9,
          k: 10,
          l: 11,
        },
        {
          id: 2,
          a: 0,
          b: 1,
          c: 2,
          d: 3,
          e: 4,
          f: 5,
          g: 6,
          h: 7,
          i: 8,
          j: 9,
          k: 10,
          l: 11,
        },
        {
          id: 3,
          a: 0,
          b: 1,
          c: 2,
          d: 3,
          e: 4,
          f: 5,
          g: 6,
          h: 7,
          i: 8,
          j: 9,
          k: 10,
          l: 11,
        },
        {
          id: 4,
          a: 0,
          b: 1,
          c: 2,
          d: 3,
          e: 4,
          f: 5,
          g: 6,
          h: 7,
          i: 8,
          j: 9,
          k: 10,
          l: 11,
        },
        {
          id: 5,
          a: 0,
          b: 1,
          c: 2,
          d: 3,
          e: 4,
          f: 5,
          g: 6,
          h: 7,
          i: 8,
          j: 9,
          k: 10,
          l: 11,
        },
        {
          id: 6,
          a: 0,
          b: 1,
          c: 2,
          d: 3,
          e: 4,
          f: 5,
          g: 6,
          h: 7,
          i: 8,
          j: 9,
          k: 10,
          l: 11,
        },
        {
          id: 7,
          a: 0,
          b: 1,
          c: 2,
          d: 3,
          e: 4,
          f: 5,
          g: 6,
          h: 7,
          i: 8,
          j: 9,
          k: 10,
          l: 11,
        },
        {
          id: 8,
          a: 0,
          b: 1,
          c: 2,
          d: 3,
          e: 4,
          f: 5,
          g: 6,
          h: 7,
          i: 8,
          j: 9,
          k: 10,
          l: 11,
        },
        {
          id: 9,
          a: 0,
          b: 1,
          c: 2,
          d: 3,
          e: 4,
          f: 5,
          g: 6,
          h: 7,
          i: 8,
          j: 9,
          k: 10,
          l: 11,
        },
        {
          id: 10,
          a: 0,
          b: 1,
          c: 2,
          d: 3,
          e: 4,
          f: 5,
          g: 6,
          h: 7,
          i: 8,
          j: 9,
          k: 10,
          l: 11,
        },
      ],
    };
  },
  methods: {
    toggleAccountManagement() {
      // this.$router.push("/accountManagement");
      console.log("toggleAccountManagement");
    },
  },
};
</script>

<style></style>
