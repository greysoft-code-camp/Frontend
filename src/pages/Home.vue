<template>

    <div class="home q-pa-md bg-primary" style="display : flex; align-items:center; justify-content:space-between;">
      <h5 class="text-white text-bold text-h4">Grello</h5>
      <!-- <span class="text-primary">ello</span> -->
      <div>

        <q-btn-dropdown color="primary" label="" dropdown-icon="change_history">
          <q-list>
            <q-item clickable v-close-popup @click="onItemClick">
              <q-item-section>
                <q-item-label @click="this.$router.replace('/login')">Login</q-item-label>
              </q-item-section>
            </q-item>

            <q-item clickable v-close-popup @click="onItemClick">
              <q-item-section>
                <q-item-label @click="this.$router.replace('/register')">Register</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>

      </div>
    </div>

    <div class="q-ma-xl q-pa-xl chai" style="display: flex; align-items: center;">
      <div class="col q-pa-lg body">
        <h3 class="text-bold text-primary q-mb-lg">Grello help our teams move work forward</h3>
        <p class="text-body1 text-grey q-mb-xl">collaborate, manage projects and reach new productivity peaks. from your homes to the office</p>
        <div style="display: flex;">
        <!-- <q-input  class="q-mr-lg" outlined v-model="text" placeholder="search" style="width: 70%"/> -->
         <q-btn  class="btn" style="width:70%" color="primary" label="Get Started" to="/register" />
        </div>
      </div>
      <div class="col q-pa-xl hey" style="">
        <q-img src="../assets/colab.svg" alt="home_image"/>

      </div>
    </div>

</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home'
})
</script>

<style scoped>
@media screen and (max-width: 820px) {
  .home {
    background-color: lightblue;
  }
  .hey{
    visibility: hidden;
  }

  .body{
    /* margin: 0 auto; */
    width: 100%;
    height: 80%;
    /* justify-self: center; */
    /* background: red; */
     position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);


  }
  p{
    padding: 30px 0;
  }
  .chai{
    position: relative;
  }



}

@media screen and (max-width: 380px) {
  .btn{
    margin: 0 auto;
    width: 100% !important;
  }
  h3{
    font-size: 2.1rem;
    text-align:left;
  }
}

</style>
