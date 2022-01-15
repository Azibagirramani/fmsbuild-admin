<template>
  <div class="d-flex justify-content-center align-items-center vh-100 bg-clip">
    <BaseOverlay :show="loader">
      <BaseCard :baseExClass="'form-signin border-0 shadow'">
        <form @submit.prevent="Submit(form)">
          <h3 class="h3 mb-3 fw-normal text-center">FMS Admin portal</h3>

          <div class="mb-3">
            <BaseInput
              v-model="form.email"
              :placeholder="'Email'"
              :type="'email'"
              :required="true"
            />
          </div>
          <div class="mb-3">
            <BaseInput
              v-model="form.password"
              :type="'password'"
              :placeholder="'Password'"
              :required="true"
            />
          </div>

          <BaseButton :btnEx="'w-100'" :type="'submit'"> Login </BaseButton>
        </form>
      </BaseCard>
    </BaseOverlay>
  </div>
</template>

<script>
import BaseCard from "@/components/baseNewCard.vue";
import BaseInput from "@/components/forms/input.vue";
import BaseButton from "@/components/forms/baseButton.vue";
import BaseOverlay from "@/components/overlay.vue";
export default {
  components: {
    BaseInput,
    BaseButton,
    BaseOverlay,
    BaseCard,
  },

  data() {
    return {
      form: {},
      loader: false,
      from: null,
    };
  },
  methods: {
    Submit(form) {
      let data = form;
      data["type"] = "password";
      try {
        this.loader = true;
        this.$store.dispatch("auth/login", data).then((res) => {
          this.loader = false;
          if (res.status == "success") {
            this.$router.push("/overview");
          }
        });
      } catch (e) {
        console.log(e);
      } finally {
        this.loader = false;
      }
    },
  },
  computed: {
    user() {
      return this.$store.getters["auth/user"];
    },
  },
  mounted() {
    this.$router.push({
      query: {
        session: this.$Trace.generateSessionId(),
        platform: this.$Trace.getPlatform(),
        trace: this.from.fullPath,
      },
    });
    this.$Trace.getLocationService();
  },

  // get previou link
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.from = from;
    });
  },
};
</script>

<style scoped>
.bg-clip {
  background-color: #dbe0d8 !important;

  z-index: -1;
}

.form-signin {
  z-index: 1 !important;
  width: 24rem !important;
  padding: 15px;
  margin: auto;
}

.form-signin .checkbox {
  font-weight: 400;
}

.form-signin .form-floating:focus-within {
  z-index: 2;
}

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>
