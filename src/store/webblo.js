import axios from "axios"
import { api } from 'boot/axios'

const state = {
    status: '',
    token: localStorage.getItem('token') || '',
    user: null,
}

const getters = {
    userr(state) {
        return state.meal
    },
    useer(state) {
        return state.user
    },
    isLoggedIn: state => state.token && state.user,
    authStatus: state => state.status,
}

const mutations = {
    
    auth_request(state) {
        state.status = 'loading'
    },
    auth_success(state, payload) {
        state.status = 'success'
        state.token = payload.token
        console.log(payload.user)
        state.user = payload.user
        // let puy = state.user.push(payload.user)
        // console.log(puy)
    },
    auth_successre(state, payload) {
        console.log(state, payload);
    },
    auth_error(state) {
        state.status = 'error'
    },
    logout(state) {
        state.status = ''
        state.token = ''
    },
    
}


const actions = {
    login({ commit }, user) {
        return new Promise((resolve, reject) => {
            commit('auth_request')
            axios.post(' https://greycodecamp.herokuapp.com/api/auth/login', user)
                .then(resp => {
                    console.log(resp.data.data.token, resp.data.data.user);
                    const token = resp.data.data.token
                    const user = resp.data.data.user
                    console.log(token);

                    localStorage.setItem('token', token)
                    localStorage.setItem('userdet', JSON.stringify(user))
                    console.log(localStorage.getItem('token'));
                    axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
                    commit('auth_success', { token: token, user: user })
                    resolve(resp)
                })
                .catch(err => {
                    // console.log('error')
                    commit('auth_error')
                    // localStorage.removeItem('token')
                    reject(err)
                })
        })
    },

    

    logout({ commit }) {
        return new Promise((resolve, reject) => {
            commit('logout')
            localStorage.removeItem('token')
            localStorage.removeItem('det')
            localStorage.removeItem('userdet')
                // localStorage.removeItem('plate')
            delete axios.defaults.headers.common['Authorization']
            resolve()
        })
    },
}




export default {
    state,
    mutations,
    actions,
    getters,
}