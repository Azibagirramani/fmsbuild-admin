<template>
  <div
    class="d-flex flex-column flex-shrink-0 bg-light vh-100"
    style="width: 4.5rem"
  >
    <a
      href="/"
      class="d-block p-3 link-dark text-decoration-none"
      title="Icon-only"
      data-bs-toggle="tooltip"
      data-bs-placement="right"
    >
    </a>
    <ul class="nav nav-pills nav-flush flex-column mb-auto text-center">
      <li
        class="nav-items"
        v-for="(link, index) in urls"
        :key="index"
        @click="updateActive(index)"
      >
        <router-link
          :to="link.path"
          class="nav-link py-3 border-bottom"
          v-b-tooltip.hover.right="link.name"
        >
          <i
            class="bi"
            :class="
              index === isActive ? `${link.icon} bi--active` : `${link.icon}`
            "
          ></i>
        </router-link>
      </li>
    </ul>
    <div class="dropdown border-top">
      <a
        href="#"
        class="d-flex align-items-center justify-content-center p-3 link-dark text-decoration-none dropdown-toggle"
        id="dropdownUser3"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <img
          src="https://github.com/mdo.png"
          alt="mdo"
          width="24"
          height="24"
          class="rounded-circle"
        />
      </a>
      <ul
        class="dropdown-menu text-small shadow"
        aria-labelledby="dropdownUser3"
      >
        <li><a class="dropdown-item" href="#">New project...</a></li>
        <li><a class="dropdown-item" href="#">Settings</a></li>
        <li><a class="dropdown-item" href="#">Profile</a></li>
        <li><hr class="dropdown-divider" /></li>
        <li><a class="dropdown-item" href="#">Sign out</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: false,
      urls: [
        {
          name: "Dashboard",
          icon: "bi-speedometer",
          path: "/overview",
        },
        {
          name: "Account management",
          icon: "bi-people",
          path: "/account-management",
        },
        {
          name: "Access Management",
          icon: "bi-key-fill",
          path: "",
        },
        {
          name: "Payment portals",
          icon: "bi bi-cash-stack",
          path: "",
        },
        {
          name: "Stats and usage",
          icon: "bi bi-reception-4",
          path: "",
        },
      ],
    };
  },
  methods: {
    updateActive(index) {
      this.isActive = index;
    },
  },
};
</script>

<style lang="css" scoped>
.bi--active {
  color: green !important;
  vertical-align: -0.125em;
  pointer-events: none;
  fill: currentColor;
}
.bi {
  vertical-align: -0.125em;
  pointer-events: none;
  fill: currentColor;
  color: black !important;
}
.dropdown-toggle {
  outline: 0;
}
.nav-flush .nav-link {
  border-radius: 0;
}
.btn-toggle {
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 0.5rem;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.65);
  background-color: transparent;
  border: 0;
}
.btn-toggle:hover,
.btn-toggle:focus {
  color: rgba(0, 0, 0, 0.85);
  background-color: #d2f4ea;
}
.btn-toggle::before {
  width: 1.25em;
  line-height: 0;
  content: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='rgba%280,0,0,.5%29' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M5 14l6-6-6-6'/%3e%3c/svg%3e");
  transition: transform 0.35s ease;
  transform-origin: 0.5em 50%;
}

.btn-toggle[aria-expanded="true"] {
  color: rgba(0, 0, 0, 0.85);
}
.btn-toggle[aria-expanded="true"]::before {
  transform: rotate(90deg);
}

.btn-toggle-nav a {
  display: inline-flex;
  padding: 0.1875rem 0.5rem;
  margin-top: 0.125rem;
  margin-left: 1.25rem;
  text-decoration: none;
}
.btn-toggle-nav a:hover,
.btn-toggle-nav a:focus {
  background-color: #d2f4ea;
}

.scrollarea {
  overflow-y: auto;
}

.fw-semibold {
  font-weight: 600;
}
.lh-tight {
  line-height: 1.25;
}
</style>
