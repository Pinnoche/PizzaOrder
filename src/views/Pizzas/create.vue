<template>
  <div>
    <h1 class="mb-8 text-3xl text-center text-gray-800 font-semibold">
      Order Your Pizza Here!!!
    </h1>

    <form
      class="grid grid-cols-1 gap-6 max-w-lg mx-auto"
      @submit.prevent="savePizza"
    >
      <div class="bg-gray-100 rounded-lg p-6">
        <label for="fullName" class="block mb-2 text-gray-800 font-semibold"
          >Name</label
        >
        <input
          v-model="data.pizza.name"
          type="text"
          class="w-full px-4 py-2 rounded-md bg-gray-200 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          id="fullName"
        />
        <span v-if="data.errors.value.name" class="text-red-500">
          {{ data.errors.value.name[0] }}</span
        >
      </div>

      <div class="bg-gray-100 rounded-lg p-6">
        <label for="pizzaType" class="block mb-2 text-gray-800 font-semibold"
          >Your Pizza Type</label
        >
        <select
          v-model="data.pizza.type"
          name="type"
          class="w-full px-4 py-2 rounded-md bg-gray-200 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          id="pizzaType"
        >
          <option selected disabled value="">Select Your Type</option>
          <option value="European">European</option>
          <option value="Hawaiian">Hawaiian</option>
          <option value="Mexican">Mexican</option>
        </select>
        <span v-if="data.errors.value.type" class="text-red-500">
          {{ data.errors.value.type[0] }}</span
        >
      </div>

      <div class="bg-gray-100 rounded-lg p-6">
        <label for="pizzaBase" class="block mb-2 text-gray-800 font-semibold"
          >Your Pizza Base</label
        >
        <select
          v-model="data.pizza.base"
          name="base"
          class="w-full px-4 py-2 rounded-md bg-gray-200 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          id="pizzaBase"
        >
          <option selected disabled value="">Select Your Base</option>
          <option value="Double Sausage">Double Sausage</option>
          <option value="Pepper and Onions">Pepper and Onions</option>
          <option value="Single Sausage">Single Sausage</option>
        </select>
        <span v-if="data.errors.value.base" class="text-red-500">
          {{ data.errors.value.base[0] }}</span
        >
      </div>

      <div class="bg-gray-100 rounded-lg p-6">
        <label for="price" class="block mb-2 text-gray-800 font-semibold"
          >Price:</label
        >
        <p></p>
      </div>

      <div class="bg-gray-100 rounded-lg p-6">
        <div class="flex items-center mb-2">
          <input
            class="form-checkbox rounded text-blue-500"
            type="checkbox"
            id="agreeCheck"
            required
          />
          <label class="ml-2 text-gray-800" for="agreeCheck"
            >Agree to terms and conditions</label
          >
        </div>
      </div>

      <div class="bg-gray-100 rounded-lg p-6">
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
          type="submit"
        >
          Submit Order
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import Cookies from "universal-cookie";
import axios from "axios";
import { onMounted, ref } from "vue";
import { useAuthStore } from "@/stores/auth";

const router = useRouter();
const cookies = new Cookies();
const authStore = useAuthStore();

const data = {
  csrfToken: cookies.get("XSRF-TOKEN"),

  pizza: {
    name: "",
    type: "",
    base: "",
  },

  errors: ref([]),
};

const savePizza = async () => {
  data.errors.value = [];
  try {
    await axios.post("/api/pizzas", data.pizza, {
      headers: {
        "X-XSRF-TOKEN": data.csrfToken,
      },
    });
    router.push({
      path: "/welcome",
      query: { message: "Thank you Customer, See you again!!!" },
    });
  } catch (error) {
    if (error.response.status == 401) {
      router.push("/login");
    }
    if (error.response.status === 422) {
      data.errors.value = error.response.data.errors;
    }
  }
};

onMounted(async () => {
  try {
    await authStore.getUser();
  } catch (error) {
    if (error.response && error.response.status == 401) {
      router.push("/login");
    }
  }
});
</script>
