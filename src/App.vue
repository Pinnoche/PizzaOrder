<script setup>
import { onMounted } from 'vue';
import { useAuthStore } from '@/stores/auth';
import { RouterLink, RouterView } from 'vue-router';
import Nav from './components/Nav.vue';


  const authStore = useAuthStore();


 onMounted( async () => {
       await authStore.getUser();
      //  console.log(authStore.authUser);
      // console.log(data.data);
      // data.data = authStore.user;
      // console.log(authStore.user);
    });

</script>

<template>
  <header>
    <Nav />
  </header>

  <RouterView />
</template>

