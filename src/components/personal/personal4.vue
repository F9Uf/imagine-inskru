<template>
  <form>
    <div class="form-group">
      <label for="Cd">
        Congenital disease:
        <input type="text" class="form-control" id="Cd" />
      </label>
    </div>
    <div class="form-group">
      <label for="ad">
        เเพ้ยา:
        <input type="text" class="form-control" id="ad" />
      </label>
    </div>
    <div class="form-group">
      <label for="weight">
        Weight:
        <input type="text" class="form-control" id="weight" placeholder="Kilograms" />
      </label>
    </div>
    <div class="form-group">
      <label for="height">
        Height:
        <input type="text" class="form-control" id="height" placeholder="Centimetres" />
      </label>
    </div>
    <div class="form-group">
      <label for="Cd">
        Congenital disease:
        <input type="text" class="form-control" id="Cd" />
      </label>
    </div>
    <div class="form-check">
      <label class="form-check-label">
        <input type="radio" class="form-check-input" name="optradio" />Option 1
      </label>
    </div>
  </form>
</template>

<script>
const firebase = require("../../service/firebaseConfig");

export default {
  name: "personal1",
  mounted() {
    console.log(firebase);
  }
};
</script>

<style>
</style>
