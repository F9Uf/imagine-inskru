<template>
    <div class="filter1">
        <h3>ความสามารถพิเศษ</h3>
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
        <div class="form-control" v-if="radioBox === 'yes'">
            <div class="form-group">
                <input type="text" class="form-control" placeholder="คณิตศาสตร์">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            radioBox: null,
            form: {
                math: '',
                thai: '',
                eng: '',
                sci: '',
                art: '',
                tech: '',
                sport: '',
                social: '',
                etc: ''
            }
        }
    }
}
</script>

<style>

</style>
