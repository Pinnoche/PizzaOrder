<template>
    <div class="relative max-w-lg border p-32 border-gray-300 shadow-xl rounded-lg bg-transparent h-[50vh]">
        <p @click="handleStaffsList()" class="bg-white text-red-500 absolute top-1 right-3 cursor-pointer">X</p>
        <ul v-for="(staff, index) in staffs" :key="index" class=" flex-wrap [&>li]:text-center rounded-lg bg-blue-500 border border-gray-400 shadow-lg max-w-lg overflow-hidden text-lg">
            <li class="relative rounded-t-lg hover:bg-blue-700 hover:shadow-2xl text-gray-300 cursor-pointer ">
                {{ staff.username }}
                <p @click="removeStaff(staff.id)" class="text-red-500 absolute top-1 right-3 cursor-pointer hover:bg-red-700">X</p>
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