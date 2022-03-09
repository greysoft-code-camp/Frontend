<template>
 <q-btn to="/page">back</q-btn>
 <div class="row">
    <!-- <q-card class="q-ml-xl q-mt-lg q-pa-md" style="width:20%" v-for="n in 3" :key="n">

       <div class="row items-center no-wrap">
          <div class="col">
            <div class="text-h6">List Item</div>
          </div>

          <div class="col-auto">
            <q-btn color="grey-7" round flat icon="more_vert">
              <q-menu cover auto-close>
                <q-list>
                  <q-item clickable>
                    <q-item-section>Delete List</q-item-section>
                  </q-item>
                </q-list>
              </q-menu>
            </q-btn>
          </div>
        </div>

      <q-list class="q-mt-md">
        <q-item clickable v-ripple v-for="n in 3" :key="n">
          <q-item-section>
            <q-item-label> Glory </q-item-label>
          </q-item-section>
        </q-item>
      </q-list>

      <div class="row q-mt-lg">
        <q-space/>
        <q-btn color="primary" flat icon="add" label="Add List Item" @click="item = true" />
        <q-space/>
      </div>

      <q-dialog v-model="item">
          <q-card>
            <q-card-section>
              <div class="text-h6">Add New Item</div>
            </q-card-section>

            <q-card-section class="q-pt-none">
              <q-input name="text" outlined/>
            </q-card-section>

            <q-card-actions align="right">
              <q-btn  label="Add" color="primary" v-close-popup @click="getNewItem" />
            </q-card-actions>
          </q-card>
        </q-dialog>


    </q-card> -->

    <q-card class="q-ml-xl q-mt-lg q-pa-md" style="width:20%" v-for="item in list" :key="item">

       <div class="row items-center no-wrap">
          <div class="col">
            <div class="text-h6">{{item}}</div>
          </div>

          <div class="col-auto">
            <q-btn color="grey-7" round flat icon="more_vert">
              <q-menu cover auto-close>
                <q-list>
                  <q-item clickable>
                    <q-item-section>Delete List</q-item-section>
                  </q-item>
                </q-list>
              </q-menu>
            </q-btn>
          </div>
        </div>

      <q-list class="q-mt-md">
        <q-item clickable v-ripple v-for="n in 3" :key="n">
          <q-item-section>
            <q-item-label> Glory </q-item-label>
          </q-item-section>
        </q-item>
      </q-list>

      <!-- Add List Item Button  -->
      <div class="row q-mt-lg">
        <q-space/>
        <q-btn color="primary" flat icon="add" label="Add List Item" @click="itemShow = true" />
        <q-space/>
      </div>

      <q-dialog v-model="itemShow">
          <q-card>
            <q-card-section>
              <div class="text-h6">Add New Item</div>
            </q-card-section>
              <q-card-section class="q-pt-none">
                <q-input name="text" outlined />
              </q-card-section>

              <q-card-actions align="right">
                <q-btn type = "submit" label="Add" color="primary" v-close-popup @click="addList" />
              </q-card-actions>
          </q-card>
        </q-dialog>


    </q-card>




      <!-- Add List card -->
      <div class="row q-mt-lg q-ml-lg" style="width:200px">
        <q-space/>
        <q-btn color="primary"  icon="add" label="Add List" style="width:100%" @click="alert = true" />
        <q-space/>
      </div>

      <!-- Modal For Add List Card  -->
         <q-dialog v-model="alert">
            <!-- <form @submit.prevent="addList"> -->
              <q-card>
                <q-card-section>
                  <div class="text-h6">Add New List</div>
                </q-card-section>

                  <q-card-section class="q-pt-none">
                    <q-input name="text" outlined v-model="listName"/>
                  </q-card-section>

                  <q-card-actions align="right">
                    <q-btn  label="Add" color="primary" v-close-popup @click="addList" />
                  </q-card-actions>
                </q-card>
              <!-- </form> -->
        </q-dialog>


  </div>


</template>

<script>
import { ref } from 'vue'
import { mapGetters } from 'vuex';
const token = localStorage.getItem('token')
let uri = window.location.href.split('/');
let id = uri[uri.length-1];

export default {
  data(){
    return{
      alert: ref(false),
      itemShow: ref(false),
      lists: ref([]),
      listName: ""
    }
  },
  computed: {
    ...mapGetters(['list'])
  },
  methods:{

    getNewItem(){
      console.log('Hello Tobi');
    },

    getNewList(){
      console.log('Hello There...');
    },

    addList(){
      // e.preventDefault();
      // console.log("List added");
      this.$store.dispatch('addList', {token, listName : this.listName, boardId: id})
    }
  },
  mounted(){

    this.$store.dispatch('getLists', {token, board: id})

  }


}
</script>

<style scoped>

</style>
