<template>
   <div class="relative max-w-lg border p-8 border-gray-300 shadow-xl rounded-lg bg-white h-64">
    <p @click="handleUsersList()" class="bg-white text-red-500 absolute top-2 right-3 cursor-pointer p-2 rounded-full hover:bg-red-700 hover:text-white">X</p>
    <ul v-for="(user, index) in users" :key="index" class="flex flex-col gap-2 mt-4">
        <li class="relative bg-blue-500 text-gray-300 p-4 rounded-lg hover:bg-blue-700 hover:shadow-2xl cursor-pointer flex items-center justify-between">
            {{ user.username }}
            <p @click="removeUser(user.id)" class="text-red-500 p-1 rounded-full hover:bg-red-700 hover:text-white">X</p>
        </li>
    </ul>
</div>

</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    users:{
        type: Array,
        required: true
    },

    handleUsersList:{
        type: Function,
        required: true
    },
    removeUser: {
        type: Function,
        required: true
    }
});
</script>