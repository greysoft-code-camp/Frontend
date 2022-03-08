<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar style="height: 10px;">
        <!--<q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />-->
        <div class="q-pa-md">
    <q-btn-dropdown color="primary" label="Board">
      <q-list>
        <q-item clickable v-close-popup @click="onItemClick">
          <q-item-section>
            <q-item-label>Photos</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-close-popup @click="onItemClick">
          <q-item-section>
            <q-item-label>Videos</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-close-popup @click="onItemClick">
          <q-item-section>
            <q-item-label>Articles</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-btn-dropdown>


  </div>
  <q-input color="white" placeholder-color="white" outlined v-model="text" dense="dense">
        <template v-slot:append>
          <q-icon name="search" color="white" />
        </template>
      </q-input>

        <q-toolbar-title class="flex flex-center">
          greyflow
        </q-toolbar-title>

        <div>

        <ul>
          <q-tabs class="q-mr-xl">
                        <q-btn round color="white"  flat icon="add" class="" @click="inception = true" />


    <q-dialog v-model="inception">
      <q-card>
        <q-card-section>
          <div class="text-h6">Add Boards</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
        <q-input outlined v-model="text" placeholder="Board Name" />
        </q-card-section>

        <q-card-actions align="right" class="text-primary">
          <q-btn flat label="Want to Proceed" @click="addNewBoard" />
          <q-btn flat label="Close" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>


            <q-btn round color="white"  flat icon="info" class=""/>
            <q-btn round color="white"  flat icon="notifications" />
          </q-tabs>
        </ul>

        </div>
      </q-toolbar>
    </q-header>



    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev'
  },
  {
    title: 'Github',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: 'https://github.com/quasarframework'
  },
  {
    title: 'Discord Chat Channel',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: 'https://chat.quasar.dev'
  },
  {
    title: 'Forum',
    caption: 'forum.quasar.dev',
    icon: 'record_voice_over',
    link: 'https://forum.quasar.dev'
  },
  {
    title: 'Twitter',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: 'https://twitter.quasar.dev'
  },
  {
    title: 'Facebook',
    caption: '@QuasarFramework',
    icon: 'public',
    link: 'https://facebook.quasar.dev'
  },
  {
    title: 'Quasar Awesome',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev'
  }
];

import { defineComponent, ref } from 'vue'
import axios from 'axios';


export default defineComponent({
  name: 'MainLayout',

  setup () {
    return {
      inception: ref(false),
      secondDialog: ref(false),
      apiUrl: 'https://greycodecamp.herokuapp.com/api/board'
    }
  },

  methods:{
    addNewBoard(){
      axios.get(`${this.apiUrl}`).then(response =>{
        console.log('response:', response);

      })
    }

  }



})



</script>
