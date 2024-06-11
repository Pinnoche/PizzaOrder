<template>
    <div class=" relative max-w-lg border p-8 border-gray-300 shadow-xl rounded-lg bg-white h-64">
        <p @click="handleStaffsList()" class="bg-white text-red-500 absolute top-2 right-3 cursor-pointer p-2 rounded-full hover:bg-red-700 hover:text-white">X</p>
        <ul v-for="(staff, index) in staffs" :key="index" class="flex-wrap bg-blue-500 border border-gray-400 shadow-lg max-w-lg overflow-hidden text-lg rounded-lg mt-4">
            <li class="relative rounded-t-lg hover:bg-blue-700 hover:shadow-2xl text-gray-300 cursor-pointer p-4 text-center flex items-center justify-between">
                {{ staff.username }}
                <p @click="removeStaff(staff.id)" class="text-red-500 absolute top-2 right-3 cursor-pointer p-2 rounded-full hover:bg-red-700 hover:text-white">X</p>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
    staffs:{
        type: Array,
        required: true
    },
    handleStaffsList:{
        type: Function,
        required: true
    },
    removeStaff: {
        type: Function,
        required: true
    }
});
</script>