<template>
  <div class="filter8">
    <h3>8.  ด้านพฤติกรรมทางเพศ</h3>
    <div class="form-check">
      <input
        class="form-check-input"
        type="radio"
        name="sexualRadios"
        id="sexualRadios1"
        value="ok"
        v-model="radioBox"
      />
      <label class="form-check-label" for="sexualRadios1">ปกติ</label>
    </div>
    <div class="form-check">
      <input
        class="form-check-input"
        type="radio"
        name="sexualRadios"
        id="sexualRadios2"
        value="risk"
        v-model="radioBox"
      />
      <label class="form-check-label" for="sexualRadios2">เสี่ยง</label>
    </div>
    <div class="form-check">
      <input
        class="form-check-input"
        type="radio"
        name="sexualRadios"
        id="sexualRadios3"
        value="problem"
        v-model="radioBox"
      />
      <label class="form-check-label" for="sexualRadios3">มีปัญหา</label>
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
    <button class="btn btn-primary" @click="next()">ถัดไป</button>
  </div>
</template>

<script>
export default {
    data() {
        return {
            radioBox: null,
            risk: [
                { label:'อยู่ในกลุ่มประพฤติตนเหมือนเพศตรงข้าม'},
                { label:'ทำงานพิเศษที่ล่อแหลมต่อการถูกล่วงละเมิดทางเพศ'},
                { label:'จับคู่ชัดเจนและแยกกลุ่มอยู่ด้วยกันสองต่อสองบ่อยครั้ง'},
                { label:'อยู่ในกลุ่มขายบริการ'},
                { label:'ใช้เครื่องมือสื่อสารเป็นเวลานานและบ่อยครั้ง'}
            ],
            problem: [
              {label: "ประพฤติตนเหมือนเพศตรงข้าม"},
              {label: "ขาดเรียนไปกับคู่ของตนเสมอๆ"},
              {label: "อยู่ด้วยกัน"},
              {label: "ตั้งครรภ์"},
              {label: "ขายบริการทางเพศ"},
              {label: "มีการมั่วสุมทางเพศ"},
              {label:'หมกมุ่นในการใช้เครื่องมือ่อสารที่เกี่ยวข้องทางเพศ'}
            ]
        }
    },
    methods: {
        next() {
            this.$store.dispatch('updateFilter1', this.form)
            this.$store.dispatch('filterNext')         
        }
    }
}
</script>

<style>
</style>
