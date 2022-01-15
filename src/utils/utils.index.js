import Vue from "vue";

import Trace from "./trace";

const trace = new Trace();
Vue.prototype.$Trace = trace;
