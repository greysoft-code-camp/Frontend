<template>
  <div class="row q-pl-xl q-pt-lg">
    <!-- {{boards.length}} -->
    <div class="inpp">
      <form @submit.prevent="add">
        <input v-model="boardss" type="text">
      </form>
    </div>
    <div class="row">
      <div v-for="board in boards" :key="board.user_id" class=" q-mx-sm  cursor-pointer row"  style="height: 120px">
        <Board :board='board'/>
      </div>
    </div>
    <!-- {{boards.length}} -->

    <!-- <h1 v-if="!boards">You have no boards</h1> -->

  </div>
</template>

<script>
import Board from 'components/Board.vue'
import axios from 'axios'
import { mapGetters } from 'vuex'

export default {
  name: 'Boards',
  components:{
    Board
  },
  data(){
    return{
      apiUrl: '',
      name: '',
      boardss:''
    }
  },

  computed: {
    ...mapGetters(['boards']),
  },
  mounted(){
        console.log(this.$store);
        console.log(this.boards);
    },

  created(){
        this.getBoards()
    },
  methods: {

    getBoards: function() {
      const token = localStorage.getItem('token')
      this.$store.dispatch('getB', { token}).then(() =>{
          //  this.$router.replace('/page')
          console.log('first')
        })
    },

    add(){
      console.log(this.boardss)
      const name = this.boardss
      // const user = localStorage.getItem('token');
      const user = "ecc39488-2142-473d-ad99-1dfd22bdefbe";
      this.$store.dispatch('addBoard', { user, name})
      this.boardss = ''
     this.$q.notify({
            message: 'board created successfully',
            color: 'primary',
          })
    }

    // async getBoards(){
    //         const token = localStorage.getItem('token')
    //         console.log(token)
    //         let resp = await axios.get('https://greycodecamp.herokuapp.com/api/board', {
    //           headers:{
    //             'Authorization': 'Bearer ' + token
    //           }
    //         }).catch(err=> console.log(err))

    //         if(resp){
    //           console.log(resp.data.data);
    //           const boardData = resp.data.data
    //           this.boards = boardData
    //         }
    //    }
  }
  // methods:{
  //   createBoards(){

  //   }
  // }
}
</script>

<style >
  .my-content{
  padding: 10px 15px;
  background: rgba(86,61,124,.15);
  border: 1px solid rgba(86,61,124,.2);
  }
</style>
