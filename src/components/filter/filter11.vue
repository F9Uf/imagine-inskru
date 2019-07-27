<template>
    <div class="filter3">
        <h3>11. ด้านการใช้เครื่องมือสื่อสารอิเล็กทรอนิกส์</h3>
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
        
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
        ส่ง
        </button>

        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">แจ้งเตือน</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    สำเร็จ!!
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <router-link to="/home">
                        <button type="button" class="btn btn-primary" data-dismiss="modal">Ok</button>
                    </router-link>
                </div>
                </div>
            </div>
        </div>
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
