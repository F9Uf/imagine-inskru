<template>
  <div class="filter4">
    <h3>4. ด้านเศรษฐกิจ</h3>
    <div class="form-check">
      <input
        class="form-check-input"
        type="radio"
        name="ecoRadios"
        id="ecoRadios1"
        value="ok"
        v-model="radioBox"
      />
      <label class="form-check-label" for="ecoRadios1">ปกติ</label>
    </div>
    <div class="form-check">
      <input
        class="form-check-input"
        type="radio"
        name="ecoRadios"
        id="ecoRadios2"
        value="risk"
        v-model="radioBox"
      />
      <label class="form-check-label" for="ecoRadios2">เสี่ยง</label>
    </div>
    <div class="form-check">
      <input
        class="form-check-input"
        type="radio"
        name="ecoRadios"
        id="ecoRadios3"
        value="problem"
        v-model="radioBox"
      />
      <label class="form-check-label" for="ecoRadios3">มีปัญหา</label>
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
        <label class="form-check-label" :for="'defaultCheck'+index">
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
                { label:'รายได้ครอบครัว  5,000-10,000  บาท ต่อเดือน'},
                { label:'บิดาหรือมารดาตกงาน (1 คน) แต่รายได้มากกว่า  5,000  บาท'},
            ],
            problem: [
              {label: "รายได้ครอบครัวต่ำกว่า 5,000 ต่อเดือน"},
              {label: "บิดาและมารดาตกงาน(ทั้ง 2 คน)"},
              {label: "ครอบครัวมีภาระหนี้สินจำนวนมาก"},
              {label: "รายได้ไม่เพียงพอต่อการใช้จ่ายในชีวิตประจำวัน"}
            ]
        }
    }
}
</script>

<style>
</style>
