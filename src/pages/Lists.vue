<template>
  <div class="row justify-between items-center q-px-lg">
    <q-btn outline color="primary" to="/page">Back</q-btn>
    <!-- Add List card -->
      <div class="q-my-auto" style="">
        <!-- <q-space/> -->
        <q-btn color="primary q-mx-auto" icon="add" label="Add List" style="width:100%" @click="alert = true" />
        <!-- <q-space/> -->
      </div>
  </div>


 <div class="row q-px-lg q-mt-xs q-mx-auto">
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

    <q-card class=" q-mt-lg q-mx-auto" style="width:22%" v-for="item in list" :key="item">

       <div class="row items-center no-wrap bg-primary">
          <div class="col q-ml-md">
            <div class="text-h6  text-white" style="text-transform:capitalize">{{item}}</div>
          </div>

          <div class="col-auto">
            <q-btn color="white" round flat icon="more_vert">
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

      <q-list class="q-mt-md q-mb-xl">
        <q-item clickable v-ripple v-for="listItem in listItems" :key="listItem._id" v-show="listItem.list === item" class="q-pa-xs">
          <q-item-section class="q-my-none q-px-md" style="background:rgb(128, 128, 128,0.2)">
            <q-item-label style="text-transform:capitalize" > {{listItem.body}} </q-item-label>
          </q-item-section>
        </q-item>
      </q-list>

      <!-- Add List Item Button  -->
      <div class="row q-mt-xl " style="position:absolute; bottom: 0; width:100%">

        <q-btn color="primary q-mx-auto"  flat icon="add" label="New Item" @click="() => {itemShow = true; activeList = item}" />

      </div>

      <q-dialog v-model="itemShow">
          <q-card>
            <q-card-section>
              <div class="text-h6">Add New Item</div>
            </q-card-section>
              <q-card-section class="q-pt-none">
                <q-input name="text" outlined v-model="listItem" />
              </q-card-section>

              <q-card-actions align="right">
                <q-btn type = "submit" label="Add" color="primary" v-close-popup @click="function(){return addListItem(item)}" />
              </q-card-actions>
          </q-card>
        </q-dialog>


    </q-card>






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
      listName: "",
      activeList: "",
      listItem: ""
    }
  },
  computed: {
    ...mapGetters(['list', 'listItems'])
  },
  methods:{

    getNewItem(){
      console.log('Hello Tobi');
    },

    getNewList(){
      console.log('Hello There...');
    },

    addList(){
      this.$store.dispatch('addList', {token, listName : this.listName, boardId: id})
    },
    addListItem(){
      let list = this.activeList;
      this.$store.dispatch('addListItem', {token, list, listItem: this.listItem , boardId: id})
    }
  },
  mounted(){

    this.$store.dispatch('getLists', {token, board: id})
    this.$store.dispatch('getListItems', {token, board: id})

  }


}
</script>

<style scoped>
  @media screen and (max-width: 700px) {
    .q-card{
      width: 28% !important;
    }
}
 @media screen and (max-width: 550px) {
    .q-card{
      width: 40% !important;

    }
}
@media screen and (max-width: 410px) {
    .q-card{
      width: 80% !important;

    }
}
</style>
