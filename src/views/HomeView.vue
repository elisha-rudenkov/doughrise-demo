<template>
  <div class="content">
    <div class="disclaimer">
      This is a login demo for DoughRise. <br />
      Login to access <b @click="this.$router.push('/dashboard')">/dashboard</b>
    </div>
    <div class="login-box noselect">
      <div class="greeting">{{ this.greeting }}</div>

      <!-- login form -->
      <form v-if="loginPage" @submit.prevent="loginWithEmailAndPass">
        <div class="login-field">
          <input v-model="email" autocomplete="on" placeholder="Email" />
        </div>

        <div class="login-field">
          <input
            v-model="password"
            placeholder="Password"
            type="password"
            autocomplete="on"
          />
        </div>
        <div @click="displayReset()" class="forgot-password">
          Forgot Password?
        </div>

        <div class="error">{{ error_msg }}</div>

        <button
          class="login-button"
          type="submit"
          @click="loginWithEmailAndPass"
        >
          Login
        </button>
      </form>

      <!-- reset password form -->
      <form v-if="resetPage" @submit.prevent="">
        <div class="login-field">
          <input v-model="email" autocomplete="on" placeholder="Email" />
        </div>

        <div v-if="resetPage" @click="displayLogin()" class="forgot-password">
          Back to Login
        </div>
        <div class="error">{{ error_msg }}</div>

        <button class="login-button" type="submit" @click="sendPassReset()">
          Reset
        </button>
      </form>

      <!-- register form -->
      <form v-if="registerPage" @submit.prevent="submitRegisterForm">
        <div class="login-field">
          <input
            v-model="username"
            autocomplete="off"
            placeholder="Your Name"
          />
        </div>

        <div class="login-field">
          <input v-model="email" autocomplete="off" placeholder=" Email" />
        </div>

        <div class="login-field">
          <input
            v-model="password"
            placeholder=" Password"
            type="password"
            autocomplete="off"
          />
        </div>
        <div class="login-field">
          <input
            v-model="confirm_password"
            placeholder=" Confirm Your Password"
            type="password"
            autocomplete="off"
          />
        </div>

        <div class="error">{{ error_msg }}</div>

        <button class="login-button" type="submit" @click="displayError">
          Register
        </button>
      </form>

      <!-- external login providers -->
      <div class="providers-wrap">
        <div class="provider" @click="signInWithGoogle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <g transform="matrix(1, 0, 0, 1, 27.009001, -39.238998)">
              <path
                fill="#4285F4"
                d="M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z"
              />
              <path
                fill="#34A853"
                d="M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.444 63.239 -14.754 63.239 Z"
              />
              <path
                fill="#FBBC05"
                d="M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.724 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.999 -25.464 56.619 L -21.484 53.529 Z"
              />
              <path
                fill="#EA4335"
                d="M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.789 L -6.734 42.369 C -8.804 40.429 -11.514 39.239 -14.754 39.239 C -19.444 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.099 -17.884 43.989 -14.754 43.989 Z"
              />
            </g>
          </svg>
          <div class="provider-text">Continue with Google</div>
        </div>
      </div>
      <div class="signup-btn">
        <p v-if="loginPage" @click="displayRegister()">
          Don't have an account?
        </p>
        <p v-if="registerPage" @click="displayLogin()">
          Already have an account?
        </p>
      </div>
    </div>
  </div>
</template>

<script>
//1a2833 blue
//#915fb6 purple
//#fe6275 orange
//#f772a6 pink

import { auth } from "../main";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

