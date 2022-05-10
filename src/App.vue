<template>
  <router-view />
</template>

<style>
:root {
  --text-primary: #0b1944;
  --text-secondary: #ffffff;
  --accent-1: #ffc36d;
  --accent-2: #ff6f9b;
  --accent-3: #e267aa;
  --accent-4: #7c50b9;
  --bg-primary: rgb(255, 255, 255);
  --bg-secondary: #eeeaea77;
  --bg-3: #f3f3f3;
  --border-color: rgba(236, 232, 236, 0.733);
  --shadow-color: rgba(0, 0, 0, 0.2);
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
  margin-top: 2rem;
  font-family: "Helvetica";
  text-align: center;
  color: #2c3e50;
  display: flex;
}
/* width */
::-webkit-scrollbar {
  display: none;
}

.header {
  height: 4rem;
}
</style>
