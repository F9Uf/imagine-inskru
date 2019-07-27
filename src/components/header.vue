<template>
    <nav class="navbar navbar-expand-md navbar-dark mb-3 bg-success">
        <a class="navbar-brand" href="/">Imagine</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <router-link class="nav-link" to="/home">ข้อมูลรายห้อง</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/personal" class="nav-link" href="#">เพิ่มนักเรียนใหม่</router-link>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <img :src="img" width="30" height="30" class="img-profile">
                    </a>
                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                        <h6 class="dropdown-header">ลงชื่อเข้าใช้ด้วย <b>{{ userId }}</b></h6>
                        <div class="dropdown-divider"></div>
                        <router-link class="dropdown-item" to="#" >แก้ไขข้อมูลส่วนตัว</router-link>
                        <div class="dropdown-divider"></div>
                        <router-link to="/" class="dropdown-item" >ออกจากระบบ</router-link>
                    </div>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            userId: 'PRA250',
            img: 'http://ircat.srvc.ac.th/systemImages/Manager.png'
        }
    }
}
</script>

<style>

</style>
