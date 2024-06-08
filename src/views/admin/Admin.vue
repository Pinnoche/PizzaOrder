<template>
    <div class="grid grid-cols-5">
        
        <div class=" bg-black relative text-white text-xl overflow-hidden min-h-screen">
            <div class="bg-gray-800 text-white py-3 px-6 text-center ">
                <h2 class="text-2xl font-semibold">Admin Span</h2>
            </div>
            
            <div class="p-3 border-b-gray-500 border-b-2 hover:bg-gray-500 flex justify-center items-center cursor-default" @click="handleUserCommand">
                <p>User commands</p>
            </div>
            <div class="p-3 border-b-gray-500 border-b-2 hover:bg-gray-500 flex justify-center items-center cursor-default">Staffs Command</div>
            <div class="p-3 border-b-gray-500 border-b-2 hover:bg-gray-500 flex justify-center items-center cursor-default">Check Users</div>
            <div class="p-3 border-b-gray-500 border-b-2 hover:bg-gray-500 flex justify-center items-center cursor-default">Check Users</div>
            <div class="p-3 hover:bg-gray-500 flex justify-center items-center cursor-default">Check Users</div>

        </div>

        <div class="col-span-4 px-72 py-32 bg-white">
            <UserCommand ref="user" :class="{ 'hidden' : isUser }" :getUserList = 'getUserList' />
            <UserList ref="usersList" :class="{ 'hidden' : isUsers }" :users="users" :handleUsersList="handleUsersList" :removeUser="removeUser" />
        </div>

        
        
    </div>

   
</template>

<script setup>
import UserCommand from '@/components/UserCommand.vue';
import UserList from '@/components/UserList.vue';
import { onMounted, ref } from 'vue';
import axios from 'axios';
import { useAuthStore } from '@/stores/auth';
import Cookies from 'universal-cookie';
// import { useRouter } from 'vue-router';

const authStore = useAuthStore();
// const router = useRouter();
const cookies = new Cookies();
const user = ref(null);
const isUser = ref(true);
const usersList = ref(null);
const isUsers = ref(true);

const csrfToken = cookies.get('XSRF-TOKEN');

const handleUserCommand = () => {
    const userValue = user.value;

    if(isUser){
        userValue.$el.classList.toggle('hidden');
        isUser.value = !isUser.value;
    }


};
const users = ref([]);
// const userCommand = ref(false);
// const showStaff = ref(false);

// const toggleShowStaff = () => {
//     showStaff.value = !showStaff.value
// }

// const showUserCommandOn = () => {
//     userCommand.value = true;
// };

// const showUserCommandOff = () => {
//     userCommand.value = false;
// };

const getUserList = async () => {
    isUser.value = true;
    isUsers.value = true;
    const usersListValue = usersList.value;
    if(isUsers){
        usersListValue.$el.classList.toggle('hidden');
        isUsers.value = !isUsers.value;
    };
    
    const res = await axios.get('/user');
    users.value = res.data;
};

const handleUsersList = () => {
    isUsers.value = true;
    isUser.value = false;

};
onMounted( async () => {
    await authStore.getAdmin();
});

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
}
</script>