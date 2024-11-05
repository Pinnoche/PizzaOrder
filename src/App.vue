<script setup>
import { RouterLink, RouterView } from "vue-router";
import U_Nav from "./components/U_Nav.vue";
import S_Nav from "./components/S_Nav.vue";
import A_Nav from "./components/A_Nav.vue";
</script>

<template>
  <header>
    <S_Nav
      v-if="$route.meta.s_Nav && !$route.meta.home && !$route.meta.a_Nav"
    />
    <U_Nav
      v-if="!$route.meta.s_Nav && !$route.meta.home && !$route.meta.a_Nav"
    />
    <A_Nav
      v-if="$route.meta.a_Nav && !$route.meta.s_Nav && !$route.meta.home"
    />
  </header>

  <RouterView />

  <!-- <footer class="bg-black mt-96">
    <div class="">
      Footer
    </div>
  </footer> -->
</template>
