<template>
  <div>
    <b-table
      :bordered="bordered"
      :borderless="borderless"
      :outlined="outlined"
      :small="small"
      :hover="hover"
      :fields="fields"
      :items="items"
      responsive="sm"
      :current-page="currentPage"
      :per-page="perPage"
      :busy="loading"
      :foot-clone="footClone"
      :sticky-header="true"
      caption-top
      show-empty
    >
      <template #cell(actions)="data">
        <div class="d-flex justify-content-center align-items-center">
          <md-button
            class="md-icon-button md-primary"
            v-if="data.item.status == 'Active'"
          >
            <md-icon>sync</md-icon>
          </md-button>
          <md-button
            class="md-icon-button md-primary"
            @click="onRowSelected(data.item)"
          >
            <md-icon>view_day</md-icon>
          </md-button>
        </div>
      </template>

      <!-- remove action header -->
      <template #head(actions)>
        <span></span>
      </template>

      <template #table-caption>{{ tableCaption }}</template>
      <template #empty>
        <BaseState
          :description="''"
          :label="'No data'"
          :icons="'hourglass_disabled'"
        />
      </template>
      <template #table-busy>
        <div class="text-center text-danger my-2">
          <b-spinner class="align-middle"></b-spinner>
          <strong>Loading...</strong>
        </div>
      </template>
    </b-table>
  </div>
</template>

<script>
export default {

  data() {
    return {};
  },
  props: {
    tableCaption: {
      type: String,
      default: "",
      required: false,
    },
    footClone: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    items: {
      type: Array,
      required: false,
      default: () => [],
    },
    fields: {
      type: Array,
      required: false,
      default: () => [],
    },
    bordered: {
      type: Boolean,
      required: false,
      default: false,
    },
    borderless: {
      type: Boolean,
      required: false,
      default: true,
    },
    outlined: {
      type: Boolean,
      required: false,
      default: false,
    },
    small: {
      type: Boolean,
      required: false,
      default: false,
    },
    hover: {
      type: Boolean,
      required: false,
      default: false,
    },
    currentPage: {
      type: Number,
      required: false,
      default: 1,
    },
    perPage: {
      type: Number,
      required: false,
      default: 10,
    },
  },
  methods: {
    onRowSelected(item) {
      this.$emit("row-selected", item);
    },
  },
};
</script>