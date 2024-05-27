import { defineStore } from 'pinia';
import axios from 'axios';




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

        async getUser(){
            const user = await axios.get('/api/user');
            this.authUser = user.data;
        }, 

        async getStaff(){
            const staff = await axios.get('/api/staff');
            this.authStaff = staff.data;
        }, 

        async getAdmin(){
            try {
                const admin = await axios.get('/api/admin');
                this.authAdmin = admin.data;
            } catch (error) {
                console.log(error);
                if(error.response.status && error.response.config.url === '/api/admin'){  
                    this.router.push('/admin/login');
                }
            }
        }, 
        
    },

});