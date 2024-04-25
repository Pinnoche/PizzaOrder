
<template>
 <div>
  <div class="container">
    <h1 class="text-center">WELCOME FOR YOUR ORDER</h1>

    <img src='../assets/pizza.jpg' alt="Pizza" class="img-fluid img-thumbnail mx-auto rounded d-block mb-4 ">

  <p class="w-100">
    <RouterLink class="btn btn-primary text-center w-100" to="/pizzas/create">Place Your Order Here!!!</RouterLink>
  </p>
  </div>
  <div class="d-flex justify-content-center">
    <p class="text-primary">{{  message }}</p>
  </div>
 </div>

 

</template>
<script>
export default {
  name: 'HomeView',

  created() {
      this.message = this.$route.query.message;

  },
  data(){
    return {
      message: ''

    }
  }
}

</script>
