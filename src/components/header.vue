<template>
  <div class="header">
    <div class="logo">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#ff6f9b"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="feather feather-gitlab"
      >
        <path
          d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z"
        ></path>
      </svg>
      <h2>DoughRise</h2>
    </div>
    <div class="search-wrapper">
      <input class="search-input" type="text" placeholder="Search" />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        class="feather feather-search"
        viewBox="0 0 24 24"
      >
        <defs></defs>
        <circle cx="11" cy="11" r="8"></circle>
        <path d="M21 21l-4.35-4.35"></path>
      </svg>
    </div>

    <button
      @click="menu_opened = true"
      @blur="menu_opened = false"
      class="user-info"
    >
      <img :src="user_photo" />
      <span>{{ username }}</span>
      <svg
        v-if="!menu_opened"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="feather feather-chevron-down"
      >
        <polyline points="6 9 12 15 18 9"></polyline>
      </svg>
      <svg
        v-else
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="feather feather-chevron-up"
      >
        <polyline points="18 15 12 9 6 15"></polyline>
      </svg>
    </button>
    <div class="menu" v-if="menu_opened">
      <div class="menu-item">Settings</div>
      <div class="menu-item" @mousedown="signOut()">Logout</div>
    </div>
  </div>
</template>

<script>
import { auth } from "@/main";
export default {
  name: "HeaderComponent",
  components: {},
  data() {
    return {
      menu_opened: false,
    };
  },
  methods: {
    toggleMenu() {
      console.log("fire");
      this.menu_opened = !this.menu_opened;
    },
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
    username: function () {
      return auth.currentUser.displayName;
    },
    user_photo: function () {
      return auth.currentUser.photoURL;
    },
  },
};
</script>

<style scoped>
.header {
  width: 100%;
  display: flex;
  align-items: center;

  border-bottom: 1px solid rgb(241, 241, 241);
  position: fixed;
  background-color: #fff;
  z-index: 99;
}
.logo {
  width: 12rem;
}
.logo svg {
  display: none;
}

.search-wrapper {
  border-radius: 20px;
  padding-right: 12px;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  max-width: 300px;

  box-shadow: 0 2px 6px 0 rgba(136, 148, 171, 0.2),
    0 24px 20px -24px rgba(71, 82, 107, 0.1);
  overflow: hidden;
  margin-left: 1rem;
}
.search-input {
  border: none;
  flex: 1;
  outline: none;
  height: 100%;
  padding: 0 20px;

  font-size: 16px;
}
.search-input:placeholder {
  opacity: 0.6;
}

.user-info {
  display: flex;
  align-items: center;
  margin-left: auto;
  gap: 10px;
  padding: 0;
  border: 0;
  background-color: transparent;

  padding-left: 12px;
  border-left: 2px solid #ddd;
  position: relative;
}
.user-info img {
  width: 32px;
  height: 32px;
  -o-object-fit: cover;
  object-fit: cover;
  border-radius: 50%;
  margin-right: 4px;
}
.user-info span {
  color: var(--main-color);
  font-size: 16px;
  line-height: 24px;
  font-weight: 700;
}
.user-info svg {
  cursor: pointer;
}

.menu-item {
  width: 100%;
  padding: 8px;
  cursor: pointer;
}
.menu-item:hover {
  background-color: rgb(243, 243, 243);
  border-radius: 16px;
}

.menu {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  right: 0;
  top: 5rem;
  font-size: 18px;
  padding: 16px 32px;
  border-radius: 16px;
  background-color: #fff;
  box-shadow: 0 2px 6px 0 rgba(136, 148, 171, 0.2),
    0 24px 20px -24px rgba(71, 82, 107, 0.1);
}

/* Large screens */
@media only screen and (min-width: 600px) {
}

/* Mid screens */
@media only screen and (max-width: 1100px) {
  .logo {
    width: 5rem;
  }
  .logo h2 {
    display: none;
  }
  .logo svg {
    display: inline;
  }
}
/* Small screens */
@media only screen and (max-width: 600px) {
  .search-input {
    width: 1rem;
  }
  .search-wrapper {
    width: 14rem;
  }
  .logo {
    width: 3rem;
  }
  .user-info span {
    display: none;
  }
}
</style>
