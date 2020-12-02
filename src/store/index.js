import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'
import { db, auth } from './../firebase' 

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cursos: [],
    carrito: [],
    curso: {
      nombre:'',
      descripcion:'',
      precio:null,
      imagen:''
    },
    usuario: null,
    error: null,
    loginUser: null,
    loginError: null
  },

  mutations: {
    getCursosMutation(state, payload){
      state.cursos = payload
    },

    getCursoMutation(state, payload){
      state.curso = payload
    },

    addCarritoMutation(state, payload) {
      state.carrito.push(payload)
      console.log(state.carrito)
    },

    nuevoUsuarioMutation(state, payload){
      state.usuario = payload
    },

    nuevoUsuarioMutationError(state, payload){
      state.error = payload
    },

    loginUserMutation(state, payload){
      state.loginUser = payload
    },

    loginUserMutationError(state, payload){
      state.loginError = payload
    }
  },

  actions: {
    /*OBTENER LOS CURSOS DESDE FIREBASE */
    getCursosAction({commit}){
      let cursos = [];
      db.collection('cursos').get().then(res => {
        res.forEach(doc => {
          let curso = doc.data();
          curso.id = doc.id;
          cursos.push(curso)
          commit('getCursosMutation', cursos)
        })
      })
    },

    /*OBTENER UN CURSO DESDE FIREBASE POR SU ID */
    getCursoAction({commit}, id){
      db.collection('cursos').doc(id).get().then(doc => {
        let curso = doc.data();
        curso.id = doc.id;
        commit('getCursoMutation', curso) 
      })
    },

    /*AGREGAR CURSOS AL CARRITO */
    addCarritoAction({commit}, curso) {
      commit('addCarritoMutation', curso)
    },

    /*CREAR UN NUEVO USUARIO EN FIREBASE*/
    nuevoUsuarioAction({commit}, usuario){
      auth.createUserWithEmailAndPassword(usuario.email, usuario.password)
        .then(res => {
          const usuario = {
            email: res.user.email,
            uid: res.user.uid
          }

          commit('nuevoUsuarioMutation', usuario)
          router.push('/login')
        })
        
        .catch(error => {
          commit('nuevoUsuarioMutationError', error.message)
        })
    },

    /*INICIAR SESION CON FIREBASE*/
    loginUserAction({commit}, usuario){
      auth.signInWithEmailAndPassword(usuario.email, usuario.password)
        .then(res => {
          commit('loginUserMutation', {email:res.user.email, uid:res.user.uid})
          router.push('/miscompras')
        })

        .catch(error => {
          commit('loginUserMutationError', error.message)
        })
    },

    
  },

  modules: {
  }
})
