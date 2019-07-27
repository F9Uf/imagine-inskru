<template>
    <form>
      <h1>ข้อมูลด้านอื่นๆ</h1>
    <div class="form-group">
      <label for="pican">
        ความพิการ:
        <input type="text" class="form-control" id="pican" />
      </label>
    </div>
    <div class="form-group">
      <label for="doi">
        ความด้อยโอกาส:
        <input type="text" class="form-control" id="doi" />
      </label>
    </div>

    <div class="custom-control custom-radio">
        ความขาดเเคลน <br>
        <input
          type="radio"
          class="custom-control-input"
          id="radio13"
          name="groupOfDefaultRadios7"
        />
        <label class="custom-control-label" for="radio13">ขาดเเคลน</label>
      </div>
      <div class="custom-control custom-radio">
        <input
          type="radio"
          class="custom-control-input"
          id="radio14"
          name="groupOfDefaultRadios7"
        />
        <label class="custom-control-label" for="radio14">ไม่ขาดเเคลน</label>
      </div>
    <br>

    <div class="custom-control custom-radio">
        ขาดเเคลนแบบเรียน <br>
        <input
          type="radio"
          class="custom-control-input"
          id="radio15"
          name="groupOfDefaultRadios8"
        />
        <label class="custom-control-label" for="radio15">ขาดเเคลน</label>
      </div>
      <div class="custom-control custom-radio">
        <input
          type="radio"
          class="custom-control-input"
          id="radio16"
          name="groupOfDefaultRadios8"
        />
        <label class="custom-control-label" for="radio16">ไม่ขาดเเคลน</label>
      </div>
    <br>

    <div class="custom-control custom-radio">
        ขาดเเคลนเครื่องเขียน <br>
        <input
          type="radio"
          class="custom-control-input"
          id="radio17"
          name="groupOfDefaultRadios9"
        />
        <label class="custom-control-label" for="radio17">ขาดเเคลน</label>
      </div>
      <div class="custom-control custom-radio">
        <input
          type="radio"
          class="custom-control-input"
          id="radio18"
          name="groupOfDefaultRadios9"
        />
        <label class="custom-control-label" for="radio18">ไม่ขาดเเคลน</label>
      </div>
    <br>
    <div class="custom-control custom-radio">
        ขาดเเคลนเครื่องเเบบ <br>
        <input
          type="radio"
          class="custom-control-input"
          id="radio19"
          name="groupOfDefaultRadios10"
        />
        <label class="custom-control-label" for="radio19">ขาดเเคลน</label>
      </div>
      <div class="custom-control custom-radio">
        <input
          type="radio"
          class="custom-control-input"
          id="radio20"
          name="groupOfDefaultRadios10"
        />
        <label class="custom-control-label" for="radio20">ไม่ขาดเเคลน</label>
      </div>
    <br>

    <div class="custom-control custom-radio">
        ขาดเเคลนอาหารกลางวัน <br>
        <input
          type="radio"
          class="custom-control-input"
          id="radio21"
          name="groupOfDefaultRadios11"
        />
        <label class="custom-control-label" for="radio21">ขาดเเคลน</label>
      </div>
      <div class="custom-control custom-radio">
        <input
          type="radio"
          class="custom-control-input"
          id="radio22"
          name="groupOfDefaultRadios11"
        />
        <label class="custom-control-label" for="radio21">ไม่ขาดเเคลน</label>
      </div>
    <br>

    <h4>ข้อมูลด้านยาเสพติด</h4>
    <div class="custom-control custom-radio">
        -คบเพื่อนที่เกี่ยวข้องกับสิ่งเสพติด <br>
        <input
          type="radio"
          class="custom-control-input"
          id="radio23"
          name="groupOfDefaultRadios12"
        />
        <label class="custom-control-label" for="radio23">ใช่</label>
      </div>
      <div class="custom-control custom-radio">
        <input
          type="radio"
          class="custom-control-input"
          id="radio24"
          name="groupOfDefaultRadios12"
        />
        <label class="custom-control-label" for="radio24">ไม่</label>
      </div>
    <br>
    <div class="custom-control custom-radio">
        -มีพฤติกรรมเสพหรือจำหน่ายยาเสพติด <br>
        <input
          type="radio"
          class="custom-control-input"
          id="radio25"
          name="groupOfDefaultRadios13"
        />
        <label class="custom-control-label" for="radio25">ใช่</label>
      </div>
      <div class="custom-control custom-radio">
        <input
          type="radio"
          class="custom-control-input"
          id="radio26"
          name="groupOfDefaultRadios13"
        />
        <label class="custom-control-label" for="radio26">ไม่</label>
      </div>
    <br>
    <h4>ข้อมูลด้านเพศสัมพันธ์</h4>
    <div class="custom-control custom-radio">
        -มีพฤติกรรมส่อไปในทางชู้สาว <br>
        <input
          type="radio"
          class="custom-control-input"
          id="radio27"
          name="groupOfDefaultRadios14"
        />
        <label class="custom-control-label" for="radio27">ใช่</label>
      </div>
      <div class="custom-control custom-radio">
        <input
          type="radio"
          class="custom-control-input"
          id="radio28"
          name="groupOfDefaultRadios14"
        />
        <label class="custom-control-label" for="radio28">ไม่</label>
      </div>
    <br>
    <div class="custom-control custom-radio">
        -พักอาศัยหรืออยู่กับเพื่อนต่างเพศที่ไม่ใช่ญาติ <br>
        <input
          type="radio"
          class="custom-control-input"
          id="radio29"
          name="groupOfDefaultRadios15"
        />
        <label class="custom-control-label" for="radio29">ใช่</label>
      </div>
      <div class="custom-control custom-radio">
        <input
          type="radio"
          class="custom-control-input"
          id="radio30"
          name="groupOfDefaultRadios15"
        />
        <label class="custom-control-label" for="radio30">ไม่</label>
      </div>
    <br>
    <div class="custom-control custom-radio">
        -ชอบเที่ยวกลางคืนหรือไม่ <br>
        <input
          type="radio"
          class="custom-control-input"
          id="radio31"
          name="groupOfDefaultRadios16"
        />
        <label class="custom-control-label" for="radio31">ใช่</label>
      </div>
      <div class="custom-control custom-radio">
        <input
          type="radio"
          class="custom-control-input"
          id="radio32"
          name="groupOfDefaultRadios16"
        />
        <label class="custom-control-label" for="radio32">ไม่</label>
      </div>
    <br>
    <div class="custom-control custom-radio">
        -มีการล่วงละเมิดทางเพศหรือไม่ <br>
        <input
          type="radio"
          class="custom-control-input"
          id="radio33"
          name="groupOfDefaultRadios17"
        />
        <label class="custom-control-label" for="radio33">ใช่</label>
      </div>
      <div class="custom-control custom-radio">
        <input
          type="radio"
          class="custom-control-input"
          id="radio34"
          name="groupOfDefaultRadios17"
        />
        <label class="custom-control-label" for="radio34">ไม่</label>
      </div>
    <br>

    <input type="submit" value="Submit" />
    </form>

      
</template>


<script>
const firebase = require("../../service/firebaseConfig");

export default {
  name: "personal5",
  mounted() {
    console.log(firebase);
  }
};
</script>

<style>
</style>
