<template>
    <div v-for="(pizza, index) in data.pizzas.value" :key="index" class="bg-gray-200 rounded-lg p-6 mx-auto mb-8 max-w-sm md:max-w-2xl">
        <h2 class="text-xl font-semibold mb-2"><span class="font-semibold">Customer:  </span>{{ pizza.name }}</h2>
        <p class="text-gray-700 mb-2"><span class="font-semibold">Type:</span> {{ pizza.type }}</p>
        <p class="text-gray-700 mb-2"><span class="font-semibold">Base:</span> {{ pizza.base }}</p>
        <p class="text-gray-700"><span class="font-semibold">Ordered at:</span> {{ formatCreatedAt(pizza.created_at)}}</p>
        <button @click="deleteOrder(pizza.id)" class="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg mt-4">Complete Order</button>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    data:{
        type: Object,
        required: true
    },
    formatCreatedAt:{
        type: Function,
        required: true
    },
    deleteOrder: {
        type: Function,
        required: true
    }
})

</script>