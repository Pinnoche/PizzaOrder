<template>
    <div class="mt-4 shadow-sm w-50 rounded-4 m-auto">
        <div class=" bg-secondary-subtle w-100 rounded-top align-items-center px-4  ">
            <p>Login</p>
        </div>
        <div class="mb-3 w-100 justify-content-between align-items-center ms-3">
            <label for="text" class="me-2">Username:</label>
            <input v-model="data.username" type="text" class="w-50" required>
        </div>

        <div class="mb-3 w-100 justify-content-between align-items-center ms-3">
            <label for="Pass" class="me-2">Password:</label>
            <input v-model="data.password"  type="text" class="w-50 ms-5" required>
        </div>

        <!-- <div>
            <input type="checkbox" id="mycheckbox" name="checkbox" class="ms-3 mb-3">
            <label for="checkbox" class=" text-primary ms-4">Remember Me</label>
        </div> -->

        <button type="button" class="bg-primary ms-3 rounded-2 border-0 shadow-sm mb-3 d-inline me-4" @click="checkLogin">Login</button>
        <!-- <a href="/pass" class="text-primary text-decoration-none ">Forgot Your Password?</a> -->

        
       
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'Login',
    data(){
        return { 
                data: {
                    username: '',
                    password: ''
                }

            }
    },

    methods: {
        async checkLogin(){
            try {
               let login = await axios.post('http://pizza_api.test/api/login', this.data);
               if(login.status === 200){
                console.log('Login successfully');
                alert('Login Succesfull');
                this.$router.push({name: 'pizzas'});
               }
                
            } catch (error) {
                console.log(error);
                alert('Incorrect Username or password');
            }
        }
    }
}
</script>