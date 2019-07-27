<template>
  <div id="app">
    <base-header v-if="$route.path !== '/'"></base-header>
    <div class="container">
      <div class="row">
        <div class="col">
          <router-view/>
        </div>
      </div>
    </div>
    <base-footer></base-footer>
  </div>
</template>

<script>
import BaseHeader from './components/header'
import BaseFooter from './components/footer'

export default {
  components: {
    BaseHeader,
    BaseFooter
  }  
}
</script>

<style>
</style>
