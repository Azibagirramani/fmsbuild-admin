import path from "path";

// get current path
const current_path = path.resolve(__dirname, "");

export default {
  getPath: () => {
    console.log(current_path);
  },
};
