<template>
  <div class="loginWrap">
    <div class="head">
      <p>Login</p>
    </div>
    <div class="body"></div>
    <div class="bottom">
      <button>Login</button>
      <button>Sign up</button>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@font-face{
  font-family: airbnbmedium;
  src: url('../assets/fonts/AirbnbCerealMedium.ttf');
}
@font-face{
  font-family: airbnb;
  src: url('../assets/fonts/AirbnbCerealBold.ttf');
}

.loginWrap{
  background-color: white;
  width: 400px;
  height: 400px;
  position: absolute;
  right: 150px;
  top: 120px;
  border-radius: 5px;
  .head{
    // background-color: wheat;
    width: 100%;
    height: 15%;
    display: flex;
    p{
      font-family: airbnbmedium;
      font-size: 20px;
      padding-left: 10px;
    }
  }
  .body{
    background-color: yellowgreen;
    width: 100%;
    height: 70%;
    display: flex;
  }
  .bottom{
    // background-color: aquamarine;
    width: 55%;
    height: 15%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    button{
      cursor: pointer;
      border: none;
      outline: none;
      width: 100px;
      height: 40px;
      border-radius: 5px;
      font-family: airbnbmedium;
      color: #dd99b5;
      text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.4);
      font-size: 15px;
    }
  }
}

</style>
