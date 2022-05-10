<template>
  <div class="content">
    <h2>Hello, {{username}}</h2>
    This should only be visible if you are logged in. <br>
    Please note that Front-end route guarding is great, but for the best security Firestore Rules and App Check have to be set up. <br>
    
    <div class="login-button" @click="signOut()">Log Out</div>
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

export default {
  name: "ProtectedView",
  components: {},
  data() {
    return {
      username: auth.currentUser.displayName
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
  computed: {
   
  },
};
</script>

<style>
.content {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
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