import {
  signInWithPopup,
  GoogleAuthProvider,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";

export default {
  name: "HomeView",
  data() {
    return {
      email: "",
      password: "",
      username: "",
      confirm_password: "",
      stored_auth_code: "",
      loginPage: true,
      registerPage: false,
      resetPage: false,
      error_msg: "",
      loader_style: "hidden",
      greeting: "",

      greetings_list: [
        "What's up?",
        "Hello, sunshine!",
        "How's it going?",
        "Nice to see you!",
        "Hey, it's been a while.",
        "Hiya!",
        "Ahoy!",
        "What's crackin'?",
        "Howdy!",
        "Peek-a-boo!",
        "Hello friend!",
        "I'm Batman.",
        "Here's Johnny!",
      ],
    };
  },
  methods: {
    displayLogin() {
      this.loginPage = true;
      this.registerPage = false;
      this.resetPage = false;
    },
    displayRegister() {
      this.loginPage = false;
      this.registerPage = true;
      this.resetPage = false;
    },
    displayReset() {
      this.loginPage = false;
      this.registerPage = false;
      this.resetPage = true;
    },

    /**
     * Displays a given error.
     */
    displayError(err) {
      this.error_msg = err;
      setTimeout(
        function () {
          this.error_msg = " ";
        }.bind(this),
        3000
      );
    },
    /**Sends a password reset to a given email */
    async sendPassReset() {
      sendPasswordResetEmail(auth, this.email)
        .then(() => {
          this.displayError("Password reset email has been sent.");
          setTimeout(() => {
            this.displayLogin();
          }, 1000);
        })
        .catch((error) => {
          console.log(error);
          let temp_err;
          switch (error.message) {
            case "Firebase: Error (auth/invalid-email).":
              temp_err = "Invalid email.";
              break;
            case "Firebase: Error (auth/network-request-failed).":
              temp_err = "It looks like you are offline. Try again later.";
              break;
            case "Firebase: Error (auth/user-not-found).":
              temp_err = "User with this email doesn't exist.";
              break;

            default:
              temp_err = "Something went terribly wrong.";
          }
          this.displayError(temp_err);
        });
    },

    /**
     * Validates user credentials and redirects to /dashboard on success.
     * Displays an error otherwise*/
    async loginWithEmailAndPass() {
      if (this.password == "") {
        this.error_msg = " The password cannot be empty";
      } else {
        try {
          this.loader_style = "visible";
          await signInWithEmailAndPassword(auth, this.email, this.password)
            .then(() => {
              // Signed in
              this.$router.push("/dashboard");
            })
            .catch((error) => {
              let temp_err;
              /* const errorCode = error.code; */
              const errorMessage = error.message;

              console.log(errorMessage);
              switch (error.message) {
                case "Firebase: Error (auth/invalid-email).":
                  temp_err = "Incorrect email or password.";
                  break;
                case "Firebase: Error (auth/wrong-password).":
                  temp_err = "Incorrect email or password.";
                  break;
                case "Firebase: Error (auth/user-not-found).":
                  temp_err = "User with this email doesn't exist.";
                  break;
                case "Firebase: Error (auth/user-disabled).":
                  temp_err = "User with this email has been disabled.";
                  break;
                case "Firebase: Error (auth/too-many-requests).":
                  temp_err = "Too many requests. Try again later.";
                  break;
                case "Firebase: Error (auth/operation-not-allowed).":
                  temp_err =
                    "Signing in with Email and Password is not enabled.";
                  break;
                case "Firebase: Error (auth/network-request-failed).":
                  temp_err = "It looks like you are offline. Try again later.";
                  break;
                default:
                  temp_err = "Something went terribly wrong.";
              }
              this.displayError(temp_err);
              this.loader_style = "hidden";
            });
        } catch (error) {
          console.log(error);
        }
      }
    },

    /**Logs the user in using Google */
    async signInWithGoogle() {
      const provider = new GoogleAuthProvider();
      try {
        await signInWithPopup(auth, provider);

        this.$router.push("/dashboard");
      } catch (error) {
        console.log(error);
      }
    },

    /**
     * Validates all fields and creates a user with a given name and password.
     */
    async submitRegisterForm() {
      if (this.confirm_password != this.password) {
        this.error_msg = "Passwords do not match.";
      } else if (
        this.confirm_password == "" ||
        this.password == "" ||
        this.username == ""
      ) {
        this.displayError("Fields cannot be empty.");
      } else {
        try {
          await createUserWithEmailAndPassword(auth, this.email, this.password);

          await updateProfile(auth.currentUser, {
            displayName: this.username,
          });

          this.$router.push("/dashboard");
        } catch (error) {
          let temp_err;
          console.log(error);

          switch (error.message) {
            case "Firebase: Error (auth/email-already-in-use).":
              temp_err =
                'This email is already registered. If you forgot your password click on "Forgot Password?"';
              break;
            case "Firebase: Error (auth/invalid-email).":
              temp_err = "Invalid email.";
              break;
            case "Firebase: Error (auth/operation-not-allowed).":
              temp_err = "Email/Password sign-in is currently disabled.";
              break;
            case "Firebase: Error (auth/weak-password).":
              temp_err = "Your password is too weak.";
              break;
            case "Firebase: Error (auth/network-request-failed).":
              temp_err = "It looks like you are offline. Try again later.";
              break;
            default:
              temp_err = "Something went terribly wrong.";
          }
          this.displayError(temp_err);
        }
      }
    },
  },
  created: function () {
    /**Generates a random number for the greeting title*/
    let num = Math.floor(Math.random() * 14);
    this.greeting = this.greetings_list[num];
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap");
.content {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.disclaimer {
  background-color: var(--accent-2);
  padding: 32px 16px;
  color: #fff;
  border-radius: 16px;
  font-size: 18px;
}
.disclaimer b {
  cursor: pointer;
}

.greeting {
  letter-spacing: 1px;
  font-size: 38px;

  padding: 20px;
  color: var(--text-primary);
}
.view-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  gap: 2rem;
}

.error {
  padding-top: 10px;
  padding-bottom: 2px;
  color: var(--accent-2);
  font-size: 16px;
}

.login-box {
  -webkit-box-shadow: 0 8px 12px 3px var(--shadow-color);
  box-shadow: 0 8px 12px 3px var(--shadow-color);
  background-color: var(--bg-secondary);

  padding: 32px 16px;

  margin-top: 4rem;
  min-width: 320px;

  border-radius: 20px;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.login-field {
  margin-top: 2%;
  position: relative;
  font-weight: 100;
  font-variant-caps: all-petite-caps;
}

.login-field input {
  line-height: 2rem;
  background-color: var(--bg-secondary);
  border: none;
  border-radius: 50px;
  text-align: left;
  text-indent: 1em;
  width: 80%;
  height: 3rem;
  font-size: 100%;
  font-family: Lato, sans-serif;
  font-weight: 700;
  color: var(--text-primary);
}

.login-field input:focus,
.login-field input:active {
  outline: none;
  line-height: 2rem;
}

.login-field input::placeholder,
.login-field input::placeholder {
  font-weight: 300;
  font-size: 15px;

  align-content: center;
  color: var(--text-primary);
}

.login-button {
  border: 1px solid var(--accent-2);
  background-color: var(--bg-primary);
  color: var(--text-primary);
  font-weight: 300;
  border-radius: 16px;
  padding: 15px 32px;
  margin-top: 20px;
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

.forgot-password {
  width: 85%;
  display: flex;
  justify-content: flex-end;
  font-size: 13px;
  padding-top: 6px;
  color: grey;
  cursor: pointer;
}

.signup-btn {
  margin-top: 10px;
  margin-bottom: 2%;
  text-decoration: none;
  color: grey;
}
.signup-btn a {
  text-decoration: none;
  color: grey;
  cursor: pointer;
}

.providers-wrap {
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  height: 4rem;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
}

.provider {
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  width: 80%;
  height: 2rem;
  color: #b8b8b8;
  border: 1px solid #fe6f9a46;
  border-radius: 16px;
  padding: 5px;
  cursor: pointer;
}

.provider-text {
  font-size: 1.2rem;
  text-align: center;
}

/*
Loader
*/
.loader-box {
  margin-top: none;
  padding-top: 40px;
  padding-left: 4px;
  -ms-flex-line-pack: center;
  align-content: center;
  -ms-flex-pack: distribute;
  justify-content: space-around;
  margin-top: none;
}

.loader-element {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.loader-element div {
  display: inline-block;
  position: absolute;
  left: 8px;
  width: 8px;
  background: rgb(208, 100, 230);
  -webkit-animation: loader-element 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
  animation: loader-element 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
  border-radius: 10px;
}
.loader-element div:nth-child(1) {
  left: 8px;
  -webkit-animation-delay: -0.24s;
  animation-delay: -0.24s;
}
.loader-element div:nth-child(2) {
  left: 32px;
  -webkit-animation-delay: -0.12s;
  animation-delay: -0.12s;
}
.loader-element div:nth-child(3) {
  left: 56px;
  -webkit-animation-delay: 0;
  animation-delay: 0;
}
@-webkit-keyframes loader-element {
  0% {
    top: 16px;
    height: 8px;
  }
  50% {
    top: 32px;
    height: 16px;
  }
  100% {
    top: 8px;
    height: 16px;
  }
}
@keyframes loader-element {
  0% {
    top: 16px;
    height: 8px;
  }
  50% {
    top: 32px;
    height: 16px;
  }
  100% {
    top: 8px;
    height: 16px;
  }
}

/*
End of Loader2
*/

/* Large screens */
@media only screen and (min-width: 600px) {
}

/* Mid screens */
@media only screen and (max-width: 1100px) {
}
/* Small screens */
@media only screen and (max-width: 600px) {
  .login-box {
    margin-top: 35%;
    width: 80%;
  }
  .login-box input {
    height: 4rem;
  }
  .provider {
    height: 3rem;
  }
  .provider-text {
    font-size: 20px;
  }
  .signup-btn {
    margin-top: auto;
    font-size: 15px;
  }
}
</style>
