import axios from "axios"
import { api } from 'boot/axios'
import { useQuasar } from 'quasar'

const state = {
    status: '',
    token: localStorage.getItem('token') || '',
    user: null,
    boardsData : null,
    list:[]
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

    boards(state){
      return state.boardsData
    },
    list(state){
      return state.list
    }
}

// console.log(typeof getters.isLoggedIn(state))

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
    Boards( state, payload){
        // console.log(payload)
        state.boardsData = payload.respData
    },
    // List(){
    //     state
    // },
    Boarddelete( state, payload){
        console.log(payload.id.id)
        const boards = state.boardsData
        // const newBoards = boards.filter(board => board.id === payload.id.id)

        let inde = boards.findIndex((board) => board.id === payload.id.id);
        boards.splice(inde, 1)
        // console.log(boards.forEach(board => {
        //     console.log(board.title)
        // }))
        // state.boardsData = payload.respData
        // return newBoards
        const ids = payload.id.id
        const token = localStorage.getItem('token')
        console.log(token)
        let resp = axios.delete(`https://greycodecamp.herokuapp.com/api/board/${ids}`, {
            headers:{
                'Authorization': 'Bearer ' + token
            }
        })

        return resp

    },
    async addBoard(state, payload){
        console.log(payload.data.user)
        let resp = await axios.post('https://greycodecamp.herokuapp.com/api/board', payload.data, {
            headers:{
                'Authorization': 'Bearer ' + payload.data.user
            }
        })
        // const boards = state.boardsData
        // console.log(boards)

        // const newBoards = boards.push(payload.data)
        // return newBoards
        console.log(resp.data.msg)


    },
    async addList(state, payload){
      console.log(payload.data.user)
      let resp = await axios.post(`https://greycodecamp.herokuapp.com/api/board/${payload.boardId}/list`, {
          data: {
            listName: payload.list
          },
          headers:{
            'Authorization': 'Bearer ' + payload.data.user
          }
      })
      // const boards = state.boardsData
      // console.log(boards)

      // const newBoards = boards.push(payload.data)
      // return newBoards
      console.log(resp.data.msg);
    },
    getLists(state, payload){
      state.list=payload.list;
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
            axios.post('https://greycodecamp.herokuapp.com/api/auth/login', user)
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

    async getB({ commit }, token) {
        // console.log(token.token)
        // console.log(token)
        const tokenB = token.token
        let resp = await axios.get('https://greycodecamp.herokuapp.com/api/board', {
            headers:{
                'Authorization': 'Bearer ' + tokenB
            }
        })
        // .catch((err) => console.log('error'))
        // console.log(resp.data.data)
        const respData = resp.data.data
        commit('Boards', { respData})
    },

    deleteBoard({commit}, id){
        console.log(id)
        const idd = id.id
        console.log(idd)
        commit('Boarddelete', { id})
    },

    addBoard({commit}, data){
        console.log(data)
        commit('addBoard', {data})
    },

    async addL({ commit }, data) {
      /*
      data = {
        token, boardId, list
      }
      */
      commit('addList', { data })
    },

    async getLists({commit}, data){

      const tokenB = data.token;
      // console.log(data)
      let resp = await axios.get(`https://greycodecamp.herokuapp.com/api/board/${data.board}`, {
        headers:{
          'Authorization': 'Bearer ' + tokenB
        }
      })
      const respData = resp.data.data

      // console.log("respDatasss");
      console.log(respData.list);

      // commit('Boards', { respData})

      console.log(respData)
      commit("getLists", {list: respData.list})
    },

    async addList({commit}, data){
      const {token, boardId, listName} = data;

      let response = await axios.post(`https://greycodecamp.herokuapp.com/api/board/${boardId}/list`, {
        data: {
          listName: listName
        },
        headers:{
          'Authorization': 'Bearer ' + token
        }
      })

      // console.log("respDatasss");
      console.log(response);

      // commit('Boards', { respData})

      // console.log(respData)
      commit("getLists", {list: respData.list})
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
