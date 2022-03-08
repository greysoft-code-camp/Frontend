<template>
  <div class="row">
    <q-card class="q-ml-xl q-mt-lg q-pa-md" style="width:20%" v-for="n in 3" :key="n">

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

<!-- Add List Button  -->
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


    </q-card>




      <!-- Add List card -->
      <div class="row q-mt-lg q-ml-lg" style="width:200px">
        <q-space/>
        <q-btn color="primary"  icon="add" label="Add List" style="width:100%" @click="alert = true" />
        <q-space/>
      </div>

      <!-- Modal For Add List Card  -->
         <q-dialog v-model="alert">
          <q-card>
            <q-card-section>
              <div class="text-h6">Add New List</div>
            </q-card-section>

            <q-card-section class="q-pt-none">
              <q-input name="text" outlined/>
            </q-card-section>

            <q-card-actions align="right">
              <q-btn  label="Add" color="primary" v-close-popup  @click="getNewList"/>
            </q-card-actions>
          </q-card>
        </q-dialog>


  </div>


</template>

<script>
import { ref } from 'vue'

export default {
  data(){
    return{
      alert: ref(false),
      item: ref(false)
    }
  },
  methods:{
    getNewItem(){
      console.log('Hello Tobi');
    },

    getNewList(){
      console.log('Hello There...');
    }
  }


}
</script>

<style scoped>

</style>
