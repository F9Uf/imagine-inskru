<template>
  <div class="personal">
      
      <personal1></personal1>
      <br>
      <br>
      <br>
      <personal4></personal4>
      <br>
      <br>
      <br>
      <personal5></personal5>
  </div>
</template>

<script>
// @ is an alias to /src
import personal1 from '../components/personal/personal1.vue'
import personal4 from '../components/personal/personal4.vue'
import personal5 from '../components/personal/personal5.vue'

export default {
  name: 'personal',
  components: {
    personal1,
    personal4,
    personal5
  }
}
</script>
``