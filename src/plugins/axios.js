/**
 * base axios library congfiguration
 */

import axios from "axios";

const baseUrl = "https://fusion-erp-prod.herokuapp.com/api/v1/fusion-erp/";

const instance = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
