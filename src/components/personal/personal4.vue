<template>
  <form>
    <div class="form-group">
      <label for="Cd">
        โรคประจำตัว:
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
        น้ำหนัก:
        <input type="text" class="form-control" id="weight" placeholder="Kilograms" />
      </label>
    </div>
    <div class="form-group">
      <label for="height">
        ส่วนสูง:
        <input type="text" class="form-control" id="height" placeholder="Centimetres" />
      </label>
    </div>

         
     
      <div class="custom-control custom-radio">
        ป่วยเป็นโรคร้ายเเรงหรือเรื้อรังหรือไม่ <br>
        <input
          type="radio"
          class="custom-control-input"
          id="radio1"
          name="groupOfDefaultRadios"
        />
        <label class="custom-control-label" for="radio1">ใช่</label>
      </div>
      <div class="custom-control custom-radio">
        <input
          type="radio"
          class="custom-control-input"
          id="radio2"
          name="groupOfDefaultRadios"
        />
        <label class="custom-control-label" for="radio2">ไม่</label>
      </div>
      <br>
    
   <div class="custom-control custom-radio">
        นักเรียนมีสายตาที่ <br>
        <input
          type="radio"
          class="custom-control-input"
          id="radio3"
          name="groupOfDefaultRadios2"
        />
        <label class="custom-control-label" for="radio3">ปกติ</label>
      </div>
      <div class="custom-control custom-radio">
        <input
          type="radio"
          class="custom-control-input"
          id="radio4"
          name="groupOfDefaultRadios2"
        />
        <label class="custom-control-label" for="radio4">สั้น</label>
      </div>
      <div class="custom-control custom-radio">
        <input
          type="radio"
          class="custom-control-input"
          id="radio5"
          name="groupOfDefaultRadios3"
        />
        <label class="custom-control-label" for="radio5">ยาว</label>
      </div>
      <div class="custom-control custom-radio">
        <input
          type="radio"
          class="custom-control-input"
          id="radio6"
          name="groupOfDefaultRadios3"
        />
        <label class="custom-control-label" for="radio6">เอียง</label>
      </div>
      <br>

    <div class="custom-control custom-radio">
        นักเรียนสวมเเว่นหรือไม่ <br>
        <input
          type="radio"
          class="custom-control-input"
          id="radio7"
          name="groupOfDefaultRadios4"
        />
        <label class="custom-control-label" for="radio7">ใช่</label>
      </div>
      <div class="custom-control custom-radio">
        <input
          type="radio"
          class="custom-control-input"
          id="radio8"
          name="groupOfDefaultRadios4"
        />
        <label class="custom-control-label" for="radio8">ไม่</label>
      </div>
      <br>

    <div class="custom-control custom-radio">
        นักเรียนมีความบกพร่องทางการได้ยินหรือไม่ <br>
        <input
          type="radio"
          class="custom-control-input"
          id="radio9"
          name="groupOfDefaultRadios5"
        />
        <label class="custom-control-label" for="radio7">ใช่</label>
      </div>
      <div class="custom-control custom-radio">
        <input
          type="radio"
          class="custom-control-input"
          id="radio10"
          name="groupOfDefaultRadios5"
        />
        <label class="custom-control-label" for="radio10">ไม่</label>
      </div>
      <br>

    <div class="custom-control custom-radio">
        นักเรียนมีความบกพร่องทางกายหรือไม่ <br>
        <input
          type="radio"
          class="custom-control-input"
          id="radio11"
          name="groupOfDefaultRadios6"
        />
        <label class="custom-control-label" for="radio11">ใช่</label>
      </div>
      <div class="custom-control custom-radio">
        <input
          type="radio"
          class="custom-control-input"
          id="radio12"
          name="groupOfDefaultRadios6"
        />
        <label class="custom-control-label" for="radio12">ไม่</label>
      </div>
      <br>
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
