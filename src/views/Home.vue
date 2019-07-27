<template>
  <div class="home">
    <Home></Home>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/header.vue';
import Home from '@/components/Home.vue'

export default {
  name: 'home',
  components: {
    Header,
    Home
  }
}
</script>
``