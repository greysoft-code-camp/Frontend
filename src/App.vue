<template>
  <router-view />
</template>
<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App'
})
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.container {
  width: 90%;
  max-width: 900px;
  margin: 0 auto;
}

li {
  list-style: none;
}

body {
  font-size: 18px;
}

img {
  width: 100%;
  object-fit: contain;
}
.q-btn:before {
  content: "";
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  border-radius: inherit;
  box-shadow: none;
}
.q-drawer--left {
  left: 0;
  height: 155% !important;
  transform: translateX(-100%);
}

/* .q-drawer {
  position: fixed !important;
} */


.splide__pagination__page.is-active {
  background: #fe724c !important;
  transform: scale(1.4);
}

@media (max-width: 1300px) {
  .q-drawer--left {
    left: 0;
    height: 175% !important;
    transform: translateX(-100%);
  }
}

@media (max-width: 500px) {
  .noo {
    margin-right: 0 !important;
  }
  .non {
    margin: 0 !important;
  }

  /* .q-tab {
    margin: 0 !important;
} */
}
</style>
