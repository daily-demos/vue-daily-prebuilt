<template>
  <header class="header-container row">
    <div class="wrapper row">
      <div class="row">
        <img class="logo" alt="Daily logo" src="../assets/logo.png" />
        <h1>Daily Prebuilt demo</h1>
      </div>
      <div class="row">
        <a
          class="buttonish"
          target="_blank"
          href="https://docs.daily.co/reference"
          >API docs</a
        >
        <span class="divider"></span>
        <a target="_blank" href="https://github.com/daily-demos/prebuilt-ui"
          ><img class="icon" alt="Vue logo" src="../assets/github_logo.png"
        /></a>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
.header-container {
  background-color: var(--white);
  border-bottom: 1px solid var(--grey);
  padding: 0 24px;
}
h1 {
  font-size: 16px;
}
.wrapper {
  max-width: 1200px;
  width: 100%;
  margin: auto;
  padding: 4px 0 4px 24px;
}
.logo {
  width: 60px;
  height: 24px;
  margin-right: 24px;
}
.divider {
  background: var(--grey);
  margin: 0 16px;
  display: block;
  height: 32px;
  width: 1px;
}
.icon {
  width: 24px;
}
a.buttonish {
  color: var(--dark-blue);
  background: var(--white);
  border: 1px solid var(--grey);
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 12px;
  line-height: 16px;
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;
}
a.buttonish:active {
  background: var(--grey-lightest);
}
</style>
