import { defineStore } from 'pinia';
import axios from 'axios';




export const useAuthStore = defineStore("auth", {
    state: () => ({
        authUser: null,
    }),

    getters: {
        user: (state) => state.authUser,
    },

    actions: {

        async getUser(){
            const user = await axios.get('/api/user');
            this.authUser = user.data;
        }, 
    },

});