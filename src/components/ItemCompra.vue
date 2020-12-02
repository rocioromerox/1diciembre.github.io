<template>
        <tr class="fila">
            <td><img :src="`/img/${curso.imagen}.jpg`" alt=""></td>
            <td>{{curso.nombre}}</td>
            <td>S/. {{curso.precio}}</td>
            <td>
                <b-button variant="success">X</b-button>
            </td>
        </tr>
</template>

<script>

export default {
    name: 'ItemCompra',
    props: {
        curso: {}
    }
}
</script>

<style scoped>
    img {
        width: 60px; 
        height: 50px;
    }

    th, td {
        vertical-align: middle;
    }

</style>