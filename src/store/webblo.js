import axios from "axios"
import { api } from 'boot/axios'
import { useQuasar } from 'quasar'

const global_token = "zgPjRcznwOvOedpKxidaqYZRUD0BjmAUUDblOyQco18XpSko7H";
// const global_token = "zgPjRcznwOvOedpKxidaqYZRUD0BjmAUUDblOyQco18XpSko7H";

const state = {
    status: '',
    token: localStorage.getItem('token') || '',
    user: null,
    boardsData : null,
    list: []
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
        console.log(payload)
        state.boardsData = payload.respData
    },

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
            // headers:{
            //     'Authorization': 'Bearer ' + token
            // }
        })

        return resp

    },
    async addBoard(state, payload){
        console.log(payload.data.user)
        console.log(payload.data);
        // const token = localStorage.getItem('token')
        let resp = await axios.post(`https://lumen-api.greysoft.com.ng/api/boards/create?api_token=${global_token}`, payload.data);

        let boards = [...state.boardsData];
        boards.push(resp.data.board);

        // state.boardsData = boards;
    },
    getLists(state, payload){
      state.list=payload.list;
    },
    addLists(state, payload){
      state.list=payload.list;
    },
    async addListItem(state, payload){
      console.log('payload')
      console.log(payload.data)
      payload=payload.data;
      // let resp = await axios.post(`https://greycodecamp.herokuapp.com/api/todo/${payload.boardId}`, {body: payload.listItem})
      let resp = await axios.post(`https://lumen-api.greysoft.com.ng/api/tasks/create/1?api_token=7FZKMN2e4OxywtSqvbT3AjyaBUocgSw345jYDIsttoTvrEChxR`, {body: payload.listItem})

      console.log(resp);
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
            axios.post('https://lumen-api.greysoft.com.ng/api/login', user)
                .then(resp => {
                    console.log(resp.data.data.token, resp.data.data.user);
                    const token = resp.data.data.token
                    const user = resp.data.data.user
                    console.log(token);

                    localStorage.setItem('token', token)
                    localStorage.setItem('userdet', JSON.stringify(user))
                    console.log(localStorage.getItem('token'));
                    // axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
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
        console.log(token.token)
        console.log(token)
        const tokenB = token.token
        let resp = await axios.get(`https://lumen-api.greysoft.com.ng/api/boards?api_token=${global_token}`, {
            // headers:{
            //     'Authorization': 'Bearer ' + tokenB
            // }
        })
        // .catch((err) => console.log('error'))
        console.log(resp.data)
        const respData = resp.data.boards
        console.log(respData);
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



// List Part
        async addL({ commit }, data) {
          /*
          data = {
            token, boardId, list
          }
          */
          commit('addList', { data })
        },

        async getLists({commit}, data){
          // console.log(data)
          // const tokenB = data.token;
          // console.log(data)
          let { token, board } = data;
          // let resp = await axios.get(`http://192.168.130.83:8000/api/lists/${board}?api_token=${global_token}`);
          let resp = await axios.get(`https://lumen-api.greysoft.com.ng/api/lists/${board}?api_token=${global_token}`);
          const respData = resp.data.lists

          // console.log("respDatasss");
          console.log(respData);

          // commit('Boards', { respData})

          // console.log(state.list);

          // console.log(respData)
          commit("getLists", {list: respData})
        },

        async addList({commit}, data){
          const {token, boardId, listName} = data;

          console.log(listName)
          console.log(boardId)
          // console.log(listName)
          let response = await axios.post(`https://lumen-api.greysoft.com.ng/api/lists/create/${boardId}?api_token=${global_token}`, {lists: [listName]})

          console.log(response);
          let list = response.list;

          commit("addLists", {list})
        },
        async addListItem({commit}, data){
          // const {token, boardId, list} = data;

          commit("addListItem", {data})
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
