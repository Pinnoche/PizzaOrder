<template>
    <main class="max-w-3xl mx-auto min-h-screen">
        <h1 class="text-center font-bold text-xl hover:text-blue-400 my-10 cursor-default">WELCOME TO THE PIZZA COMPANY</h1>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 min-h-[75vh]">
            <RouterLink to="/admin" @mouseenter="isAdmin = true" @mouseleave="isAdmin = false" class="relative bg-black border rounded-md text-white flex items-center justify-center transition-transform duration-500 hover:translate-y-4 cursor-default shadow-lg hover:shadow-2xl">
                <p>ADMIN</p>
                <div v-show="isAdmin" class="text-white absolute top-5">Enter the admin portal</div>
            </RouterLink>
            <RouterLink to="/staff" @mouseenter="isStaff = true" @mouseleave="isStaff = false" class="relative bg-black border rounded-md text-white flex items-center justify-center transition-transform duration-500 hover:translate-y-4 cursor-default shadow-lg hover:shadow-2xl">
                <p>STAFFS</p>
                <div v-show="isStaff" class="text-white absolute top-5">Enter the Staffs portal</div>
            </RouterLink>
            <RouterLink to="/welcome" @mouseenter="isClient = true" @mouseleave="isClient = false" class="relative bg-black border rounded-md text-white flex items-center justify-center transition-transform duration-500 hover:translate-y-4 cursor-default shadow-lg hover:shadow-2xl">
                <p>PLACE YOUR PIZZA</p>
                <div v-show="isClient" class="text-white absolute top-5">Enter to place your Order</div>
            </RouterLink>
        </div>
    </main>
</template>

<script setup>
import { ref } from 'vue';


const isAdmin = ref(false)
const isStaff = ref(false)
const isClient = ref(false)
</script>