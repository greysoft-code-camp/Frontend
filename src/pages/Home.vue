<template>
    <q-page>
    <div class="q-pa-md" style="display : flex; align-items:center; justify-content:space-between;">
    <h5 class="">Gr<span class="text-primary">ello</span></h5>
    <div>


    <q-btn-dropdown color="primary" label="" dropdown-icon="change_history">
      <q-list>
        <q-item clickable v-close-popup @click="onItemClick">
          <q-item-section>
            <q-item-label>Login</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-close-popup @click="onItemClick">
          <q-item-section>
            <q-item-label>Register</q-item-label>
          </q-item-section>
        </q-item>


      </q-list>
    </q-btn-dropdown>


    </div>
    </div>

    <div class="" style="display: flex; align-items: center;">
      <div class="col q-pa-lg">
        <h4 class="text-bold text-primary">Grello help our teams move work forward</h4>
        <p class="text-body1 text-grey">collaborate, manage projects and reach new productivity peaks. from your homes to the office</p>
        <div style="display: flex;">
        <q-input  class="q-mr=lg" outlined v-model="text" placeholder="search" style="width: 70%"/>
         <q-btn  class="q-ml-lg" color="primary" label="Search" />
        </div>
      </div>
    <div class="col" style="height : 100%">
      <q-img src="assets/colab.svg" alt="home_image"/>

    </div>
    </div>
   </q-page>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home'
})
</script>

