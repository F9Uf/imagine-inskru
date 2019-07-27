<template>
  <div class="filter2">
    <h3>ด้านการเรียน</h3>
    <div class="form-check">
      <input
        class="form-check-input"
        type="radio"
        name="exampleRadios"
        id="exampleRadios1"
        value="yes"
        v-model="radioBox"
      />
      <label class="form-check-label" for="exampleRadios1">มี</label>
    </div>
    <div class="form-check">
      <input
        class="form-check-input"
        type="radio"
        name="exampleRadios"
        id="exampleRadios2"
        value="no"
        v-model="radioBox"
      />
      <label class="form-check-label" for="exampleRadios2">ไม่มี</label>
    </div>
    <div class="form-control" v-if="radioBox === 'yes'">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value id="defaultCheck1" />
        <label class="form-check-label" for="defaultCheck1">Default checkbox</label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value id="defaultCheck2" disabled />
        <label class="form-check-label" for="defaultCheck2">Disabled checkbox</label>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
