<template>
    <div class="filter3">
        <h3>3. ด้านสุขภาพ</h3>
        <div class="form-check">
            <input type="radio" name="raido" class="form-check-input" v-model="radio" value="r1">
            <label for="form-check-label">ปกติ</label>
        </div>
        <div class="form-check">
            <input type="radio" name="raido" class="form-check-input" v-model="radio" value="r2">
            <label for="form-check-label">เสี่ยง</label>
        </div>
        <div class="form-group" v-if="radio === 'r2'">
            <input type="text" class="form-control" v-model="form.r1"  placeholder="โปรดระบุ">
        </div>
        <div class="form-check">
            <input type="radio" name="raido" class="form-check-input" v-model="radio" value="r3">
            <label for="form-check-label">มีปัญหา</label>
        </div>
        <div class="form-group" v-if="radio === 'r3'">
            <input type="text" class="form-control" v-model="form.r2" placeholder="โปรดระบุ">
        </div>
        <button class="btn btn-primary" @click="next()">ถัดไป</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            radio: null,
            form: {
                r1: '',
                r2: '',
            }
        }
    },
    methods: {
        next() {
            this.$store.dispatch('filterNext')
        }
    }
}
</script>

<style>

</style>
