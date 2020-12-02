<template>
    <div>
        <Header bgblue="bgblue"/>
        <p style="padding-top:200px;">       
           
        </p>
 
    </div>
</template>

<script>
import Header from "@/components/Header.vue"
import ItemCompra from "@/components/ItemCompra.vue"
import { mapState } from "vuex"

export default {
    name: 'MisCompras',
    components: {
        Header,
        ItemCompra
    },
    computed: {
        ...mapState(['carrito'])
    }

}
</script>

<style>

</style>