<template>
    <div class="table-responsive-sm">
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
</template>

<script>
export default {
    name: 'table',
    data() {
        return {
            form: [
                {room: 4, num: 1, stu: 25, class: 'วิทย์คณิต'},
                {room: 4, num: 2, stu: 24, class: 'ศิลป์คำนวณ'},
                {room: 4, num: 3, stu: 29, class: 'ศิลป์ภาษา'},
                {room: 5, num: 1, stu: 22, class: 'วิทย์คณิต'},
                {room: 5, num: 2, stu: 30, class: 'ศิลป์คำนวณ'},
                {room: 5, num: 3, stu: 29, class: 'ศิลป์ภาษา'},
                {room: 6, num: 1, stu: 33, class: 'วิทย์คณิต'},
                {room: 6, num: 2, stu: 24, class: 'ศิลป์คำนวณ'},
                {room: 6, num: 3, stu: 23, class: 'ศิลป์ภาษา'},
            ]
        }
    }
}
</script>

<style>

</style>
