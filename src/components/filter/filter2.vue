<template>
  <div class="filter2">
    <h3>2. ด้านการเรียน</h3>
    <div class="form-check">
      <input
        class="form-check-input"
        type="radio"
        name="studyRadios"
        id="studyRadios1"
        value="ok"
        v-model="radioBox"
      />
      <label class="form-check-label" for="studyRadios1">ปกติ</label>
    </div>
    <div class="form-check">
      <input
        class="form-check-input"
        type="radio"
        name="studyRadios"
        id="studyRadios2"
        value="risk"
        v-model="radioBox"
      />
      <label class="form-check-label" for="studyRadios2">เสี่ยง</label>
    </div>
    <div class="form-check">
      <input
        class="form-check-input"
        type="radio"
        name="studyRadios"
        id="studyRadios3"
        value="problem"
        v-model="radioBox"
      />
      <label class="form-check-label" for="studyRadios3">มีปัญหา</label>
    </div>
    <div v-if="radioBox === 'risk'">
      <div class="form-check" v-for="(item, index) in risk" :key="index">
        <input class="form-check-input" type="checkbox" :value="item.label" :id="'defaultCheck'+index">
        <label class="form-check-label" :for="'defaultCheck'+index">
          {{item.label}}
        </label>
      </div>
    </div>
    <div v-if="radioBox === 'problem'">
      <div class="form-check" v-for="(item, index) in problem" :key="index">
        <input class="form-check-input" type="checkbox" :value="item.label" :id="'defaultCheck'+index">
        <label class="form-check-label" :for="'defaultCheck1'+index">
          {{item.label}}
        </label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            radioBox: null,
            risk: [
                { label:'ผลการเรียนเฉลี่ย 1.00-2.00'},
                { label:'ติด 0, ร, มส, มผ  1-2 วิชา/1 ภาคเรียน'},
                { label:'ไม่เข้าเรียน 1-2 ครั้ง/รายวิชา'},
                { label:'มาเรียนสาย 3 ครั้งต่อสัปดาห์	'},
                { label:'ไม่ตั้งใจเรียนขณะครูสอน'},
                { label:'ไม่มีอุปกรณ์การเรียนมาเรียน หรือนำอุปกรณ์มาไม่ครบ'},
                { label:'อ่านสะกดคำไม่ได้'}
            ],
            problem: [
              {label: "ผลการเรียนต่ำกว่า 1.00"},
              {label: "ติด 0, ร, มส, มผ มากกว่า 2 วิชา/1 ภาคเรียน"},
              {label: "มาเรียนสายมากกว่า 3 ครั้งต่อสัปดาห์"},
              {label: "ไม่เข้าเรียนหลายครั้งโดยไม่มีจำเป็น"},
              {label: "สมาธิสั้น"},
              {label: "ขาดเรียนบ่อยมากกว่า 1 วัน/สัปดาห์"},
              {label: "ไม่ส่งงานมากกว่า 2 วิชา"}
            ]
        }
    }
}
</script>

<style>
</style>
