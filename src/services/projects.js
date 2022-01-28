import instance from "../plugins/axios";

export default {
  async getProject() {
    const data = await instance.get("projects/getAllProjects");
    return data
  },
};
