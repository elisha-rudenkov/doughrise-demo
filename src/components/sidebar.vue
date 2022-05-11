<template>
  <div class="navbar">
    <ul class="navbar-nav">
      <li class="nav-item">
        <router-link to="/dashboard"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-home"
          >
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9 22 9 12 15 12 15 22"></polyline>
          </svg>
          <div class="link-text">Home</div></router-link
        >
      </li>
      <li class="nav-item">
        <router-link to="/transactions"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-activity"
          >
            <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
            <line x1="1" y1="10" x2="23" y2="10"></line>
          </svg>
          <div class="link-text">Transactions</div></router-link
        >
      </li>

      <li class="nav-item">
        <router-link to="/goals">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-target"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <circle cx="12" cy="12" r="6"></circle>
            <circle cx="12" cy="12" r="2"></circle>
          </svg>
          <div class="link-text">Goals</div>
        </router-link>
      </li>

      <li class="nav-item secondary" @click="signOut()">
        <a href="#" class="nav-link">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-activity"
          >
            <path d="M10 22H5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h5"></path>
            <polyline points="17 16 21 12 17 8"></polyline>
            <line x1="21" y1="12" x2="9" y2="12"></line>
          </svg>
          <div class="link-text">Log Out</div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { auth } from "@/main";
export default {
  name: "SidebarComponent",
  components: {},
  data() {
    return {
      notification_opened: false,
      menu_opened: false,
    };
  },
  methods: {
    displayNotification() {
      this.notification_opened = !this.notification_opened;
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
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Righteous&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Inconsolata&display=swap");

.navbar {
  margin-top: 4rem;
  z-index: 2;
  /* position: fixed; */
  display: flex;

  justify-content: center;
  background-color: var(--bg-primary);
  color: var(--text-primary);
  transition: width 600ms ease;
}

.navbar-nav {
  list-style: none;
  gap: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 93%;
  width: 100%;
  padding: 0;
}

.nav-item {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
}

.nav-item a:hover {
  background-color: rgb(235, 235, 235);
  border-radius: 50px;
}

.nav-item a {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 10px;
  gap: 10px;
  color: var(--link-color);
  text-decoration: none;
}

.nav-item a.router-link-exact-active {
  color: #fff;
  background-color: var(--link-color-active-bg);
  border-radius: 50px;
}
.link-text {
  display: none;

  min-width: 8rem;
}

/* Large screens */
@media only screen and (min-width: 600px) {
  .navbar {
    top: 0;
    width: 16rem;
    height: 93%;
    padding-right: 0px;
    text-align: center;
  }
  .mobile-nav-bar {
    visibility: hidden;
  }

  .navbar .link-text {
    display: inline;
    font-size: 18px;
    text-align: center;
    min-width: 8rem;
  }
}

/* Mid screens */
@media only screen and (max-width: 1100px) {
  .navbar {
    width: 5rem;
    padding-right: 0px;
  }

  .navbar .link-text {
    display: none;
  }

  .nav-item a {
    width: 2rem;
  }
}
/* Small screens */
@media only screen and (max-width: 600px) {
  :root {
    font-size: 12px;
  }

  li {
    padding: 0px;
    list-style: none;
    font-size: 9pt;
  }
  .secondary {
    display: none;
  }

  .navbar {
    /*  border-top: 1px solid var(--border-color);
    box-shadow: 1px -2px 20px var(--shadow-color); */
    position: fixed;
    visibility: visible;

    bottom: 0px;
    z-index: 3;
    width: 100%;
    height: 4rem;
    padding-bottom: 5px;
    margin-top: 0;
  }

  .navbar-nav {
    /* padding: 0rem 0px 0px 0rem; */
    background-color: var(--app-container);
    border-radius: 20px 20px 0 0;
    width: 100%;
    flex-direction: row;
    justify-content: space-around;
    gap: 0.5rem;
  }

  .nav-item a {
    justify-content: center;
  }
  .nav-item a svg:not(.add-song svg) {
    height: 20px;
  }
}
</style>
