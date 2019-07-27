<template>
  <div class="personal">
      
      <personal1></personal1>
      <personal4></personal4>
  </div>
</template>

<script>
// @ is an alias to /src
import personal1 from '../components/personal/personal1.vue'
import personal4 from '../components/personal/personal4.vue'

export default {
  name: 'personal',
  components: {
    personal1,
    personal4
  }
}
</script>
``