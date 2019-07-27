<template>
    <div class="row">
        <div class="col-md-5 mx-auto">
            <br><br>
            <center><H1>LOGIN</H1></center><br>
            <div class="form-group">
                <input class="form-control" placeholder="ID"/>
            </div>
            <div class="form-group">
                <input type="password" class="form-control" placeholder="password">
            </div>
            <router-link to="/home">
                <button class="btn btn-primary btn-block">Login</button>
            </router-link>

        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
