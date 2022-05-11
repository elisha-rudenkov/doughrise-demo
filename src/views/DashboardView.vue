<template>
  <div class="content">
    <Sidebar></Sidebar>
    <Dashboard></Dashboard>
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
import Dashboard from "@/components/dashboard.vue";

export default {
  name: "ProtectedView",
  components: { Sidebar, Dashboard },
  data() {
    return {
      username: auth.currentUser.displayName,
    };
  },
  methods: {
    async signOut() {
      auth
        .signOut()
        .then(() => {
          localStorage.clear();
          this.$router.push("/");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  computed: {},
};
</script>

<style>
.content {
  width: 100%;
  display: flex;
  /* align-items: center; */
}
.login-button {
  border: 1px solid var(--accent-2);
  background-color: var(--bg-primary);
  color: var(--text-primary);
  font-weight: 300;
  border-radius: 16px;
  padding: 15px 32px;
  margin-top: 5rem;
  text-align: center;
  display: inline-block;
  font-size: 20px;

  letter-spacing: 1px;
  cursor: pointer;
}
.login-button:hover {
  border: 1px solid var(--border-color);
  color: var(--text-primary);
  background-color: var(--accent-2);
}

@media only screen and (min-width: 600px) {
}

/* Mid screens */
@media only screen and (max-width: 1100px) {
}
/* Small screens */
@media only screen and (max-width: 600px) {
}
</style>
