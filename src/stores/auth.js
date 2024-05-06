import { defineStore } from 'pinia';
import axios from 'axios';
import Cookies from 'universal-cookie';

const cookies = new Cookies();


export const useAuthStore = defineStore("auth", {
    state: () => ({
        authUser: null,
        csrfToken: cookies.get('XSRF-TOKEN') || null,
        form: {
            username: '',
            email: '',
            password: '',
            c_password: ''
        },
        data: {
            email: '',
            password: ''
        },
    }),

    getters: {
        user: (state) => state.authUser,
    },

    actions: {
        get router() {
            return this.$router;
        },

        async getUser(){
            const user = await axios.get('/api/user');
            this.authUser = user.data;
        },

        async logOut(){
            // console.log(this.csrfToken);
            await axios.post('/logout' 
            );
            this.authUser = null;
            window.location.reload();
        },
        async signUp() {
            try {
                
              await axios.post('/register', this.form, {
                headers:{
                    'X-XSRF-TOKEN' : this.csrfToken
                }
               });
              
                console.log('Reg submitted successfully');
               alert('Regitration Succesfull');
               this.router.push('/login');
               
            } catch (error) {
                alert('There is a problem with your submition');
                console.log(error);                
            };
            
        
        },

        async login() {
            try {
                // console.log(this.csrfToken);
                // console.log(this.data);
                
                 await axios.post('/login', this.data, {
                    headers: {
                        'X-XSRF-TOKEN': this.csrfToken
                    }
                });

                this.getUser();
                
            
                // authStore.authUser = response.data;

                // console.log(authStore.authUser);
                
                // Alert and navigate only after successfully updating authUser
                alert('Login Successful');
                this.router.push('/');
            } catch (error) {
                if (error.response) {
                    // Server responded with an error status code
                    console.error('Server Error:', error.response.data);
                    alert('Incorrect Username or Password');
                } else if (error.request) {
                    // The request was made but no response was received
                    console.error('Network Error:', error.request);
                    alert('Network Error: Please check your internet connection');
                } else {
                    // Something else happened while setting up the request
                    console.error('Request Error:', error.message);
                    alert('An unexpected error occurred. Please try again later.');
                }
            }
        }
    },

});