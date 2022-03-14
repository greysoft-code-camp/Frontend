<template>
   <q-card
      class="text-white col-4 q-mx-sm q-mt-sm"
      style="background: #014a88; height:100px; width:250px"
      clickable v-ripple
    >
      <q-card-section  class="flex items-center justify-between">
        <div @click="this.$router.replace(`/list?boardId=${board._id}`)" class="text-subtitle1">{{board.title}}</div>
        <!-- <router-link :to = "`/list/${board._id}`">{{board.title}}</router-link> -->
        <div class="col-auto">
            <q-btn color="grey-7" round flat icon="more_vert">
              <q-menu cover auto-close>
                <q-list>
                  <q-item clickable>
                    <q-item-section @click="deletee" class="text-subtitle1">Remove Card</q-item-section>
                  </q-item>
                </q-list>
              </q-menu>
            </q-btn>
          </div>
         <!-- <q-checkbox
          v-model="val"
          color="white"
          checked-icon="star"
          unchecked-icon="star_border"
          indeterminate-icon="help"
     @click="this.$router.replace('/list')"

        /> -->
      </q-card-section>
    </q-card>
</template>

<script>
import { ref } from 'vue'
import { mapGetters } from 'vuex'

export default {
  setup () {
    return {
      val: ref(false)
    }
  },
  computed: {
    ...mapGetters(['boards']),
  },

  methods:{
    deletee: function() {
     const id = this.board._id
      // this.$store.dispatch('delete')
      console.log(this.board._id)
      this.$store.dispatch('deleteBoard', {id})
  }
  },

  props:['board']
}
</script>
