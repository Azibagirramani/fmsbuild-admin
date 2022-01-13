<template>
  <div class="">
    <div class="row vh-100 ml-4">
      <div class="col-md-10">
        <div class="mt-5">
          <h5 class="fw-bold">Welcome back, Kelvin Mansi</h5>
          <p class="text-muted">You have 6 notifications and 2 new messages</p>
        </div>

        <div class="mt-5">
          <div class="row">
            <div class="col">
              <h5>Demo requests</h5>
              <div class="d-flex flex-column gap-4">
                <BaseCard
                  v-for="(request, index) in computedDemo"
                  :key="index"
                  :baseEx="'card--hover'"
                >
                  <p class="mb-2 fw-bold">webkit-safari chrome</p>
                  <p class="fw-bold email-color">kelvinmansi@gmail.com</p>
                  <div class="d-flex gap-2 align-items-center my-0">
                    <p class="fw-bold">track id</p>
                  </div>
                  <p class="fs--1"><i class="bi bi-alarm"></i> 4 hours ago</p>
                </BaseCard>

                <div class="" v-if="requests.length > 2">
                  <BaseButton :btnEx="'w-100'"> view all </BaseButton>
                </div>
              </div>
            </div>
            <div class="col">
              <h5>Recent Payments</h5>
              <div class="d-flex flex-column gap-4">
                <BaseCard
                  v-for="(request, index) in computedDemo"
                  :key="index"
                  :footer="true"
                >
                  <p class="mb-2 fw-bold">gray inc, sent a payment</p>
                  <p class="fs--1 mb-2">
                    <i class="bi bi-alarm"></i> 4 hours ago
                  </p>

                  <p class="fs-4 text-dark bg-amount fw-light d-inline mb-5">
                    $50,000
                  </p>

                  <template #footer>
                    <div class="d-flex gap-3 align-items-center">
                      <i class="bi bi-people-fill fs-2"></i>
                      <p class="fw-light mt-3 f--01">
                        Some comments by organisation
                      </p>
                    </div>
                  </template>
                </BaseCard>

                <div class="" v-if="requests.length > 2">
                  <BaseButton :btnEx="'w-100'"> view all </BaseButton>
                </div>
              </div>
            </div>
            <div class="col">
              <h5>Top Projects</h5>
              <div class="d-flex flex-column gap-4">
                <BaseCard
                  v-for="(request, index) in computedDemo"
                  :key="index"
                  :baseEx="index === 0 ? 'card--project' : ''"
                >
                  <div class="d-flex gap-3">
                    <i class="bi bi-patch-check fs-1"></i>
                    <div class="d-flex flex-column">
                      <p class="mb-1 fw-bold">Name of project</p>
                      <p>display project owner</p>
                    </div>
                  </div>
                </BaseCard>

                <div class="" v-if="requests.length > 2">
                  <BaseButton :btnEx="'w-100'"> view all </BaseButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-2">
        <div class="d-flex flex-column justify-content-center">
          <div class="p-4 flex-fill ticket-todo">
            <h4>Tickets</h4>
            <ul class="tickets">
              <li class="f--6" v-for="(todo, index) in todos" :key="index">
                {{ todo }} ?????
              </li>
            </ul>
          </div>
          <div class="text-center flex-fill p-4 border">
            <h2>4</h2>
            <p>Accounts</p>
            <p>view all accounts</p>
          </div>
          <div class="text-center flex-fill p-4 border">
            <p class="fw-bold">Your last logs</p>
            <h2>10k</h2>
            <p>visits</p>
            <h2>10k</h2>
            <p>Comments</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseCard from "@/components/baseCard.vue";
import BaseButton from "@/components/forms/baseButton.vue";
export default {
  components: {
    BaseCard,
    BaseButton,
  },

  data() {
    return {
      requests: [1, 2, 3, 4],
      todos: [
        "Slow loading time",
        "update login form",
        "Remove user from db",
        "don't logout before 10",
      ],
    };
  },

  computed: {
    computedDemo() {
      let final;
      // only show two demo request on template
      if (this.requests.length > 2) {
        final = this.requests.slice(0, 2);
      } else {
        final = this.requests;
      }
      return final;
    },
  },
};
</script>

<style scoped lang="scss">
$baseColor: #cdebe1;

.f--6 {
  font-size: 0.82rem;
}

.f--01 {
  font-size: 0.9rem;
}

.email-color {
  color: $baseColor;
}

.bg-amount {
  background-color: $baseColor;
}

.tickets {
  padding: 0rem;
}

.tickets li {
  list-style-type: none;
}

.ticket-todo {
  background-color: #fff6b0;
}

.sticky {
}
</style>
