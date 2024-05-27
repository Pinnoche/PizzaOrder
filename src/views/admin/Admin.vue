<template>
    <div class="grid grid-cols-3 gap-2 py-12">
        
        <div class="col-span-1 bg-gray-400 rounded-b-lg rounded-e-lg overflow-auto text-white text-xl">
            <div class="bg-gray-800 text-white py-3 px-6 rounded-e-lg">
                <h2 class="text-2xl font-semibold">Utilties</h2>
            </div>
            <div v-show="userCommand" class="absolute left-[33rem] bg-gray-400 text-white">
                <h2 class="p-3 border-b-gray-500 border-b-2 hover:bg-gray-700 flex justify-center items-center">Users List</h2>
                <h2 class="p-3 border-b-gray-500 border-b-2 hover:bg-gray-700 flex justify-center items-center">Register New User</h2>
                <h2 class="p-3 hover:bg-gray-700 flex justify-center items-center">Rovoke User Access</h2>
            </div>
            <div @click="showUserCommand" class="p-3 border-b-gray-500 border-b-2 hover:bg-gray-700 flex justify-center items-center cursor-default">
                <p>User commands</p>
            </div>
          
            
            <div class="p-3 border-b-gray-500 border-b-2 hover:bg-gray-700 flex justify-center items-center">Staffs Command</div>
            <div class="p-3 border-b-gray-500 border-b-2 hover:bg-gray-700 flex justify-center items-center">Check Users</div>
            <div class="p-3 border-b-gray-500 border-b-2 hover:bg-gray-700 flex justify-center items-center">Check Users</div>
            <div class="p-3 hover:bg-gray-700 flex justify-center items-center">Check Users</div>

        </div>
        <h1 class="col-span-2 w-full">Welcome To The Admin Page and Activities</h1>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useAuthStore } from '@/stores/auth';
// import { useRouter } from 'vue-router';

const authStore = useAuthStore();
// const router = useRouter();


const userCommand = ref(false);


const showUserCommand = () => {
    userCommand.value = !userCommand.value;
};

const getUserList = async () => {
    await axios.get('')
};


onMounted( async () => {
    await authStore.getAdmin();
});
</script>