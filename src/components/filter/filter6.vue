<template>
  <div class="filter4">
    <h3>6. ด้านพฤติกรรมการใช้สารเสพติด</h3>
    <div class="form-check">
      <input
        class="form-check-input"
        type="radio"
        name="drugRadios"
        id="drugRadios1"
        value="ok"
        v-model="radioBox"
      />
      <label class="form-check-label" for="drugRadios1">ปกติ</label>
    </div>
    <div class="form-check">
      <input
        class="form-check-input"
        type="radio"
        name="drugRadios"
        id="drugRadios2"
        value="risk"
        v-model="radioBox"
      />
      <label class="form-check-label" for="drugRadios2">เสี่ยง</label>
    </div>
    <div class="form-check">
      <input
        class="form-check-input"
        type="radio"
        name="drugRadios"
        id="drugRadios3"
        value="problem"
        v-model="radioBox"
      />
      <label class="form-check-label" for="drugRadios3">มีปัญหา</label>
    </div>
    <div v-if="radioBox === 'risk'">
      <div class="form-check" v-for="(item, index) in risk" :key="index">
        <input
          class="form-check-input"
          type="checkbox"
          :value="item.label"
          :id="'defaultCheck'+index"
        />
        <label class="form-check-label" :for="'defaultCheck'+index">{{item.label}}</label>
      </div>
    </div>
    <div v-if="radioBox === 'problem'">
      <div class="form-check" v-for="(item, index) in problem" :key="index">
        <input
          class="form-check-input"
          type="checkbox"
          :value="item.label"
          :id="'defaultCheck'+index"
        />
        <label class="form-check-label" :for="'defaultCheck'+index">{{item.label}}</label>
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
        { label: "คบเพื่อนในกลุ่มใช้สารเสพติด" },
        { label: "สมาชิกในครอบครัวข้องเกี่ยวกับยาเสพติด" },
        { label: "เคยลองสูบบุหรี่ / กัญชา /ของมึนเมา" },
        { label: "อยู่ในสภาพแวดล้อมที่ใช้สารเสพติด" }
      ],
      problem: [
        { label: "ใช้หรือเสพเองมากกว่า 2 ครั้ง" },
        { label: "มีประวัติเกี่ยวข้องกับสารเสพติด" },
        { label: "เป็นผู้ติดบุหรี่ สุรา  หรือสารเสพติด" }
      ]
    };
  },
    methods: {
        next() {
            this.$store.dispatch('updateFilter1', this.form)
            this.$store.dispatch('filterNext')         
        }
    }
};
</script>

<style>
</style>
