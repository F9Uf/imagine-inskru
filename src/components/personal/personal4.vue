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
      ป่วยเป็นโรคร้ายเเรงหรือเรื้อรังหรือไม่
      <label class="form-check-label">
        <input type="radio" class="form-check-input" name="optradio" />ใช่
      </label>
      <label class="form-check-label">
        <input type="radio" class="form-check-input" name="optradio" />ไม่
      </label>
    </div>
    <div class="form-check">
      นักเรียนมีสายตาที่
      <label class="form-check-label">
        <input type="radio" class="form-check-input" name="optradio2" />ปกติ
      </label>
      <label class="form-check-label">
        <input type="radio" class="form-check-input" name="optradio2" />สั้น
      </label>
      <label class="form-check-label">
        <input type="radio" class="form-check-input" name="optradio2" />ยาว
      </label>
      <label class="form-check-label">
        <input type="radio" class="form-check-input" name="optradio2" />เอียง
      </label>
    </div>
    <div class="form-check">
      นักเรียนใส่เเว่นหรือไม่
      <label class="form-check-label">
        <input type="radio" class="form-check-input" name="optradio3" />ใช่
      </label>
      <label class="form-check-label">
        <input type="radio" class="form-check-input" name="optradio3" />ไม่
      </label>
    </div>
    <div class="form-check">
      นักเรียนมีความบกพร่องทางการได้ยินหรือไม่
      <label class="form-check-label">
        <input type="radio" class="form-check-input" name="optradio4" />ใช่
      </label>
      <label class="form-check-label">
        <input type="radio" class="form-check-input" name="optradio4" />ไม่
      </label>
    </div>
    <div class="form-check">
      นักเรียนมีความบกพร่องทางกายหรือไม่
      <label class="form-check-label">
        <input type="radio" class="form-check-input" name="optradio5" />ใช่
      </label>
      <label class="form-check-label">
        <input type="radio" class="form-check-input" name="optradio5" />ไม่
      </label>
    </div>
    <br />
    <br />
    <input type="submit" value="Submit" />
  </form>
</template>

<script>
const firebase = require("../../service/firebaseConfig");

export default {
  name: "personal4",
  mounted() {
    console.log(firebase);
  }
};
</script>

<style>
</style>
