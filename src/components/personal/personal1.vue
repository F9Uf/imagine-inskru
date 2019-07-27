<template>
  <div>
    <h1> Personal </h1>
    <form action="/action_page.php">
      
      <!-- Firstname, Lastname and Nickname -->
      <div class="row">
        <div class="col">
          <label for="firstName">ชื่อ:</label>
          <input type="text" class="form-control ml-1 mr-2" id="firstName">
        </div>
        <div class="col">
          <label for="lastName">นามสกุล:</label>
          <input type="text" class="form-control ml-1 mr-2" id="lastName">
        </div>
        <div class="col">
          <label for="nickName">ชื่อเล่น:</label>
          <input type="text" class="form-control ml-1 mr-2" id="nickName">
        </div>
      </div>

      <!-- Date of birth -->
      <div class="form-inline mt-3">
        <label for="day">วัน:</label>
        <input type="text" class="form-control ml-1 mr-2" id="day">
        <label for="month">เดือน:</label>
        <input type="text" class="form-control ml-1 mr-2" id="month">
        <label for="lastName">ปี:</label>
        <input type="text" class="form-control ml-1 mr-2" id="year">
      </div>

      <!-- เชื้อชาติ, สัญชาติ และศาสนา -->
      <div class="form-inline mt-3">
        <label for="nationality">เชื้อชาติ:</label>
        <input type="text" class="form-control ml-1 mr-2" id="nationality">
        <label for="ethnic">สัญชาติ:</label>
        <input type="text" class="form-control ml-1 mr-2" id="ethnic">
        <label for="religion">ศาสนา:</label>
        <input type="text" class="form-control ml-1 mr-2" id="religion">
      </div>

      <!-- ที่อยู่ -->
      <label class="mt-3" for="address">ที่อยู่:</label>
      <input type="text" class="form-control ml-1 mr-2" id="address">

      <!-- โทรศัพท์ -->
      <div class="form-inline mt-3">
        <label for="phone">เบอร์โทรศัพท์:</label>
        <input type="text" class="form-control ml-1 mr-2" id="phoneNumber">
        <label for="blood">กรุ๊ปเลือด:</label>
        <input type="text" class="form-control ml-1 mr-2" id="bloodGroup">
      </div>

      <!-- พักอยู่กับใคร -->
      <div class="form-inline mt-3">
      <label class="mr-3">พักอยู่กับใคร:</label>
      <div class="form-check">
        <input type="radio" class="form-check-input" name="familyStatus" v-model="familyStatus" value="both">
        <label for="form-check-label">บิดาและมารดา</label>
      </div>
      <div class="form-check">
        <input type="radio" class="form-check-input ml-2" name="familyStatus" v-model="familyStatus" value="father">
        <label for="form-check-label">บิดา</label>
      </div>
      <div class="form-check">
        <input type="radio" class="form-check-input ml-2" name="familyStatus" v-model="familyStatus" value="mother">
        <label for="form-check-label">มารดา</label>
      </div>
      <div class="form-check">
        <input type="radio" class="form-check-input ml-2" name="familyStatus" v-model="familyStatus" value="other">
        <label for="form-check-label">อื่นๆ</label>
      </div>
      <div class="form-group" v-if="familyStatus === 'other'">
        <input type="text" class="form-control ml-2" v-model="otherStatus" placeholder="โปรดระบุ">
      </div>
      </div>
</form>
</div>
</template>

<script>
const firebase = require('../../service/firebaseConfig');

export default {
  name: 'personal1',
  data() {
    return {
          familyStatus: null,
          otherStatus: ''
    }
  }
}
</script>

<style>

</style>
