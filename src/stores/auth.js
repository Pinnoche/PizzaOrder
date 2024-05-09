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
        // get router() {
        //     return this.$router;
        // },

        async getUser(){
            const user = await axios.get('/api/user');
            this.authUser = user.data;
        },

        // async logOut(){
        //     await axios.post('/logout' 
        //     );
        //     this.authUser = null;
        //     window.location.reload();
        // },     
    },

});