<template>
  <div class="filter10">
    <h3>10. นักเรียนที่มีความต้องการพิเศษ</h3>
    <div class="form-check" v-for="(item, index) in list" :key="index">
      <input
        class="form-check-input"
        type="checkbox"
        :value="item.label"
        :id="'defaultCheck'+index"
      />
      <label class="form-check-label" :for="'defaultCheck1'+index">{{item.label}}</label>
    </div>
    <button class="btn btn-primary" @click="next()">ถัดไป</button>
  </div>
</template>

<script>
export default {
    data() {
        return {
            list: [
              {label:'มีความบกพร่องทางการเห็น'},
              {label:'มีความบกพร่องทางการได้ยิน'},
              {label:'มีความบกพร่องทางสติปัญญา'},
              {label:'มีความบกพร่องทางร่างกายและสุขภาพ'},
              {label:'มีความบกพร่องทางการเรียนรู้'},
              {label:'มีความบกพร่องทางพฤติกรรมหรืออารมณ์'},
              {label:'มีความบกพร่องทางการพูดและภาษา'},
              {label:'ออทิสติก'},
              {label:'มีสมาธิสั้น'},
              {label:'พิการซ้ำซ้อน (มีความบกพร่องตั้งแต่ 2 ประเภทขึ้นไป)'},
              {label:'อื่นๆ'}
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
