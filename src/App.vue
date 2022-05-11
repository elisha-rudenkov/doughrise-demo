<template>
  <Header v-if="this.$route.path != '/'"></Header>
  <router-view />
</template>
<script>
// @ is an alias to /src
//import SidebarVue from "@/components/sidebar-nav.vue";

//1a2833 blue
//#915fb6 purple
//#fe6275 orange
//#f772a6 pink

import Header from "@/components/header.vue";

export default {
  components: { Header },
  data() {
    return {};
  },
  methods: {},
  computed: {},
};
</script>

<style>
:root {
  --text-primary: #0b1944;
  --text-secondary: #ffffff;
  --accent-1: #ffd3e2;
  --accent-2: #c8f7dc;
  --accent-3: #d5deff;
  --accent-4: #fee4cb;
  --bg-primary: rgb(255, 255, 255);
  --bg-secondary: #eeeaea77;
  --bg-3: #f3f3f3;
  --border-color: rgba(236, 232, 236, 0.733);
  --shadow-color: rgba(0, 0, 0, 0.2);
  --link-color-active-bg: #000;
}

/* prevent text highlighting */
.noselect {
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
  -webkit-tap-highlight-color: transparent;
}

html,
body {
  margin: 0px;
  height: 100%;
}
#app {
  font-family: "DM Sans", sans-serif;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
}
/* width */
::-webkit-scrollbar {
  display: none;
}

.header {
  height: 4rem;
}
</style>
