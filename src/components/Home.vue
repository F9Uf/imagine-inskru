<template>
    <div>
        <button v-on:click="changeGrade" class="btn btn-danger mr-1">ผลการเรียนมีความเสี่ยง</button>
        <button v-on:click="late = true" class="btn btn-warning">มีปัญหาขาดเรียน</button>
        <button v-on:click="grade = false; late = false" class="btn btn-info">ล้าง</button>
        <div class="table-responsive-sm mt-2">
            <table class="table">
                <thead class="thead-dark">
                    <tr>
                        <th class="th-sm">ชั้น</th>
                        <th>ห้อง</th>
                        <th>จำนวนนักเรียน</th>
                        <th>ประเภท</th>
                        <th></th>
                    </tr>
                </thead>

                <tbody>
                    <tr v-for="(f,i) in form" :key="i">
                        <td>{{ f.room  }}</td>
                        <td>{{ f.num  }}</td>
                        <td>{{ f.stu  }}</td>
                        <td>{{ f.class  }}</td>
                        <td>
                            <router-link to="student"><button class="btn btn-primary">ดู</button></router-link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    name: 'table',
    data() {
        return {
            form: [
                {room: 4, num: 1, stu: 25, class: 'วิทย์คณิต', late: true, grade: true},
                {room: 4, num: 2, stu: 24, class: 'ศิลป์คำนวณ', late: true, grade: false},
                {room: 4, num: 3, stu: 29, class: 'ศิลป์ภาษา', late: false, grade: true},
                {room: 5, num: 1, stu: 22, class: 'วิทย์คณิต', late: false, grade: false},
                {room: 5, num: 2, stu: 30, class: 'ศิลป์คำนวณ', late: true, grade: false},
                {room: 5, num: 3, stu: 29, class: 'ศิลป์ภาษา', late: false, grade: false},
                {room: 6, num: 1, stu: 33, class: 'วิทย์คณิต', late: false, grade: false},
                {room: 6, num: 2, stu: 24, class: 'ศิลป์คำนวณ', late: true, grade: true},
                {room: 6, num: 3, stu: 23, class: 'ศิลป์ภาษา', late: false, grade: false},
            ],
            temp = null,
            late: false,
            grade: false
        }
    },
    methods: {
        changeGrade () {
            if (this.grade === false) {
                temp = form;
                return this.form = this.form.filter(e => e.grade);
            } else {
                form.grade = false;
                return this.form = this.temp;
            }
        }
    }
}
</script>
<style>

</style>
