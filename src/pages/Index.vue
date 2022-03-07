<template>
  <q-page class="">
    <Boards/>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';
import Boards from '../components/Boards.vue'

export default defineComponent({
  name: 'PageIndex',
  components:{
    Boards
  }
})
</script>
