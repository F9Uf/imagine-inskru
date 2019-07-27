<template>
    <div class="filter1">
        <h3>1. ความสามารถพิเศษ</h3>
        <div class="form-check">
            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="yes" v-model="radioBox">
            <label class="form-check-label" for="exampleRadios1">
            มี
            </label>
        </div>
            <div class="form-check">
            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="no" v-model="radioBox">
            <label class="form-check-label" for="exampleRadios2">
            ไม่มี
            </label>
        </div>
        <div class="form" v-if="radioBox === 'yes'">
            <div class="form-group" v-for="(item, index) in form" :key="index">
                <input id="form" type="text" class="form-control" :placeholder="item.placholder" v-model="item.text">
            </div>
        </div>
        <button class="btn btn-primary" @click="next()">ถัดไป</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            radioBox: '',
            form: [
                { title: 'math', text: '' , placholder: 'กลุ่มสาระการเรียนรู้คณิตศาสตร์'},
                { title: 'thai', text: '' , placholder: 'กลุ่มสาระการเรียนรู้ภาษาไทย'},
                { title: 'eng', text: '' , placholder: 'กลุ่มสาระการเรียนรู้ภาษาต่างประเทศ'},
                { title: 'sci', text: '' , placholder: 'กลุ่มสาระการเรียนรู้วิทยาศาสตร์'},
                { title: 'art', text: '' , placholder: 'กลุ่มสาระการเรียนรู้ศิลปะ'},
                { title: 'tech', text: '' , placholder: 'กลุ่มสาระการเรียนรู้การงานอาชีพและเทคโนโลยี'},
                { title: 'sport', text: '' , placholder: 'กลุ่มสาระการเรียนรู้สุขศึกษาและพลศึกษา'},
                { title: 'social', text: '' , placholder: 'กลุ่มสาระการเรียนรู้สังคมศึกษา ศาสนา และวัฒนธรรม'},
                { title: 'etc', text: '' , placholder: 'อื่นๆ'},
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
