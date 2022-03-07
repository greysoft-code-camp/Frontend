<template>
  <div class="row q-pl-xl q-pt-lg">
    <div v-for="n in 5" :key="n" class=" q-mx-sm  cursor-pointer"  style="height: 120px">
      <Board />
    </div>

  </div>




</template>

<script>
import Board from 'components/Board.vue'

export default {
  name: 'Boards',
  components:{
    Board
  }
}
</script>

<style >
  .my-content{
  padding: 10px 15px;
  background: rgba(86,61,124,.15);
  border: 1px solid rgba(86,61,124,.2);
  }
</style>
