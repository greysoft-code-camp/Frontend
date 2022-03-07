<template>
  <div>

  </div>
   <q-card class="q-ml-xl q-mt-lg q-pa-md" style="width:20%">

       <div class="row items-center no-wrap">
          <div class="col">
            <div class="text-h6">List Item</div>
          </div>

          <div class="col-auto">
            <q-btn color="grey-7" round flat icon="more_vert">
              <q-menu cover auto-close>
                <q-list>
                  <q-item clickable>
                    <q-item-section>Remove Card</q-item-section>
                  </q-item>
                </q-list>
              </q-menu>
            </q-btn>
          </div>
        </div>

      <q-list class="q-mt-md">
        <q-item clickable v-for="n in 5" :key="n">
          <q-item-section avatar>
            <q-icon color="primary" name="local_bar" />
          </q-item-section>

          <q-item-section>
            <q-item-label>Bar XYZ</q-item-label>
            <q-item-label caption>Have a drink.</q-item-label>
          </q-item-section>
        </q-item>


      </q-list>
    </q-card>


</template>

<script>
export default {

}
</script>

<style scoped>

</style>
