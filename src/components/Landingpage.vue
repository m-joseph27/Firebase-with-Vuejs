<template>
  <div class="loginParent">
    <!-- <div class="bubble1"></div> -->
    <div class="bubble2"></div>
    <!-- <img src="../assets/img/pink-corded-headphones-on-pink-and-teal-wall-1037996.jpg"> -->
    <div class="loginForm">
      <img src="../assets/img/pink-corded-headphones-on-pink-and-teal-wall-1037996.jpg">
      <div class="navLogin">
        <div class="welcome">
          <img src="../assets/img/welcome.png">
        </div>
        <div class="navName"><p>Alphabet.</p></div>
        <div class="navButton">
          <p>Login</p>
          <p>Sign up</p>
        </div>
      </div>
    </div>
    <login/>
  </div>
</template>

<script>
import Login from '../components/Login'

export default {
  components: {
    Login
  }

}
</script>

<style lang="scss" scoped>
@font-face{
  font-family: airbnb;
  src: url('../assets/fonts/AirbnbCerealBold.ttf');
}
@font-face{
  font-family: airbnbmedium;
  src: url('../assets/fonts/AirbnbCerealMedium.ttf');
}

.loginParent{
  width: 100vw;
  height: 100vh;
  display: flex;
  position: relative;
  opacity: .8;
  background: linear-gradient(rgb(187, 204, 219) ,#dd99b5);
  img{
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
  .bubble1{
    background: linear-gradient(rgb(187, 204, 219) ,#dd99b5);
    width: 150px;
    height: 150px;
    position: absolute;
    bottom: 5px;
    left: 5px;
    border-radius: 100%;
    opacity: .5;
    z-index: 2;
  }
  .loginForm{
    // background-color: gray;
    position: absolute;
    width: 85%;
    height: 85%;
    top: 8%;
    left: 7.5%;
    img{
      border-radius: 7px;
    }
    .navLogin{
      // background-color: #fff;
      position: absolute;
      top: 0;
      width: 100%;
      height: 60px;
      display: flex;
      justify-content: space-between;
      .welcome{
        // background-color: rosybrown;
        width: 400px;
        height: 200px;
        position: absolute;
        top: 340px;
        img{
          object-fit: contain;
        }
        // left: 300px;
      }
      .navName{
        // background-color: gray;
        width: 150px;
        height: 100%;
        p{
          font-family: airbnbmedium;
          font-size: 28px;
          font-weight: 600;
          color: rgb(186, 212, 235);
          text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.459);
        }
      }
      .navButton{
        // background-color: greenyellow;
        width: 300px;
        height: 100%;
        display: flex;
        justify-content: space-evenly;
        cursor: pointer;
        p{
          font-family: airbnbmedium;
          color: #F2C0C0;
          text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.459);
          font-size: 18px;
        }
      }
    }
  }
}

</style>
