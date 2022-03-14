<template>
  <div class="row  q-pt-lg hi ">
    <!-- {{boards.length}} -->
    <!-- <div class="inpp">
      <form @submit.prevent="add">
        <input v-model="boardss" type="text">
      </form>
    </div> -->

    <div class="row hello ">
      <div v-for="board in boards" :key="board.id" class=" q-mx-sm cursor-pointer"  style="height: 120px">
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
      // console.log(this.$store);

  },

  created(){
        this.getBoards()
    },
  methods: {

    getBoards: function() {
      const token = localStorage.getItem('token')
      this.$store.dispatch('getB', { token})
    },

    add(){
      console.log(this.boardss)
      const title = this.boardss
      const user = localStorage.getItem('token')
      this.$store.dispatch('addBoard', { user, title}).then(() => {
        const token = localStorage.getItem('token')
        this.$store.dispatch('getB', { token})
      })
      this.boardss = ''
      this.$q.notify({
        message: 'board created successfully',
        color: 'primary',
      })
      // this.getBoards()
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
  },
  mounted(){
    this.$store.dispatch('emptyLists')
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

  @media screen and (max-width: 564px) {
    .hello{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, 0);
    padding: 10px;

  }

  .hi{
    position: relative;
  }
}
</style>
