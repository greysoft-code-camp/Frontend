<template>
   <q-card
      class="text-white col-4 q-mx-sm q-mt-sm"
      style="background: #014a88; height:100px; width:250px"
      clickable v-ripple
      to=""
    >
      <q-card-section class="flex items-center justify-between">
        <div class="text-subtitle1">Lorem</div>
         <q-checkbox
          v-model="val"
          color="white"
          checked-icon="star"
          unchecked-icon="star_border"
          indeterminate-icon="help"
        />
      </q-card-section>
    </q-card>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      val: ref(false)
    }
  }
}
</script>
