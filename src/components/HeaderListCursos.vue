<template>
    <div>
        <HeaderCurso
            v-for="curso in cursos" :key="curso.id" 
            :curso="curso"
        />
    </div>
</template>

<script>
import HeaderCurso from "@/components/HeaderCurso.vue"
import { mapActions, mapState } from "vuex"

export default {
    name: 'HeaderListCursos',
    components: {
        HeaderCurso
    },
    methods: {
        ...mapActions(['getCursosAction'])
    },
    computed: {
        ...mapState(['cursos'])
    },
    mounted() {
        this.getCursosAction()
    }
}
</script>

<style>





</style>