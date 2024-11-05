<template>
    <div class="grid grid-cols-5">
        
        <div class=" bg-black relative text-white text-xl overflow-hidden min-h-screen">
            <div class="bg-gray-800 text-white py-3 px-6 text-center ">
                <h2 class="text-2xl font-semibold">Admin Span</h2>
            </div>
            
            <div class="p-3 border-b-gray-500 border-b-2 hover:bg-gray-500 flex justify-center items-center cursor-default" @click="handleUserCommand">
                <p>User commands</p>
            </div>
            <div class="p-3 border-b-gray-500 border-b-2 hover:bg-gray-500 flex justify-center items-center cursor-default" @click="handleStaffCommand">
                <p>Staffs Command</p>
            </div>
            <div class="p-3 border-b-gray-500 border-b-2 hover:bg-gray-500 flex justify-center items-center cursor-default">Check Users</div>
            <div class="p-3 border-b-gray-500 border-b-2 hover:bg-gray-500 flex justify-center items-center cursor-default">Check Users</div>
            <div class="p-3 hover:bg-gray-500 flex justify-center items-center cursor-default">Check Users</div>

        </div>

        <div class="col-span-4 px-72 py-32 bg-white">
            <UserCommand ref="user" :class="{ 'hidden' : isUser }" :getUserList = 'getUserList' />
            <UserList :class="{ 'hidden' : isUsers }" :users="users" :handleUsersList="handleUsersList" :removeUser="removeUser" />
            <StaffCommand ref="staff" :class="{ 'hidden' : isStaff }" :getStaffList = 'getStaffList' />
            <StaffList :class="{ 'hidden' : isStaffs }" :staffs="staffs" :handleStaffsList="handleStaffsList" :removeStaff="removeStaff" />
        </div>

    </div>

   
</template>

<script setup>
import UserCommand from '@/components/UserCommand.vue';
import UserList from '@/components/UserList.vue';
import StaffCommand from '@/components/StaffCommand.vue';
import StaffList from '@/components/StaffList.vue';
import { onBeforeMount, onMounted, ref } from 'vue';
import axios from 'axios';
import { useAuthStore } from '@/stores/auth';
import Cookies from 'universal-cookie';


const authStore = useAuthStore();
const cookies = new Cookies();
const user = ref(null);
const staff = ref(null);
const isUser = ref(true);
const isStaff = ref(true);
const isUsers = ref(true);
const isStaffs = ref(true);
const csrfToken = cookies.get('XSRF-TOKEN');

onBeforeMount( async () => {
    await authStore.getAdmin()
});

const handleUserCommand = () => {
    if(isUser){
        isUsers.value = true;
        isStaffs.value = true;
        isStaff.value = true;
        isUser.value = !isUser.value;
    }
};

const users = ref([]);

const getUserList = async () => {
    isUser.value = true;
    isUsers.value = false;
    
    const res = await axios.get('/user');
    users.value = res.data;
};

const handleUsersList = () => {
    isUsers.value = true;
    isUser.value = false;
};

const removeUser =  async(userId) => {
    try {
        await axios.delete(`/user/${userId}/delete`, {
            headers:{
                        'X-XSRF-TOKEN' : csrfToken
                    }
        });  
        
        await getUserList();
    } catch (error) {
        console.log(error);
    }
};
const staffs = ref([]);

const handleStaffCommand = () => {
    if(isStaff){
        isUsers.value = true;
        isStaffs.value = true;
        isUser.value = true;
        isStaff.value = !isStaff.value;
    }
};

const handleStaffsList = () => {
        isStaff.value = false;
        isStaffs.value = true;
};

const getStaffList = async () => {
        isStaff.value = true;
        isStaffs.value = false;

        const res = await axios.get('/staff');
        staffs.value = res.data;
    };

    const removeStaff =  async(staffId) => {
    try {
        await axios.delete(`/staff/${staffId}/delete`, {
            headers:{
                        'X-XSRF-TOKEN' : csrfToken
                    }
        });  
        
        await getStaffList();
    } catch (error) {
        console.log(error);
    }
};
</script>