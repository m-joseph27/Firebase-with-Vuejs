<template>
  <div class="locationParent">
    <div class="secondNav"></div>
    <div class="currentLocation"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
.locationParent{
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  .secondNav{
    background-color: wheat;
    width: 100%;
    height: 10%;
  }
  .currentLocation{
    background-color: tan;
    width: 100%;
    height: 90%;
  }
}

</style>
