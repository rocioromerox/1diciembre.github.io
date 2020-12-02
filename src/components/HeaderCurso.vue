<template>
    <div class="contenedor">
        <router-link :to="{name: 'Curso', params: {id: curso.id}}">
            <p>{{curso.nombre}}</p>
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'HeaderCurso',
    props: {
        curso: {}
    }
}
</script>

<style scoped>
</style>