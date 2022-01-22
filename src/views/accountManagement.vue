<template>
  <div class="">
    <section class="ms-5">
      <div class="d-flex justif-content-between align-items-center">
        <b-breadcrumb :items="crums"></b-breadcrumb>
      </div>
      <BaseTable :items="items" />
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
    return {
      crums: [
        {
          text: "Projects",
        },
        {
          text: "Recent",
          active: true,
        },
      ],
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
