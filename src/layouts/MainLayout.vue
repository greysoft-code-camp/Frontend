<template>
  <q-layout view="lHh Lpr lFf">

    <q-header elevated v-if="$router.currentRoute.value.path === '/page' || $router.currentRoute.value.path === '/list'">
      <q-toolbar style="height: 10px;">
        <!--<q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />-->
        <div class="q-pa-md">
    <q-btn-dropdown color="primary" label="Board">
      <q-list>
        <q-item clickable v-close-popup @click="onItemClick" v-for="board in boards" :key="board.id" >
          <q-item-section >
            <q-item-label @click="this.$router.replace('/list')" >{{ board.title }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-btn-dropdown>




  </div>
  <q-input color="white" placeholder-color="white" outlined v-model="text" dense="dense">
        <template v-slot:append>
          <q-icon name="search" color="white" />
        </template>
      </q-input>

        <q-toolbar-title class="flex flex-center">
          <p clickable v-ripple class="cursor-pointer " >greyflow</p>
        </q-toolbar-title>

        <div>

        <ul>
          <q-tabs class="q-mr-xl">
       <q-btn round color="white" class="hey"  flat icon="add"  @click="inception = true" />


          <q-dialog v-model="inception">
            <q-card>
              <q-card-section>
                <div class="text-h6">Add Boards</div>
              </q-card-section>

              <q-card-section class="q-pt-none">
                <form @submit.prevent="add">
                  <q-input outlined v-model="boardss" type="text" placeholder="Board Name" />
                </form>
              </q-card-section>

              <q-card-actions align="right" class="text-primary">
                <q-btn flat label="Add Board"  @click="() => {add(); inception = false}" />
                <!-- <q-btn flat label="Close" v-close-popup /> -->
              </q-card-actions>
            </q-card>
          </q-dialog>


            <q-btn round color="white"  flat icon="info" class=" hey"/>
            <q-btn round color="white"  flat icon="notifications" class="hey" />
            <q-btn round color="white"  flat icon="logout" @click="logout" />
          </q-tabs>
        </ul>

        </div>
      </q-toolbar>
    </q-header>



    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

import { defineComponent, ref } from 'vue'
import axios from 'axios';
import { mapGetters } from 'vuex';


export default defineComponent({
  name: 'MainLayout',
  data(){
    return{
    boardss: '',
    }
  },

  computed:{
    ...mapGetters(['boards'])
  },
  mounted(){
    console.log(this.$store);
  },
  created(){
    this.getBoards()
  },

  methods:{

    getBoards: function() {
      const token = localStorage.getItem('token')
      this.$store.dispatch('getB', { token}).then(() =>{
          //  this.$router.replace('/page')
          console.log('first')
        })
    },

    add(){
      console.log(this.boardss);
      const title =this.boardss
      const user = localStorage.getItem('token')
      this.$store.dispatch('addBoard', {user, title})
      this.boards = ''
      this.$q.notify({
        message: 'Boards created successfully',
        color: 'primary'
      })
    },

    logout(){
      this.$store.dispatch('logout');
      this.$router.replace('/');
    }
  },



  setup () {
    return {
      inception: ref(false),
      secondDialog: ref(false),
      // apiUrl: 'https://greycodecamp.herokuapp.com/api/board'
    }
  },

  // methods:{
  //   addNewBoard(){
  //     axios.get(`${this.apiUrl}`).then(response =>{
  //       console.log('response:', response);

  //     })
  //   }

  // }



})



</script>


<style scoped>


@media screen and (max-width: 700px) {
    /* .q-card{
      width: 80% !important;

    } */

    .q-input{
      display:none
    }
    .hey{
      display:none
    }
    .q-header{
      display: flex;
      justify-content: space-evenly;
      align-items: center;
    }
}

</style>
