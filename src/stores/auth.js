import { defineStore } from "pinia";
import axios from "axios";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    authUser: null,
    authStaff: null,
    authAdmin: null,
  }),

  getters: {
    user: (state) => state.authUser,
    staff: (state) => state.authStaff,
    admin: (state) => state.authAdmin,
  },

  actions: {
    async getUser() {
      try {
        const user = await axios.get("/api/user");
        this.authUser = user.data;
      } catch (error) {
        console.log(error);
        this.authUser = null;
      }
    },

    async getStaff() {
      try {
        const staff = await axios.get("/api/staff");
        this.authStaff = staff.data;
      } catch (error) {
        console.log(error);
        this.authStaff = null;
      }
    },

    async getAdmin() {
      try {
        const admin = await axios.get("/api/admin");
        this.authAdmin = admin.data;
      } catch (error) {
        console.log(error);
        this.authAdmin = null;
      }
    },
  },
});
