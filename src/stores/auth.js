import { defineStore } from 'pinia';
import axios from 'axios';
import Cookies from 'universal-cookie';

const cookies = new Cookies();


export const useAuthStore = defineStore("auth", {
    state: () => ({
        authUser: null,
        csrfToken: cookies.get('XSRF-TOKEN') || null
    }),

    getters: {
        user: (state) => state.authUser,
    },

    actions: {
        async getUser(){
            const user = await axios.get('/api/user');
            this.authUser = user.data;
        },

        async logOut(){
            console.log(this.csrfToken);
            await axios.post('/logout' 
            );
            this.authUser = null;
        }
    },

});