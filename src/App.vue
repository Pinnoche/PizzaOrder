<script setup>
import { onMounted } from 'vue';
import { useAuthStore } from '@/stores/auth';
import { RouterLink, RouterView } from 'vue-router';
import U_Nav from './components/U_Nav.vue';
import S_Nav from './components/S_Nav.vue'
import A_Nav from './components/A_Nav.vue'


  const authStore = useAuthStore();

 onMounted( async () => {
    await authStore.getStaff();
    await authStore.getUser();
    // await authStore.getAdmin();
    });

</script>

<template>
  <header>
    <S_Nav v-if="$route.meta.s_Nav && !$route.meta.home && !$route.meta.a_Nav"/>
    <U_Nav v-if="!$route.meta.s_Nav && !$route.meta.home && !$route.meta.a_Nav"/>
    <A_Nav v-if="$route.meta.a_Nav && !$route.meta.s_Nav && !$route.meta.home"/>
  </header>

  <RouterView />

  <!-- <footer class="bg-black mt-96">
    <div class="">
      Footer
    </div>
  </footer> -->
</template>

