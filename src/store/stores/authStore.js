export default {
  namespaced: true,
  state: {
    user: null,
    token: null,
    isAuthenticated: false,
    isLoading: false,
    error: null,
    passwordAttempts: 0,
  },

  getters: {
    user(state) {
      return state.user;
    },
  },

  mutations: {
    setUser(state, user) {
      state.user = user;
    },

    setToken(state, token) {
      state.token = token;
    },

    setIsAuthenticated(state, isAuthenticated) {
      state.isAuthenticated = isAuthenticated;
    },
  },

  actions: {
    login({ commit, dispatch }, credentials) {
      console.log(commit, dispatch, credentials);
    },
  },
};
