<template>
    <div class="row row-login">
        <BannerLogin/>
        <div class="col-sm-4 sm-4">
            <b-nav tabs fill class="m-auto">
                    <b-nav-item to="/login" exact-active-class="active">Iniciar Sesión</b-nav-item>
                    <b-nav-item to="/register" active-class="active">Registrarse</b-nav-item>
            </b-nav>   
            <Registro/> 
        </div>
    </div>
</template>

<script>
import BannerLogin from "@/components/BannerLogin.vue"
import Registro from "@/components/Registro.vue"
import Header from '../components/Header.vue'

export default {
    name: 'Register',
    components: {
        BannerLogin,
        Registro
    }
}
</script>


<style scoped>
/*Versión celular*/
    .row-login {
        width: 375px;
        height: 100vh;
        margin: 0 auto;
        background: #F8F8FA;
    }

    .sm-4 {
        padding: 0;
    }

    @media screen and (min-device-width:1366px){
        .row-login {
            width: 1366px;
        }
    }
</style>