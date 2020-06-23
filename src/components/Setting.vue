<template>
  <div class="settingParent">
    <div class="setting"><h1>Under developing</h1></div>
    <router-link to="/home">
      <button>back</button>
    </router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.settingParent{
  background: linear-gradient(#CFE9E5,#e2e2e2);
  width: 100vw;
  height: 100vh;
  position: relative;
  .setting{
    position: absolute;
    top: 45%;
    left: 40%;
  }
  button{
    position: absolute;
    top: 55%;
    left: 47%;
  }
}

</style>
