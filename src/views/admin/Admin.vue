<template>
    <div class="grid grid-cols-3 gap-2 py-12">
        
        <div class="relative col-span-1 bg-gray-400 rounded-b-lg rounded-e-lg text-white text-xl overflow-hidden">
            <div class="bg-gray-800 text-white py-3 px-6 text-center ">
                <h2 class="text-2xl font-semibold">Utilties</h2>
            </div>
            
            <div @mouseenter="showUserCommandOn" @mouseleave="showUserCommandOff" class="p-3 border-b-gray-500 border-b-2 hover:bg-gray-700 flex justify-center items-center cursor-default">
                <p>User commands</p>
            </div>
            <div v-show="userCommand" class="absolute top-14 left-[33rem] bg-gray-400 text-white ">
                <div @click="getUserList(); toggleShowStaff()" class="p-3 border-b-gray-500 border-b-2 hover:bg-gray-700 flex justify-center items-center cursor-default">Users List</div>
                <div @click="regNewUser()" class="p-3 hover:bg-gray-700 flex justify-center items-center cursor-default">Register New User</div>
                <!-- <h2 class="p-3 hover:bg-gray-700 flex justify-center items-center">Rovoke User Access</h2> -->
            </div>
            
            <div class="p-3 border-b-gray-500 border-b-2 hover:bg-gray-700 flex justify-center items-center">Staffs Command</div>
            <div class="p-3 border-b-gray-500 border-b-2 hover:bg-gray-700 flex justify-center items-center">Check Users</div>
            <div class="p-3 border-b-gray-500 border-b-2 hover:bg-gray-700 flex justify-center items-center">Check Users</div>
            <div class="p-3 hover:bg-gray-700 flex justify-center items-center">Check Users</div>

        </div>
        <h1 class="col-span-2 w-full">Welcome To The Admin Page and Activities</h1>
    </div>

    <div v-show="showStaff" class="relative p-2 bg-gray-400 max-w-md">
        <h3 class="text-gray-800 font-semibold text-center mb-4">List of Staffs</h3>
        <p @click="toggleShowStaff()" class="absolute p-1 top-1 right-2 text-red-600 hover:bg-red-800 cursor-default">X</p>
       <div v-for="(staff, index) in staffs" :key="index" class="bg-gray-500 rounded-lg mb-4">
            <p class="hover:bg-gray-800"><span>Username: </span>{{ staff.username }}</p>
            <p class="hover:bg-gray-800"><span>Email: </span>{{ staff.email }}</p>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import axios from 'axios';
import { useAuthStore } from '@/stores/auth';
import { useRouter } from 'vue-router';

const authStore = useAuthStore();
const router = useRouter();

const staffs = ref([]);
const userCommand = ref(false);
const showStaff = ref(false);

const toggleShowStaff = () => {
    showStaff.value = !showStaff.value
}

const showUserCommandOn = () => {
    userCommand.value = true;
};

const showUserCommandOff = () => {
    userCommand.value = false;
};

const getUserList = async () => {
    const res = await axios.get('/staff');
    staffs.value = res.data;
    console.log(staffs.value);

};

const regNewUser = () => {
    router.push('/register');
};

onMounted( async () => {
    await authStore.getAdmin();
});
</script>