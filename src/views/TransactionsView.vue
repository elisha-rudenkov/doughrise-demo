<template>
  <div class="content">
    <Sidebar></Sidebar>
    <h1>Transactions Here</h1>
    
  </div>
</template>

<script scoped>
// @ is an alias to /src
//import SidebarVue from "@/components/sidebar-nav.vue";

//1a2833 blue
//#915fb6 purple
//#fe6275 orange
//#f772a6 pink
import { auth } from "@/main";

import Sidebar from "@/components/sidebar.vue";


export default {
  name: "TransactionsView",
  components: { Sidebar },
  data() {
    return {
      username: auth.currentUser.displayName,
    };
  },
  methods: {
   
  },
  computed: {},
};
</script>

<style>
.content {
  margin-top: 5rem;
  width: 100%;
  display: flex;
  
  /* align-items: center; */
}

@media only screen and (min-width: 600px) {
}

/* Mid screens */
@media only screen and (max-width: 1100px) {
}
/* Small screens */
@media only screen and (max-width: 600px) {
  .content {
 
  justify-content: center;
 
}
}
</style>
